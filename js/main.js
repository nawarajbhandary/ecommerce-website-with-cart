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
  //Quantity Changes

  var quantityInputs = document.getElementsByClassName("cart-quantity");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }
}

//Remove Item from cart function Invoked

function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updateTotal();
}

//Quantitychanged function for  input.addEventListener("change",quantityChanged)

function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
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

    //If price contains some cents Value
    total = Math.round(total * 100) / 100;

    document.getElementsByClassName("total-price")[0].innerText = "$ " + total;
  }
}
