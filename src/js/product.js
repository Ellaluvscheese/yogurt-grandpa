import { getParam, renderHeaderFooter } from "./utils.mjs";
import productDetails from "./productDetails.mjs";

const productId = getParam("product");
productDetails(productId, ".product-detail");

// import { setLocalStorage, getParam } from "./utils.mjs";
// import { findProductById } from "./productData.mjs";

// const productId = getParam('product');
// console.log(findProductById(productId));

// // add to cart button event handler
// async function addToCartHandler(e) {
//   const product = await findProductById(e.target.dataset.id);
//   addProductToCart(product);
// }

// // add listener to Add to Cart button
// document
//   .getElementById("addToCart")
//   .addEventListener("click", addToCartHandler);

renderHeaderFooter()