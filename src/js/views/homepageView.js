import MainView from "./MainView.js";
// import chefImage from "../../img/chef.svg";
import logoImage from "../../img/logo-small.png";

class HomepageView extends MainView {
  // _parentElement = document.querySelector(`.homepage--container`);
  _generateMarkupHtml() {
    return `
    <div class="homepage--container hidden-right">
        <div class="img-wrapper--chef noSelect">
        <img
            class="image up-down-animated"
            src="${logoImage}"
            alt="image of an avocado"
        />
        </div>
        <div class="homepage-content">
          <h1>Welcome to EateryMeter</h1>
          <h3>Your Ultimate Guide to Health and Nutrition</h3>
          <hr />
          <p>
            Navigate the world of wellness with EateryMeter, your premier digital partner for a healthy lifestyle. Whether you're looking to understand your body's needs through precise BMI, BMR, and TDEE calculations or eager to explore the detailed nutrition profile of everyday products, EateryMeter is here for you. With our advanced barcode scanning feature, uncover the vital details of ingredients, allergens, nutrients, brand information, and much more, right at your fingertips. Gear up for an empowered, well-informed journey towards better health and nutrition today.
          </p>
            <div class="btn--container">
              <a href="#home" class="btn btn--hashlink noSelect" role="button">Home</a>
              <a href="#calculator" class="btn btn--hashlink noSelect" role="button">Calculator</a>
              <a href="#barcode" class="btn btn--hashlink noSelect" role="button">Barcode</a>
            </div>
        </div>
    </div>
    `;
  }

  addHandlerButtonsLinks(subscribeFunc) {
    this._mainElement.addEventListener(`click`, (e) => {
      const itemClicked = e.target.closest(`.btn--hashlink`);
      if (!itemClicked) return;
      subscribeFunc(itemClicked);
    });
  }
}

export default new HomepageView();
