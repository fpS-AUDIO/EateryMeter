import * as cfg from "../config.js";

export default class MainView {
  _mainElement = document.querySelector(`.main`);

  render() {
    // await cleaning main container with animation
    this._clearMainContainer().then(() => {
      // then create the new html
      const markupHtml = this._generateMarkupHtml();
      // insert the new html inside the main container
      this._mainElement.insertAdjacentHTML(`afterbegin`, markupHtml);

      // set new parent element (only for instances)
      this._setParentElement();
      // then remove hidden class with delay to achieve animation
      setTimeout(() => {
        this._showParentElement();
      }, cfg.DELAY_RENDER_VIEW_SEC * 1000);
    });
  }

  _clearMainContainer() {
    // Promisifying function (arrow function to use correct 'this' keyword)
    return new Promise((resolve) => {
      // if there is a child, add .hidden-right to this child (make animation)
      if (this._mainElement.firstElementChild) {
        this._mainElement.firstElementChild.classList.add(`hidden-right`);
      }
      // after the same time of css animation time, eliminate inner html and resolve promise()
      setTimeout(() => {
        this._mainElement.innerHTML = ``;
        resolve();
      }, cfg.CSS_TRANSITION_TIME_MS);
    });
  }

  _setParentElement() {
    this._parentElement = this._mainElement.firstElementChild;
  }

  _showParentElement() {
    this._parentElement.classList.remove(`hidden-right`);
  }
}
