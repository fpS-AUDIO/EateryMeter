class SidebarView {
  _parentElement = document.querySelector(`.sidebar`);
  _sidebarCheckbox = document.getElementById(`sibebar-opener`);

  openCloseSidebar(boolean) {
    /**
     * opens sidebar if recieved boolean argument is true
     */
    if (boolean) this._parentElement.classList.add(`sidebar--expanded`);
    else this._parentElement.classList.remove(`sidebar--expanded`);
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
