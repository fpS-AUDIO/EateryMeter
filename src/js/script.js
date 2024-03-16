// import "core-js/stable";
// import "regenerator-runtime/runtime";

// https://spoonacular.com/food-api/docs#Ingredient-Search
// https://openfoodfacts.github.io/openfoodfacts-server/api/ref-v2/#get-/api/v2/product/-barcode-
// https://www.nutritionix.com/business/api
// https://www.fruityvice.com/

/* ----- TODO: 
 V  add github link icon    
 V  create home page
 -  implmenet BMI View
 -  implement MVC architecture
 -  add functionality to BMI
 -  implmenet fruityvice Card View 
 -  add functionality to fruityvice
 ...
*/

const app = document.querySelector(`.app`);
const sideBar = document.querySelector(`.sidebar`);
const sideBarOpener = document.getElementById("sibebar-opener");

sideBarOpener.addEventListener(`change`, () => {
  if (sideBarOpener.checked) sideBar.classList.add(`sidebar--expanded`);
  else sideBar.classList.remove(`sidebar--expanded`);
});

const getInfoProduct = async function (barcodeString) {
  try {
    const response = await fetch(`
    https://world.openfoodfacts.net/api/v2/product/${barcodeString}`);
    if (!response.ok)
      throw new Error(`Something went wrong: ${response.status}`);
    const dataProduct = await await response.json();
    console.log(dataProduct);
  } catch (err) {
    console.log(err);
  }
};
const getInfoIngredient = async function (ingredient) {
  try {
    const response = await fetch(`
    https://world.openfoodfacts.org/cgi/search.pl?search_terms=${ingredient}`);
    if (!response.ok)
      throw new Error(`Something went wrong: ${response.status}`);
    const dataProduct = await await response.json();
    console.log(dataProduct);
  } catch (err) {
    console.log(err);
  }
};

// getInfoProduct(`3017620422003`);
// getInfoProduct(`80000532`);
// getInfoProduct(`020357122682`);
