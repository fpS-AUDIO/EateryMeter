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
            <h3>Your Ultimate Guide to Nutritious Living</h3>
            <hr />
            <p>
                Discover the world of health and flavor with EateryMeter, your
                go-to app for managing a balanced diet and lifestyle. From
                calculating your BMI to unlocking the nutritional secrets of
                fruits and packaged products, EateryMeter offers a comprehensive
                suite of tools for food enthusiasts. Embrace a healthier,
                informed, and tastier journey to wellness today.
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
