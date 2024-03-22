// ----- IMPORTS ----- //

import "core-js/stable";
import "regenerator-runtime/runtime";
import Quagga from "quagga";

import * as cfg from "./config.js";
import * as model from "./model.js";
import sidebarView from "./views/sidebarView.js";
import homepageView from "./views/homepageView.js";
import bmiView from "./views/bmiView.js";
import fruitInfoView from "./views/fruitInfoView.js";
import barcodeView from "./views/barcodeView.js";

// if (module.hot) {
//   module.hot.accept();
// }

// ----- CONTROLLER FUNCTIONS ----- //

const registerRoutes = function () {
  /**
   * function add all views inside the state
   * key: should be exactly as hash of .feature--link
   * value: should be the corrisponding instance of that view
   *
   */
  model.registerRoute("home", homepageView);
  model.registerRoute("bmi", bmiView);
  model.registerRoute("barcode", barcodeView);
  // ... Register other routes here when needed ...
};

const controlSidebarWidth = function (boolean) {
  // open sidebar if boolean === true and viceversa
  sidebarView.openCloseSidebar(boolean);
};

const renderCurrentView = function () {
  /**
   * function calls the render method of currentView
   * or renders homepageView in case there is no currentView
   */
  if (model.state.currentView) {
    model.state.currentView.render();
  } else {
    // Default to homepage view
    homepageView.render();
  }
};

const controlViewLinks = async function (element) {
  // update hash in url and state
  model.updateHash(element);

  // get current hash (without #)
  const currentHash = model.state.hash.slice(1);

  // update state (currentView property)
  model.updateCurrentView(currentHash);

  // close sidebar
  // sidebarView.closeSidebar().then(() => {
  //   console.log(`4: start rendering`);
  //   renderCurrentView();
  // });

  // close sidebar
  sidebarView.closeSidebar();

  // render currentView
  renderCurrentView();
};

const controlBMICalculator = function (data) {
  // validate input data
  if (data.height <= 0 || data.weight <= 0) {
    bmiView.renderErrorWrongValue();
    return;
  }

  // calculate the BMI and update state
  model.calculateUpdateBMI(data);

  // console.dir(data);
};

const controlBarcodeScanner = function () {
  // get new generated DOM elements
  const barcodeInteractiveElement = barcodeView.getBarcodeDOMElement();

  // make the barcodeInteractive element visible
  barcodeView.showbarcodeInteractive();

  // await getting barcode number
  model.getBarcode(barcodeInteractiveElement).then((barcodeNum) => {
    // then
    // update the UI input value with scanned barcode number
    barcodeView.setNewBarcodeInputValue(barcodeNum);
    // and make the barcodeInteractive element invisible
    barcodeView.hidebarcodeInteractive();
  });
};

const controlStopBarcodeScanner = function () {
  // stop Quagga scanner
  Quagga.stop();

  // and make the barcodeInteractive element invisible
  barcodeView.hidebarcodeInteractive();
};

const controlGetProductFromBarcode = async function (barcodeValue) {
  try {
    // get the product form API usin the barcode
    const product = await model.getProduct(barcodeValue);

    // create the HTML markup dinamically from product
    const cardMarkap = barcodeView.generateProductCardMarkup(product);

    // remove possible existing card on page (check + animation)
    barcodeView.checkCardOnPageOrRemoveCard().then(() => {
      // then render the newly created card
      barcodeView.renderNewCard(cardMarkap);
    });
  } catch (err) {
    // genere error markup html
    const errorMarkup = barcodeView.generateErrorMarkup(err);
    // remove possible existing card on page (check + animation)
    barcodeView.checkCardOnPageOrRemoveCard().then(() => {
      // then render the newly created card
      barcodeView.renderNewCard(errorMarkup);
    });
  }
};

// ----- ENTRY POINT FUNCTION ----- //

const init = function () {
  /**
   * Entry point function based on publish–subscribe pattern
   */
  registerRoutes();
  renderCurrentView();
  sidebarView.addHandlerManagerSibebar(controlSidebarWidth);
  sidebarView.addHandlerManagerLinks(controlViewLinks);
  homepageView.addHandlerButtonsLinks(controlViewLinks);
  bmiView.addHandlerBMICalculator(controlBMICalculator);
  barcodeView.addHandlerBarcodeScanner(controlBarcodeScanner);
  barcodeView.addHandlerStopBarcodeScanner(controlStopBarcodeScanner);
  barcodeView.addHandlerCheckBarcode(controlGetProductFromBarcode);
};
init();
