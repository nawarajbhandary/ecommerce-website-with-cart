// cart

let cartIcon = document.querySelector("#cart-icon");
let yesCart = document.querySelector(".cart");
let closeTheCart = document.querySelector("#close-cart");

//open cart
//This is awesome solution done by me, WOW WOW WOW
// cartIcon.addEventListener("click", () => {
//   yesCart.classList.add("active");
// });
function openCart() {
  cartIcon.addEventListener("click", () => {
    yesCart.classList.add("active");
  });
}
//closecart
//The mystery was, onclicking close, the right become -100% and otherwise 0%

function closeCart() {
  closeTheCart.addEventListener("click", () => {
    yesCart.classList.remove("active");
  });
}
