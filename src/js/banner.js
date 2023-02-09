export class Banner {
  constructor() {
    this.banner = document.getElementsByTagName("form")[0];

    this.subscrBtn = document.getElementsByTagName("input")[1];

    this.subscrBtn.addEventListener("click", () => {
      this.hide();
    });

    this._isShown = false;

    setTimeout(() => {
      this.hide();
    }, 15000);
  }

  show() {
    this.banner.classList.add("banner-show");
  }

  hide() {
    this.banner.classList.add("banner-hide");
    this._isShown = true;
  }
}
