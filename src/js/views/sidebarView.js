import * as cfg from "../config.js";

class SidebarView {
  _parentElement = document.querySelector(`.sidebar`);
  _sidebarCheckbox = document.getElementById(`sibebar-opener`);

  openCloseSidebar(boolean) {
    if (boolean) this._parentElement.classList.add(`sidebar--expanded`);
    else this._parentElement.classList.remove(`sidebar--expanded`);
  }

  closeSidebar() {
    // exit function if sidebar is not opened
    if (!this._parentElement.classList.contains(`sidebar--expanded`)) return;
    // remove checkbox
    this._parentElement.querySelector(`.sidebar--checkbox`).checked = false;
    // and actually close sidebar after given seconds
    setTimeout(() => {
      this._parentElement.classList.remove(`sidebar--expanded`);
    }, cfg.DELAY_AUTOCLOSE_SIDEBAR_SEC * 1000);
  }

  addHandlerManagerSibebar(subscribeFunc) {
    // listening on changes of ckeckbox
    this._sidebarCheckbox.addEventListener(`change`, (e) => {
      // passing boolean (checked or not) as argument
      subscribeFunc(e.target.checked);
    });
  }

  addHandlerManagerLinks(subscribeFunc) {
    this._parentElement.addEventListener(`click`, (e) => {
      const itemClicked = e.target.closest(`.__features--item`);
      if (!itemClicked) return;
      const anchorCliked = itemClicked.querySelector(`.feature--link`);
      subscribeFunc(anchorCliked);
    });
  }
}
export default new SidebarView();
