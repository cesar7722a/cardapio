
const menu = document.getElementById("menu")
const cartBtn = document.getElementById("card-btn")
const cartModal = document.getElementById("card-modal")
const cartItemsContainer = document.getElementById("card-items")
const cartTotal = document.getElementById("card-total")
const checkoutBtn = document.getElementById("checkout-btn")
const closseModalBtn = document.getElementById("closse-modal-btn")
const cartCount = document.getElementById("card-count")
const addressInput = document.getElementById("address")
const addressWarn = document.getElementById("address-warn")


cartBtn.addEventListener("click", function () {
  cartModal.style.display = "flex"
})