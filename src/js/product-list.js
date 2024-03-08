import ProductList from "./components/ProductList.svelte";
import { getParam } from "./utils";


new ProductList({
    target: document.querySelector(".products"),
    props: { category: getParam('category') },
  });
