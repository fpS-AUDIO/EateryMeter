import MainView from "./MainView.js";

class BmiView extends MainView {
  //   _parentElement = document.querySelector(`bmi-view `);

  _cleanResultContainer() {
    this._mainElement.querySelector(`.bmi-container-result`).innerHTML = ``;
  }

  _generateMarkupHtml() {
    return `
    <div class="bmi-view hidden-right">
        <div class="form--container">
          <form class="bmi--form bmi--contaner">
            <h2>Body Mass Index Adults</h2>
            <div class="form__row">
              <label class="form__label">Height</label>
              <input type="number" class="form__input form__input--cm" placeholder="cm" />
            </div>
            <div class="form__row">
              <label class="form__label">Weight</label>
              <input type="number" class="form__input form__input--kg" placeholder="kg" />
            </div>
            <button class="btn calculate--bmi">Calculate</button>
        </form>
            <div class="bmi--contaner bmi-container-result">
              <h2>Welcome to the BMI Calculator</h2>
              <h3 class="bmi--result--sentence">Your results will be displayed here.</h3>
            </div>
        </div>

        <article class="article">
            <h2>What is BMI?</h2>
            <p>
              Body Mass Index (BMI) is a measurement that uses height and weight
              to estimate a person's body fat, providing an easy and quick
              method to assess whether someone has an appropriate body weight
              for their height. BMI is widely used in the medical community to
              screen for obesity, underweight, and healthy weight ranges, though
              it does not directly measure body fat percentage.
            </p>
            <h2>How to Calculate BMI</h2>
            <p>
              BMI is calculated by dividing a person's weight in kilograms (kg)
              by their height in meters (m) squared. The formula is:
            </p>
            <div class="formula">
              BMI =
              <span class="fraction"
                ><span class="weight">Weight in kg</span
                ><span class="line"></span
                ><span class="height">(Height in m)<sup>2</sup></span></span
              >
            </div>
            <h2>Interesting Facts about BMI</h2>
            <ul>
              <li>
                <strong>Historical Context:</strong> The BMI was devised in the
                early 19th century by Adolphe Quetelet, a Belgian astronomer,
                mathematician, statistician, and sociologist. It was originally
                called the Quetelet Index.
              </li>
              <li>
                <strong>Global Standards Vary:</strong> While the World Health
                Organization (WHO) provides a standard BMI classification, some
                countries and regions have adapted their classifications to
                better fit their population's health profiles.
              </li>
              <li>
                <strong>Not a Direct Measure of Health:</strong> While BMI is a
                useful screening tool, it does not directly measure body fat or
                account for muscle mass, bone density, overall body composition,
                and racial and sex differences.
              </li>
              <li>
                <strong>Use in Public Health:</strong> BMI is widely used in
                epidemiological studies to correlate the health effects of being
                overweight or obese with population health.
              </li>
              <li>
                <strong>Alternative Measurements: </strong> Due to BMI's
                limitations, other measurements like waist-to-hip ratio (WHR),
                waist-to-height ratio (WHtR), and body fat percentage are also
                used to provide a more complete picture of an individual's
                health.
              </li>
            </ul>
        </article>
    </div>
    `;
  }

  _generateErrorMarkup() {
    return `<h2>⚠️Please Enter the Correct Value...</h2>`;
  }

  _generateResultMarkup(levelObject) {
    return `
    <h2>Your Body Mass Index is</h2>
    <h1 class="bmi--result--number">${levelObject.bmiValue}</h1>
    <h3 class="bmi--result--sentence">${levelObject.description}</h3>
    `;
  }

  renderErrorWrongValue() {
    this._cleanResultContainer();
    const errorMarkup = this._generateErrorMarkup();
    this._mainElement.querySelector(`.bmi-container-result`).innerHTML =
      errorMarkup;
  }

  renderResultBMI(levelObject) {
    // clean container
    this._cleanResultContainer();

    // generate markup html
    const resultMarkup = this._generateResultMarkup(levelObject);

    // select DOM element result container
    const containerResult = this._mainElement.querySelector(
      `.bmi-container-result`
    );

    // update UI
    containerResult.innerHTML = resultMarkup;

    // dinamically update border color and font color
    containerResult.style.borderColor = `${levelObject.color}`;

    // dinamically update text color of description
    containerResult.querySelector(`h3`).style.color = `${levelObject.color}`;
  }

  addHandlerBMICalculator(subscribeFunc) {
    this._mainElement.addEventListener(`click`, (e) => {
      e.preventDefault();

      // check if button is clicked
      const btnCalc = e.target.closest(`.calculate--bmi`);
      if (!btnCalc) return;

      // make sure the form is still there
      const form = btnCalc.closest(`.bmi--form`);
      if (!form) return;

      // take the values from form and convert them into number
      const cmValue = +form.querySelector(`.form__input--cm`).value;
      const kgValue = +form.querySelector(`.form__input--kg`).value;

      // empty the form from current values
      form.querySelector(`.form__input--cm`).value = ``;
      form.querySelector(`.form__input--kg`).value = ``;

      // send object with input values to controller
      subscribeFunc({
        height: cmValue,
        weight: kgValue,
      });
    });
  }
}
export default new BmiView();
