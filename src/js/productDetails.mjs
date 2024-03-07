import { findProductById } from "./externalServices.mjs";
import { setLocalStorage, getLocalStorage } from "./utils.mjs";
import { cartCount } from "./stores.mjs";
import runAnimateCart from "./addToCart.js";

let product = {};
let error = {};

// productDetails is just bringing over the html structure and elements so that when we add the productDetailsTemplate it adds all the content.
export default async function productDetails(productId, selector) {
  // let product = await makeRequest(baseUrl + 'productID')
  try {
    product = await findProductById(productId);
    if (!product) throw new Error("Product not Found");

    const el = document.querySelector(selector);
    el.insertAdjacentHTML("afterbegin", productDetailsTemplate(product));
    document.getElementById("addToCart").addEventListener("click", addToCart);
  } catch (error) {
    console.log(error);
    const el = document.querySelector(selector);
    el.insertAdjacentHTML("afterbegin", productErrorTemplate(error));
  }
}

function addToCart() {
  let cartContents = getLocalStorage("so-cart");
  //check to see if there was anything there

  // add a quantity property to the product
  product.quantity = 1;

  // Check if item is already in cart
  let productFound = false;
  for (let ind = 0; ind < cartContents.length; ind++) {
    if (cartContents[ind].Id === product.Id) {
      cartContents[ind].quantity += 1;
      productFound = true;
      break; // Exit the loop since the product is found
    }
  }

  // If the product is not found, add it to the cart
  if (!productFound) {
    cartContents.push(product);
  }

  setLocalStorage("so-cart", cartContents);
  // update the visible cartCount
  cartCount.set(cartContents.length);
  runAnimateCart();
  document.getElementById("addToCart").addEventListener("click", function() {
    // Display the alert message
    alert("Item added to cart!");
  });

}


export function productDetailsTemplate(product) {
  return `<h3>${product.Brand.Name}</h3>

  <h2 class="divider">${product.NameWithoutBrand}</h2>

  <img
    class="divider"
    src="${product.Images.PrimaryLarge}"
    alt="${product.Name}
  />
  <p class="product-card__priceExtra">$ ${(product.FinalPrice * 1.2).toFixed(2)}</p>
  <p class="product-card__discount">20% OFF!</p>

  <p class="product-card__price">$ ${product.FinalPrice}</p>

  <p class="product__color">${product.Colors[0].ColorName}</p>

  <p class="product__description">${product.DescriptionHtmlSimple}</p>
    

  <div class="product-detail__add">
    <button id="addToCart" data-id='${product.Id}'>Add to Cart</button>
  </div> 


  `;
}

export function productErrorTemplate(error) {
  return `<h3>Sorry! This product cannot be found. Return home and try again.</h3>`;
  // insert the product specifics into a string of markup.
}
