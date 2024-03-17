import MainView from "./MainView.js";

class BarcodeView extends MainView {
  _generateMarkupHtml() {
    return `
    <article class="article comingsoon--container hidden-right">
        <h1>🔍 Product Barcode Nutrition Scanner - Coming Soon! 🛒</h1>
        <hr class="comingsoon--hr" />
        <h4>
            Imagine having the power to uncover the nutritional facts of
            packaged products with just a scan! Our forthcoming feature will
            make this a reality, allowing you to get detailed information about
            a product by simply scanning its barcode. Perfect for those who are
            meticulous about what goes into their grocery basket, this tool will
            help you make informed choices effortlessly. Gear up for a smarter,
            healthier shopping experience!
        </h4>
    </article>
    `;
  }
}

export default new BarcodeView();
