import { findProductById } from "./productData.mjs";
import { setLocalStorage, getLocalStorage } from "./utils.mjs";
import { cartCount } from "./stores.mjs";

let product = {}


// productDetails is just bringing over the html structure and elements so that when we add the productDetailsTemplate it adds all the content. 
export default async function productDetails(productId, selector) {
    // let product = await makeRequest(baseUrl + 'productID')
    product = await findProductById(productId);
    const el = document.querySelector(selector);
    el.insertAdjacentHTML('afterbegin', productDetailsTemplate(product));
    document.getElementById("addToCart").addEventListener("click", addToCart);
}

function addToCart() {
  let cartContents = getLocalStorage("so-cart");
  //check to see if there was anything there
  if (!cartContents) {
    cartContents = [];
  }
  // then add the current product to the list
  cartContents.push(product);
  setLocalStorage("so-cart", cartContents);
  // update the visible cartCount
  cartCount.set(cartContents.length);
}

export function productDetailsTemplate(product){
   return `<h3>${product.Brand.Name}</h3>

   <h2 class="divider">${product.NameWithoutBrand}</h2>

   <img
     class="divider"
     src="${product.Image}"
     alt="${product.Name}
   />

   <p class="product-card__price">${product.FinalPrice}</p>

   <p class="product__color">${product.Colors[0].ColorName}</p>

   <p class="product__description">${product.DescriptionHtmlSimple}</p>
     

   <div class="product-detail__add">
     <button id="addToCart" data-id='${product.Id}'>Add to Cart</button>
   </div> 
   `
// insert the product specifics into a string of markup.
}