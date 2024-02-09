import Shoppingcart from "./components/Shoppingcart.svelte";
import { renderHeaderFooter } from './utils.mjs'; 

new Shoppingcart ({
  target: document.querySelector(".products"),
});

renderHeaderFooter();
