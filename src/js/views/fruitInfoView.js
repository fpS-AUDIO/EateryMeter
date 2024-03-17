import MainView from "./MainView.js";

class FruitInfoView extends MainView {
  _generateMarkupHtml() {
    return `
    <article class="article comingsoon--container hidden-right">
        <h1>🍎 Fruit Nutritional Encyclopedia - Coming Soon! 🍌</h1>
        <hr class="comingsoon--hr" />
        <h4>
            Get ready to explore a world of flavors and nutrition! Our upcoming
            feature will unlock the secrets behind every bite of your favorite
            fruits. From avocados to zucchinis, discover fascinating data like
            calories, sugar content, and much more. Whether you're a fitness
            enthusiast or just looking to make healthier food choices, this
            feature will be your ultimate guide to the nutritional value of
            fruits. Stay tuned for an exciting journey to wellness!
        </h4>
    </article>
    `;
  }
}

export default new FruitInfoView();
