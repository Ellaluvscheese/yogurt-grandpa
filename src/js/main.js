// import ProductList from "./components/ProductList.svelte";
import { renderHeaderFooter } from "./utils.mjs";

// new ProductList({
//   target: document.querySelector(".products"),
//   props: { category: "tents" },
// });

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the page finishes loading, open the modal
window.onload = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// When the page finishes loading, open the modal after a short delay
window.onload = function() {
    setTimeout(function() {
      modal.style.display = "block";
    }, 1000); // Delay in milliseconds (1000ms = 1 second)
  }
  
renderHeaderFooter();