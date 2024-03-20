import * as cfg from "../config.js";

import MainView from "./MainView.js";

class BarcodeView extends MainView {
  _generateMarkupHtml() {
    return `
      <div class="barcode--view hidden-right">
      <div class="viewport barcode--interactive hidden-top"></div>
      <form class="barcode--form container">
        <div class="form__row">
          <label for="barcode--input" class="form__label">Barcode</label>
          <input
            class="form__input"
            type="text"
            name="barcode--input"
            placeholder="number"
          />
        </div>
        <div class="barcode--buttons">
          <button class="btn btn--scan-barcode" type="button">
            Start Scan
          </button>
          <button class="btn btn--close-barcode" type="button">
            Stop Scan
          </button>
          <button class="btn btn--check-barcode" type="button">
            Check
          </button>
        </div>
      </form>
      <article class="article comingsoon--container ">
          <h1>🔍 Product Barcode Nutrition Scanner - Coming Soon! 🛒</h1>
          <hr class="comingsoon--hr" />
          <h4>
            Imagine having the power to uncover the nutritional facts of
            packaged products with just a scan! Our forthcoming feature will
            make this a reality, allowing you to get detailed information about
            a product by simply scanning its barcode. Perfect for those who are
            meticulous about what goes into their grocery basket, this tool will
            help you make informed choices effortlessly. Gear up for a smarter,
            healthier shopping experience!
          </h4>
        </article>
      </div>
    `;
  }

  showbarcodeInteractive() {
    // make the barcodeInteractive element visible
    this.barcodeInteractive.style.display = "block";
    this.barcodeInteractive.classList.remove(`hidden-top`);
  }

  hidebarcodeInteractive() {
    // Hide the barcodeInteractive element
    this.barcodeInteractive.classList.add(`hidden-top`);
    setTimeout(() => {
      // also make it
      this.barcodeInteractive.style.display = "none";
    }, cfg.CSS_TRANSITION_TIME_MS);
  }

  setNewBarcodeInputValue(newValue) {
    this.barcodeInput.value = newValue;
  }

  getBarcodeDOMElements() {
    // selecting elements
    this.barcodeScanBtn = this._mainElement.querySelector(`.btn--scan-barcode`);
    this.barcodeInput = this._mainElement.querySelector(
      'input[name="barcode--input"]'
    );
    this.barcodeInteractive = this._mainElement.querySelector(
      `.barcode--interactive`
    );

    // returning new DOM elements to controller
    return {
      barcodeInput: this.barcodeInput,
      barcodeInteractive: this.barcodeInteractive,
    };
  }

  addHandlerBarcodeScanner(subscriberFunc) {
    // add evenet listener to "scan" button
    this._mainElement.addEventListener(`click`, (e) => {
      const btnScan = e.target.closest(`.btn--scan-barcode`);
      // check if there is any button
      if (!btnScan) return;

      // activate controlBarcodeScanner
      subscriberFunc();
    });
  }

  addHandlerStopBarcodeScanner(subscriberFunc) {
    // check if stop scanning button was clicked
    this._mainElement.addEventListener(`click`, (e) => {
      const stopBtn = e.target.closest(`.btn--close-barcode`);
      if (!stopBtn) return;
      // if it was clicked make controller close scanner
      subscriberFunc();
    });
  }
}

export default new BarcodeView();
