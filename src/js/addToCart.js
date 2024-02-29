export default function runAnimateCart() {
  const cartIcon = document.querySelector(".cart-icon");
  cartIcon.classList.add("animate-bounce");

  // Remove the animation class after the animation is complete
  setTimeout(() => {
    cartIcon.classList.remove("animate-bounce");
  }, 1000); // Adjust the duration to match your CSS animation duration
}
