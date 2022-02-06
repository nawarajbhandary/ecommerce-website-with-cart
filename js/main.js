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
  //Add to cart
  var addCart = document.getElementsByClassName("add-cart");
  // Since all the Individual element contain cart and Cart Icons on header have same className
  for (var i = 0; i < addCart.length; i++) {
    var button = addCart[i]; // i gives the Index of button
    button.addEventListener("click", addCartClicked);
  }
  //Buy Button works

  document
    .getElementsByClassName("btn-buy")[0]
    .addEventListener("click", buyButtonClicked);
}
function buyButtonClicked() {
  alert("Your Order is placed");
  var cartContent = document.getElementsByClassName("cart-content")[0];
  while (cartContent.hasChildNodes()) {
    cartContent.removeChild(cartContent.firstChild);
  }
  updateTotal();
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

//Add to Cart    button.addEventListener("click", addCartClicked);

function addCartClicked(event) {
  var button = event.target;
  var shopProducts = button.parentElement;
  var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
  var price = shopProducts.getElementsByClassName("price")[0].innerText;
  var productImg = shopProducts.getElementsByClassName("product-img")[0].src; //Gives product Img SRC
  addProductTocart(title, price, productImg); //Function Call with parameters
  updateTotal();
}

function addProductTocart(title, price, productImg) {
  var cartShopBox = document.createElement("div");
  cartShopBox.classList.add("cart-box");
  var cartItems = document.getElementsByClassName("cart-content")[0];
  var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
  for (var i = 0; i < cartItemsNames.length; i++) {
    if (cartItemsNames[i].innerText == title) {
      alert("You have already added this items to cart");
      return;
      // Function with parameter should be returned
    }
    console.log(cartItemsNames, title);
  }

  var cartBoxContent = `
                <img src="${productImg}" alt="EARBUDS" class="cart-img">
                <div class="detail-box">
                    <div class="cart-product-title">
                        ${title}
                    </div>
                    <div class="cart-price">${price}</div>
                    <input type="number" value="1" class="cart-quantity">
                </div>
                <!-- Remove Cart -->
                <i class='bx bxs-trash-alt cart-remove'></i>
                `;
  cartShopBox.innerHTML = cartBoxContent;
  cartItems.append(cartShopBox);
  cartShopBox
    .getElementsByClassName("cart-remove")[0]
    .addEventListener("click", removeCartItem);
  cartShopBox
    .getElementsByClassName("cart-quantity")[0]
    .addEventListener("change", quantityChanged);
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
  //If price contains some cents Value
  total = Math.round(total * 100) / 100;

  document.getElementsByClassName("total-price")[0].innerText = "$ " + total;
}
