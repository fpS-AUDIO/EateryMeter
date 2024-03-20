import * as cfg from "./config.js";
import bmiView from "./views/bmiView.js";
import Quagga from "quagga";

export const state = {
  currentView: null,
  routes: {},
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
  // updates state: change hash (also in URL)
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

export const calculateUpdateBMI = function (data) {
  // FORMULA: BMI = weight / (height * height)

  // transform cm height in m
  const heightMeters = data.height / 100;

  // calculate the actual BMI
  const actualBMI = data.weight / (heightMeters * heightMeters);

  // update current BMI by rounding it to 1 decimal place and retransform in number
  state.bmi.currentBMI = +actualBMI.toFixed(1);

  // updatin currentLevel of BMI
  updateCurrentBMILevel();

  // update UI: bmiView
  bmiView.renderResultBMI(state.bmi.currentLevel);
};

export const getBarcode = function (domElements) {
  // promisifying function to make it wait until the code is read
  return new Promise((resolve, reject) => {
    // redeclare the variables for easier readability
    const barcodeInteractive = domElements.barcodeInteractive;

    // Quagga.init(options, callback)
    Quagga.init(
      {
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: barcodeInteractive,
          constraints: {
            facingMode: "environment",
          },
        },
        decoder: {
          readers: [
            "ean_reader", // For EAN-13
            "upc_reader", // For UPC-A
            // "code_128_reader",
            // "ean_8_reader",
            // "code_39_reader",
            // "code_39_vin_reader",
            // "codabar_reader",
            // "upc_e_reader",
            // "i2of5_reader",
          ],
        },
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
  // https://world.openfoodfacts.org/api/v2/product/[barcode].json
  try {
    const response = await fetch(
      `https://world.openfoodfacts.org/api/v2/product/${barcode}.json`
    );
    if (!response.ok)
      throw new Error(`Something went wrong: ${response.status}`);

    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
// getProduct(8076809525237);

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
