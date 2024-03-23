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
     </div>
    `;
  }

  checkCardOnPageOrRemoveCard() {
    // checks if there is any card on page
    // in case removes it fish animation
    // returns a promise so can be chaned
    return new Promise((resolve, reject) => {
      const card = this._mainElement.querySelector(`.product-card`);
      if (!card) {
        // If no card is found, resolve immediately since there's nothing to remove
        resolve();
        return;
      }
      // Add the class to start the animation
      card.classList.add(`hidden-right`);

      // Wait for the CSS transition to finish before removing the card and resolving the promise
      setTimeout(() => {
        card.remove();
        resolve(); // Resolve the promise here
      }, cfg.CSS_TRANSITION_TIME_MS);
    });
  }

  renderNewCard(cardMarkap) {
    // inserts card as last child of .barcode--view
    // then removes the hidden class to obtain animation
    this._mainElement
      .querySelector(`.barcode--view`)
      .insertAdjacentHTML(`beforeend`, cardMarkap);
    const cardElement = this._mainElement.querySelector(`.product-card`);
    setTimeout(() => {
      cardElement.classList.remove(`hidden-right`);
    }, cfg.CSS_TRANSITION_TIME_MS);
  }

  generateProductCardMarkup(product) {
    return `
      <div class="product-card container hidden-right">
          <div class="product-card--main">
            <div class="product-card--main-img">
              <img
                class="image"
                src=${product.imageUrl}
                alt="product image"
              />
            </div>
            <div class="product-card--main-info grid-close">
              <h2 class="card__title">🛒 Info</h2>
              <ul class="card__list">
                <li class="card__list-item">
                  <span class="card__list-item--caption">barcode:</span>
                  <span class="card__list-item--value">${product.barcode}</span>
                </li>
                <li class="card__list-item">
                  <span class="card__list-item--caption">product:</span>
                  <span class="card__list-item--value">${product.product}</span>
                </li>
                <li class="card__list-item">
                  <span class="card__list-item--caption">category:</span>
                  <span class="card__list-item--value">${
                    product.category
                  }</span>
                </li>
                <li class="card__list-item">
                  <span class="card__list-item--caption">brand:</span>
                  <span class="card__list-item--value">${product.brand}</span>
                </li>
                <li class="card__list-item">
                  <span class="card__list-item--caption">country:</span>
                  <span class="card__list-item--value">${product.country}</span>
                </li>
                <li class="card__list-item">
                  <span class="card__list-item--caption">quantity:</span>
                  <span class="card__list-item--value">${
                    product.quantity
                  }</span>
                </li>
              </ul>
            </div>
          </div>

          
          ${this._checkAndGenerateNutrientsMarkup(product.nutrients)}
          
          ${this._checkAndGenerateIngredientsMarkup(product.ingredients)}

          ${this._checkAndGenerateAllergensMarkup(product.allergens)}

          <h4>source: <a target="_blank" href="https://world.openfoodfacts.org/">OpenFoodFacts</a></h4>
        </div>
    `;
  }

  _checkAndGenerateIngredientsMarkup(ingredients) {
    // if array of ingredients is not empty create div container
    // else return empty string
    return ingredients.length > 0
      ? `
        <div class="product-card--ingredients grid-far">
        <h2 class="card__title">🥦 Ingredients</h2>
        <ul class="card__list">

        ${ingredients.map(this._generateIngredientSubMarkup).join(``)}

        </ul>
      </div>
    `
      : ``;
  }

  _generateIngredientSubMarkup(ingredient) {
    return `
    <li class="card__list-item">
    <span class="card__list-item--caption caption-ingredient">${
      ingredient.text
    }</span>
    <span class="card__list-item--value">≈ ${ingredient.percent_estimate.toFixed(
      2
    )}%</span>
  </li>
    `;
  }

  _checkAndGenerateNutrientsMarkup(nutrients) {
    // First, filter the keys to only those whose corresponding value is not empty.
    const filteredNutrientKeys = Object.keys(nutrients).filter(
      (nutrientKey) => {
        // Access each nutrient object by its key and then check the 'value' property
        const nutrient = nutrients[nutrientKey];
        // nutrient is "not empty" if it has a 'value' property that is not undefined
        return nutrient.value !== undefined && nutrient.unit !== undefined;
      }
    );

    // check if there are nutrients before create div with unordered list
    // so get the second element (index 1) of each entry
    // and check if its  nested `value` property is not undefined
    return filteredNutrientKeys.length > 0
      ? `
      <div class="product-card--nutriments grid-far">
        <h2 class="card__title">🔬 Nutrients (100g)</h2>
        <ul class="card__list">

          ${Object.entries(nutrients)
            .map((nutrient) => {
              if (nutrient[1].value === undefined) return "";
              return this._generateNutrientsSubMarkup(nutrient[1]);
            })
            .join(``)}
          
        </ul>
      </div>
      `
      : ``;
  }

  generateErrorMarkup(error) {
    return `
    <div class="product-card container card-error-container hidden-right">
      <h2 class="card__title">😕 Product not found</h2>
      <p class="card__list-item--caption">${error.message}</p>
    </div>
    `;
  }

  _generateNutrientsSubMarkup(nutrient) {
    // generating list element for each element of array of nutrients
    return `
    <li class="card__list-item">
      <span class="card__list-item--caption">${nutrient.name}:</span>
      <span class="card__list-item--value">${nutrient.value}${nutrient.unit}</span>
    </li>
    `;
  }

  _checkAndGenerateAllergensMarkup(allergens) {
    // first check if there are any allergens before create a div
    if (!allergens) return ``;

    return `
    <div class="product-card--allergens">
    <h2 class="card__title">⚠️ Allergens</h2>
    <ul class="card__list-list">

    ${allergens.split(",").map(this._generateAllergensSubMarkup).join(``)}

    </ul>
  </div>
    `;
  }

  _generateAllergensSubMarkup(allergen) {
    return `
    <li>${allergen}</li>
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

  getBarcodeDOMElement() {
    // selecting elements
    this.barcodeScanBtn = this._mainElement.querySelector(`.btn--scan-barcode`);
    this.barcodeInput = this._mainElement.querySelector(
      'input[name="barcode--input"]'
    );
    this.barcodeInteractive = this._mainElement.querySelector(
      `.barcode--interactive`
    );

    // returning new DOM elements to controller
    return this.barcodeInteractive;
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

  addHandlerCheckBarcode(subscriberFunc) {
    this._mainElement.addEventListener(`click`, (e) => {
      // get check button
      const checkBtn = e.target.closest(`.btn--check-barcode`);
      if (!checkBtn) return;
      // get actual barcode value
      const barcodeValue =
        this._parentElement.querySelector(`.form__input`).value;
      if (!barcodeValue) return;
      // empty the input field and send barcode value to controller
      this._parentElement.querySelector(`.form__input`).value = ``;
      subscriberFunc(barcodeValue);
    });
  }
}

export default new BarcodeView();
