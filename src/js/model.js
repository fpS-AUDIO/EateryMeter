import * as cfg from "./config.js";
import calculatorView from "./views/calculatorView.js";
import Quagga from "quagga";

export const state = {
  currentView: null,
  routes: {},
  barcodeProduct: {
    barcode: null,
    product: {},
  },
  bmr: null,
  tdee: null,
  tdeeWith10TEF: null,
  bmi: {
    currentBMI: null,
    currentLevel: null,
    levels: {
      lvl1: {
        bmiValue: null,
        color: `#6495ED`,
        description: `Severe Underweight`,
        min: 0,
        max: 15.9,
      },
      lvl2: {
        bmiValue: null,
        color: `#1E90FF`,
        description: `Underweight`,
        min: 16,
        max: 18.4,
      },
      lvl3: {
        bmiValue: null,
        color: `#32CD32`,
        description: `Normal weight`,
        min: 18.5,
        max: 24.9,
      },
      lvl4: {
        bmiValue: null,
        color: `#FFA500`,
        description: `Overweight`,
        min: 25,
        max: 29.9,
      },
      lvl5: {
        bmiValue: null,
        color: `#FF8C00`,
        description: `Moderately obese`,
        min: 30,
        max: 34.9,
      },
      lvl6: {
        bmiValue: null,
        color: `#FF4500`,
        description: `Severely obese`,
        min: 35,
        max: 39.9,
      },
      lvl7: {
        bmiValue: null,
        color: `#FF0000`,
        description: `Very severely obese`,
        min: 40,
        max: 1000,
      },
    },
  },
  macronutrientsDistribution: {
    distrib: {
      carbsPercentage: null,
      proteinPercentage: null,
      fatPercentage: null,
    },
    grams: {
      carbs: null,
      proteins: null,
      fats: null,
    },
  },
  summurySentence: {
    age: null,
    gender: null,
    height: null,
    weight: null,
    sport: null,
    goal: null,
  },
  summuryHealthData: null,
};

// ----- HELPER FUNCTIONS ----- //

const updateCurrentBMILevel = function () {
  // Convert levels object to an array
  const levelArray = Object.values(state.bmi.levels);

  // Find the first level that matches with currentBMI
  const matchingLevel = levelArray.find((level) => {
    return (
      level.min <= state.bmi.currentBMI && level.max >= state.bmi.currentBMI
    );
  });

  // Update currentLevel of BMI with the found matching level
  state.bmi.currentLevel = matchingLevel;
  state.bmi.currentLevel.bmiValue = state.bmi.currentBMI;
};

// ----- EXPORT FUNCTIONS ----- //

export const updateHash = function (element) {
  // updates state: change hash (and also in URL)
  state.hash = element.hash;
  window.location.hash = state.hash;
};

export const registerRoute = function (hash, view) {
  // updates state: add new view
  state.routes[hash] = view;
};

export const updateCurrentView = function (hash) {
  // updates state: update current view
  state.currentView = state.routes[hash];
};

export const saveSummurySentenceData = function (data) {
  state.summurySentence.age = data.age;
  state.summurySentence.gender = data.gender;
  state.summurySentence.height = data.height;
  state.summurySentence.weight = data.weight;

  switch (data.goal) {
    case "weight":
      state.summurySentence.goal = `weight loss`;
      break;
    case "muscle":
      state.summurySentence.goal = `muscle gain`;
      break;
    case "maintenance":
      state.summurySentence.goal = `nutritional balance`;
      break;
  }

  switch (data.pal) {
    case "1.2":
      state.summurySentence.sport = `sedentary`;
      break;
    case "1.375":
      state.summurySentence.sport = `lightly active`;
      break;
    case "1.55":
      state.summurySentence.sport = `moderately active`;
      break;
    case "1.725":
      state.summurySentence.sport = `very active`;
      break;
    case "1.9":
      state.summurySentence.sport = `extra active`;
      break;
  }
};

export const calculateUpdateBMI = function (data) {
  // FORMULA to Calculate Body Mass Index:
  // BMI = weight / (height * height)

  // transform cm height in m
  const heightMeters = data.height / 100;

  // calculate the actual BMI
  const actualBMI = data.weight / (heightMeters * heightMeters);

  // update current BMI by rounding it to 1 decimal place and retransform in number
  state.bmi.currentBMI = +actualBMI.toFixed(1);

  // updatin currentLevel of BMI
  updateCurrentBMILevel();
};

export const calculateUpdateBMR = function (data) {
  // FORMULA to Calculate Basal Metabolic Rate (BMR)
  // For men: BMR = (10 * weight in kg) + (6.25 * height in cm) - (5 * age in years) + 5
  // For women: BMR = (10 * weight in kg) + (6.25 * height in cm) - (5 * age in years) - 161

  const wightKg = +data.weight;
  const heightCm = +data.height;
  const ageYears = +data.age;

  const neutralBMR = 10 * wightKg + 6.25 * heightCm - 5 * ageYears;
  if (data.gender === `male`) state.bmr = neutralBMR + 5;
  if (data.gender === `female`) state.bmr = neutralBMR - 161;
};

export const calculateUpdateTDEE = function (data) {
  // FORMULA to Calculate Total Daily Energy Expenditure (TDEE):
  // TDEE = BMR×PAL
  // this TDEE value will be without TEF
  const pal = +data.pal;
  const tdee = state.bmr * pal;

  state.tdee = tdee;

  // calculate the TDEE with estimated +10% of TEF of an average diet
  const tdeeWithTEF = state.tdee * 1.1;
  state.tdeeWith10TEF = tdeeWithTEF;
};

export const calculateUpdateMacronutrientDistr = function (data) {
  // FORMULA:
  // Weight Loss: 40% Carbohydrates, 35% Protein, 25% Fat
  // Muscle Gain: 50% Carbohydrates, 30% Protein, 20% Fat
  // Maintenance: 50% Carbohydrates, 20% Protein, 30% Fat

  // set percentage basing on user's choice
  if (data.goal === `weight`) {
    state.macronutrientsDistribution.distrib.carbsPercentage = 0.4;
    state.macronutrientsDistribution.distrib.proteinPercentage = 0.35;
    state.macronutrientsDistribution.distrib.fatPercentage = 0.25;
  } else if (data.goal === `muscle`) {
    state.macronutrientsDistribution.distrib.carbsPercentage = 0.5;
    state.macronutrientsDistribution.distrib.proteinPercentage = 0.3;
    state.macronutrientsDistribution.distrib.fatPercentage = 0.2;
  } else if (data.goal === `maintenance`) {
    state.macronutrientsDistribution.distrib.carbsPercentage = 0.5;
    state.macronutrientsDistribution.distrib.proteinPercentage = 0.2;
    state.macronutrientsDistribution.distrib.fatPercentage = 0.3;
  }

  // set local variables
  const carbsPercentage =
    state.macronutrientsDistribution.distrib.carbsPercentage;
  const proteinPercentage =
    state.macronutrientsDistribution.distrib.proteinPercentage;
  const fatPercentage = state.macronutrientsDistribution.distrib.fatPercentage;

  // calculate acutal grams of macronutrients
  const carbsGrams = (state.tdeeWith10TEF * carbsPercentage) / 4;
  const proteinGrams = (state.tdeeWith10TEF * proteinPercentage) / 4;
  const fatGrams = (state.tdeeWith10TEF * fatPercentage) / 9;

  //update state
  state.macronutrientsDistribution.grams.carbs = Math.round(carbsGrams);
  state.macronutrientsDistribution.grams.proteins = Math.round(proteinGrams);
  state.macronutrientsDistribution.grams.fats = Math.round(fatGrams);
};

export const setHealthMetricsSummury = function () {
  state.summuryHealthData = {
    bmi: state.bmi.currentLevel,
    bmr: Math.round(state.bmr),
    tdee: Math.round(state.tdee),
    tdeeWithEstimatedTEF: Math.round(state.tdeeWith10TEF),
    distribution: state.macronutrientsDistribution,
    summurySentence: state.summurySentence,
  };
};

export const getBarcode = function (domElement) {
  // promisifying function to make it wait until the code is read
  return new Promise((resolve, reject) => {
    // redeclare the variables for easier readability
    const barcodeInteractive = domElement;

    // Quagga.init(options, callback)
    Quagga.init(
      {
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: barcodeInteractive,
          constraints: {
            facingMode: "environment", // Use the rear-facing camera
            width: { ideal: 1920 }, // Suggests an ideal capture width
            height: { ideal: 1080 }, // Suggests an ideal capture height
            aspectRatio: { ideal: 1.777777778 }, // Optional:  specifically request a 16:9 aspect ratio
            focusMode: "continuous", // Request continuous autofocus
          },
        },
        locator: {
          // patchSize: Determines the size of the patches Quagga analyzes for detecting barcodes.
          // Options are "x-small", "small", "medium", "large", "x-large".
          // Smaller sizes can increase performance but may reduce detection accuracy,
          // while larger sizes may improve accuracy but reduce performance.
          // "medium" is a balanced choice for both speed and accuracy.
          patchSize: "medium",

          // halfSample: Controls whether Quagga should operate in half-sample mode.
          // When set to true, the image is scaled down to half its size before processing.
          // This can significantly improve performance with a potential trade-off in detection accuracy,
          // especially useful for high-resolution inputs or devices with powerful cameras.
          halfSample: true,
        },
        decoder: {
          readers: [
            {
              format: "ean_reader",
              config: {
                supplements: ["ean_2_reader"],
              },
            },
            "ean_8_reader", // For EAN-8 codes
            "ean_reader", // For EAN-13 codes
          ],
        },
        locate: true, // Enables locator and visual feedback in the UI
      },
      function (err) {
        if (err) {
          console.log(err);
          reject(err); // Reject the promise if there's an initialization error
          return;
        }
        Quagga.start();
      }
    );

    Quagga.onDetected(function (result) {
      // get the actual codebar value
      const code = result.codeResult.code;
      Quagga.stop();
      // Resolve the promise with the detected code
      resolve(code);
    });
  });
};

export const getProduct = async function (barcode) {
  try {
    // update state
    state.barcodeProduct.barcode = +barcode;

    // fetching API
    const response = await fetch(`${cfg.OPENFOOD_FACT_API_URL}${barcode}.json`);
    if (!response.ok)
      throw new Error(`Somethig went wrong: ${response.status}`);

    // if response is positive convert from json
    const data = await response.json();

    // update state
    state.barcodeProduct.product = {
      barcode: data?.code,
      imageUrl: data?.product?.image_url,
      product: data?.product?.product_name,
      category: data?.product?.categories,
      brand: data?.product?.brands,
      country: data?.product?.countries,
      quantity: data?.product?.quantity,
      allergens: data?.product?.allergens_from_ingredients,
      nutrients: {
        energy: {
          name: `energy`,
          value: data.product.nutriments.energy_100g,
          unit: data.product.nutriments.energy_unit,
        },
        carbohydrates: {
          name: `carbohydrates`,
          value: data?.product?.nutriments?.carbohydrates_100g,
          unit: data?.product?.nutriments?.carbohydrates_unit,
        },
        sugar: {
          name: `sugar`,
          value: data?.product?.nutriments?.sugars_100g,
          unit: data?.product?.nutriments?.sugars_unit,
        },
        fat: {
          name: `fat`,
          value: data?.product?.nutriments?.fat_100g,
          unit: data?.product?.nutriments?.fat_unit,
        },
        saturatedFat: {
          name: `saturated fat`,
          value: data?.product?.nutriments?.["saturated - fat_100g"],
          unit: data?.product?.nutriments?.["saturated - fat_unit"],
        },
        proteins: {
          name: `proteins`,
          value: data?.product?.nutriments?.proteins_100g,
          unit: data?.product?.nutriments?.proteins_unit,
        },
        fiber: {
          name: `fiber`,
          value: data?.product?.nutriments?.fiber_100g,
          unit: data?.product?.nutriments?.fiber_unit,
        },
        sodium: {
          name: `sodium`,
          value: data?.product?.nutriments?.sodium_100g,
          unit: data?.product?.nutriments?.sodium_unit,
        },
        salt: {
          name: `salt`,
          value: data?.product?.nutriments?.salt_100g,
          unit: data?.product?.nutriments?.salt_unit,
        },
      },
      ingredients: data?.product?.ingredients,
    };

    // return actual product to controller
    return state.barcodeProduct.product;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

/**
 * The willReadFrequently attribute is a hint you can provide to the browser 
 * that you intend to perform these kinds of operations often. 
 * This allows the browser to optimize how it handles the canvas, 
 * potentially improving performance by keeping the data in a format
 * that's faster to access or by making other optimizations behind the scenes.
 * 
 *  const canvas = document.getElementById('myCanvas');
    const context = canvas.getContext('2d', { willReadFrequently: true });
 */

// "code_128_reader",
// "ean_8_reader",
// "ean_reader", // For EAN-13
// "upc_reader", // For UPC-A
// "code_39_reader",
// "code_39_vin_reader",
// "codabar_reader",
// "upc_e_reader",
// "i2of5_reader",
