import * as cfg from "../config.js";

export default class MainView {
  _mainElement = document.querySelector(`.main`);

  render() {
    this._clearMainContainer();
    const markupHtml = this._generateMarkupHtml();
    this._mainElement.insertAdjacentHTML(`afterbegin`, markupHtml);
    this._setParentElement();
    setTimeout(() => {
      this._showParentElement();
    }, cfg.DELAY_RENDER_VIEW_SEC * 1000);
  }
  _clearMainContainer() {
    this._mainElement.innerHTML = ``;
  }

  _setParentElement() {
    this._parentElement = this._mainElement.firstElementChild;
  }

  _showParentElement() {
    this._parentElement.classList.remove(`hidden-right`);
  }
}
