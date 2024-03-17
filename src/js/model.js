import * as cfg from "./config.js";

export const state = {
  currentView: null,
  routes: {},
};

export const updateHash = function (element) {
  state.hash = element.hash;
  window.location.hash = state.hash;
};

export const registerRoute = function (hash, view) {
  state.routes[hash] = view;
};

export const updateCurrentView = function (hash) {
  state.currentView = state.routes[hash];
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
