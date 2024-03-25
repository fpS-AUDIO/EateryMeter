// import { reject } from "core-js/fn/promise";
import MainView from "./MainView.js";
import * as cfg from "../config.js";

class CalculatorView extends MainView {
  //   _parentElement = document.querySelector(`.calculator-view `);
  // calc-secondary--box is universal container to remove any 2nd child before adding one more
  _generateMarkupHtml() {
    return `
    <div class="calculator-view hidden-right">
          <div class="container">
            <form class="calculator--form">
              <h2>EateryMeter's Adult Body Metrics: Quick Health Insights</h2>

              <div class="form__radio-raw">
                <div class="radio-raw--choice">
                  <input
                    required
                    class="custom--radio-input"
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                  />
                  <label class="form__label" for="male">Male</label>
                </div>
                <div class="radio-raw--choice">
                  <input
                    class="custom--radio-input"
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                  />
                  <label class="form__label" for="female">Female</label>
                </div>
              </div>

              <div class="form__row">
                <label class="form__label">Height</label>
                <input
                  name="height"
                  required
                  type="number"
                  class="form__input form__input--cm"
                  placeholder="cm"
                />
              </div>

              <div class="form__row">
                <label class="form__label">Weight</label>
                <input
                  name="weight"
                  required
                  type="number"
                  class="form__input form__input--kg"
                  placeholder="kg"
                />
              </div>

              <div class="form__row">
                <label class="form__label">Age</label>
                <input
                  name="age"
                  required
                  type="number"
                  class="form__input form__input--years"
                  placeholder="years"
                />
              </div>

              <div class="form__select-row">
                <label class="form__label">Physical Activity Level</label>
                <select required name="pal">
                  <option value="">--Please choose an option--</option>
                  <option value="1.2">
                    Sedentary (little or no exercise)
                  </option>
                  <option value="1.375">
                    Lightly active (light exercise/sports 1-3 days/week)
                  </option>
                  <option value="1.55">
                    Moderately active (moderate exercise/sports 3-5 days/week)
                  </option>
                  <option value="1.725">
                    Very active (hard exercise/sports 6-7 days a week)
                  </option>
                  <option value="1.9">
                    Extra active (very hard exercise/sports & a physical job)
                  </option>
                </select>
              </div>

              <div class="btn-container">
                <button type="submit" class="btn calculate--calculator">Calculate</button>
                <button type="button" class="btn open-modal-window" data-dialogue="bmi">What's BMI?</button>
                <button type="button" class="btn open-modal-window" data-dialogue="bmr">What's BMR?</button>
                <button type="button" class="btn open-modal-window" data-dialogue="tef">What's TEF?</button>
                <button type="button" class="btn open-modal-window" data-dialogue="tdee">What's TDEE?</button>
              </div>

            </form>
          </div>
        </div>
    `;
  }

  _generateErrorMarkup() {
    return `
    <div class="container calculator-error calc-secondary--box hidden-right">
      <h2>Something went wrong...</h2>
      <h3>Please Enter the Correct Value.</h3>
    </div>
    `;
  }

  _updateResultsStyle(healthData) {
    this._mainElement.querySelector(
      `.calculator-container-result`
    ).style.borderColor = healthData.bmi.color;
  }

  _checkOrRemoveElement(className) {
    return new Promise((resolve, reject) => {
      // check if there is already this element on page
      const elementDOM = this._mainElement.querySelector(`${className}`);

      // if no element just exit function
      if (!elementDOM) {
        resolve();
        return;
      }

      // if there is already a message add hidden class to create animation
      elementDOM.classList.add(`hidden-right`);

      // Wait for the CSS transition to finish before removing the div and resolving the promise
      setTimeout(() => {
        elementDOM.remove();
        resolve();
      }, cfg.CSS_TRANSITION_TIME_MS);
    });
  }

  generateResultMarkup(healthData) {
    return `
    <div class="container calculator-container-result calc-secondary--box hidden-right">
        <h2>Your Personal Health Metrics Results:</h2>
        <div class="form__row">
          <h3>BMI:</h3>
          <h3 class="bmi--result--number">${healthData.bmi.bmiValue} (${healthData.bmi.description})</h3>
        </div>
        <div class="form__row">
          <h3>BMR:</h3>
          <h3 class="bmr--result--number">${healthData.bmr} kcal</h3>
        </div>
        <div class="form__row">
          <h3>TDEE (without TEF):</h3>
          <h3 class="tdee--result--number">${healthData.tdee} kcal per day</h3>
        </div>
        <div class="form__row">
          <h3>TDEE (+10% TEF):</h3>
          <h3 class="tdee--result--number">${healthData.tdeeWithEstimatedTEF} kcal per day</h3>
        </div>
        <p class="disclaimer">
          <strong>Health Disclaimer for EateryMeter</strong>
          <br />
          EateryMeter's health metrics (BMI, BMR, TDEE) are general guides,
          not medical advice. Individual health varies. Always consult a
          healthcare provider for personal advice. Use at your own risk.
        </p>
      </div>
    `;
  }

  renderErrorWrongValue() {
    // check if there is already an error message on page, in case remove it
    this._checkOrRemoveElement(`.calc-secondary--box`).then(() => {
      // generate new html markup
      const errorMarkup = this._generateErrorMarkup();
      // add it to UI
      this._mainElement
        .querySelector(`.calculator-view`)
        .insertAdjacentHTML(`beforeend`, errorMarkup);
      // then remove hidden class to add some transtion animation
      setTimeout(() => {
        this._mainElement
          .querySelector(`.calculator-error`)
          .classList.remove(`hidden-right`);
      }, cfg.CSS_TRANSITION_TIME_MS);
    });
  }

  renderResults(markupHtml, healthData) {
    this._checkOrRemoveElement(`.calc-secondary--box`)
      .then(() => {
        // Add it to UI
        this._mainElement
          .querySelector(`.calculator-view`)
          .insertAdjacentHTML(`beforeend`, markupHtml);

        // Return a new promise that resolves after the timeout
        return new Promise((resolve) => {
          setTimeout(() => {
            this._mainElement
              .querySelector(`.calculator-container-result`)
              .classList.remove(`hidden-right`);

            // Resolve the promise after the class removal and timeout
            resolve();
          }, cfg.CSS_TRANSITION_TIME_MS);
        });
      })
      .then(() => {
        // chanining methods to be sure to add style to an already existing element
        this._updateResultsStyle(healthData);
      });
  }

  addHandlerGetFormData(subscriberFn) {
    // listening the main element (always exists)#
    // set `useCapture` parameter of event listener to true
    // which means the event listener is set in the capture phase, not the bubbling phase
    this._mainElement.addEventListener(
      "submit",
      (e) => {
        // Prevent the default form submission
        e.preventDefault();

        // Check if the event target is a form or find the closest parent form
        const calcForm = e.target.closest(`.calculator--form`);

        // guard clause
        if (!calcForm) return;

        // get the form object and obtain an array by spreading it
        const dataArray = [...new FormData(calcForm)];
        // convert to actual array from dataArray (has entries structure)
        const dataObj = Object.fromEntries(dataArray);

        // Reset the form to its default values
        calcForm.reset();

        // handled by controller
        subscriberFn(dataObj);
      },
      true
    );
  }

  addHandlerModalWindowses() {
    this._mainElement.addEventListener(`click`, (e) => {
      // check if there is a btn
      const openModalBtn = e.target.closest(`.open-modal-window`);
      if (!openModalBtn) return;
      // get the data attribute
      const dataBtn = openModalBtn.dataset.dialogue;

      // show the dialogue window which matches the data-attribute
      const modalWindow = document.getElementById(`dialog--${dataBtn}`);
      if (!modalWindow) return;

      // open matching modal window
      modalWindow.showModal();

      // creating class property
      this._modalWindow = modalWindow;

      // to close clicking on overlay
      modalWindow.addEventListener(`click`, (event) => {
        const dialogDimensions = modalWindow.getBoundingClientRect();
        if (
          event.clientX < dialogDimensions.left ||
          event.clientX > dialogDimensions.right ||
          event.clientY < dialogDimensions.top ||
          event.clientY > dialogDimensions.bottom
        ) {
          modalWindow.close();
        }
      });
    });
  }

  addHandlerCloseModalWithBtn() {
    document.addEventListener(`click`, (e) => {
      const btnClose = e.target.closest(`.close-modal`);
      if (!btnClose) return;
      this._modalWindow.close();
    });
  }
}
export default new CalculatorView();
