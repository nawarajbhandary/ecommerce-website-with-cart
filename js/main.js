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

//cart working JS

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready(); // Ready from ekse condition
}

//Making ready function

function ready() {
  //Remove item from Cart
  var removecartCartButtons = document.getElementsByClassName("cart-remove");
  console.log(removecartCartButtons);

  for (var i = 0; i < removecartCartButtons.length; i++) {
    var button = removecartCartButtons[i];
    button.addEventListener("click", removeCartItem);
  }
}

//Remove Item from cart function Invoked

function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updateTotal();
}

//Update Total

function updateTotal() {
  var cartContent = document.getElementsByClassName("cart-content")[0];
  var cartBoxes = cartContent.getElementsByClassName("cart-box");
  var total = 0;

  for (var i = 0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName("cart-price")[0];
    var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }
}
