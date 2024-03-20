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
  // model.registerRoute("fruit", fruitInfoView);
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

// ----- ENTRY POINT FUNCTION ----- //

const init = function () {
  /**
   * Entry point function based on publish–subscribe pattern
   */
  // registerRoutes();
  // renderCurrentView();
  sidebarView.addHandlerManagerSibebar(controlSidebarWidth);
  // sidebarView.addHandlerManagerLinks(controlViewLinks);
  // homepageView.addHandlerButtonsLinks(controlViewLinks);
  // bmiView.addHandlerBMICalculator(controlBMICalculator);
};
init();

// ----- TESTING BARCODE INPUT ----- //

const barcodeScanBtn = document.querySelector(`.btn--scan-barcode`);
const barcodeForm = document.querySelector(`.barcode--form`);
const barcodeInteractive = document.querySelector(`.barcode--interactive`);

barcodeScanBtn.addEventListener("click", function () {
  // Explicitly make the barcodeInteractive element visible every time the scan button is clicked
  barcodeInteractive.style.display = "block"; // Adjust this to 'inline-block' if it fits your layout better

  // Quagga.init(config, callback)
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
          "code_128_reader",
          "ean_reader",
          "ean_8_reader",
          "code_39_reader",
          "code_39_vin_reader",
          "codabar_reader",
          "upc_reader",
          "upc_e_reader",
          "i2of5_reader",
        ],
      },
    },
    function (err) {
      if (err) {
        console.log(err);
        return;
      }
      console.log("Initialization finished. Ready to start");
      Quagga.start();
    }
  );

  Quagga.onDetected(function (result) {
    const code = result.codeResult.code;
    console.log(code);
    // barcodeForm.value = code;
    document.querySelector('input[name="barcode"]').value = code;
    Quagga.stop();
    // Hide the barcodeInteractive element
    barcodeInteractive.style.display = "none";
  });
});

// document.getElementById('scan-btn').addEventListener('click', function() {
//   Quagga.init({
//       inputStream: {
//           name: "Live",
//           type: "LiveStream",
//           target: document.querySelector('#interactive'),
//           constraints: {
//               facingMode: "environment" // Use the rear camera
//           },
//       },
//       decoder: {
//           readers: ["code_128_reader", "ean_reader", "ean_8_reader", "code_39_reader", "code_39_vin_reader", "codabar_reader", "upc_reader", "upc_e_reader", "i2of5_reader"] // Add barcode formats here
//       },
//   }, function(err) {
//       if (err) {
//           console.log(err);
//           return
//       }
//       console.log("Initialization finished. Ready to start");
//       Quagga.start();
//   });

//   Quagga.onDetected(function(result) {
//       var code = result.codeResult.code;
//       document.getElementById('barcode-input').value = code;
//       Quagga.stop(); // Stop Quagga after a barcode is detected
//   });
// });
