import * as cfg from "./config.js";
import bmiView from "./views/bmiView.js";

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

// const getInfoProduct = async function (barcodeString) {
//   try {
//     const response = await fetch(`
//     https://world.openfoodfacts.net/api/v2/product/${barcodeString}`);
//     if (!response.ok)
//       throw new Error(`Something went wrong: ${response.status}`);
//     const dataProduct = await await response.json();
//     console.log(dataProduct);
//   } catch (err) {
//     console.log(err);
//   }
// };
// const getInfoIngredient = async function (ingredient) {
//   try {
//     const response = await fetch(`
//     https://world.openfoodfacts.org/cgi/search.pl?search_terms=${ingredient}`);
//     if (!response.ok)
//       throw new Error(`Something went wrong: ${response.status}`);
//     const dataProduct = await await response.json();
//     console.log(dataProduct);
//   } catch (err) {
//     console.log(err);
//   }
// };

// getInfoProduct(`3017620422003`);
// getInfoProduct(`80000532`);
// getInfoProduct(`020357122682`);
