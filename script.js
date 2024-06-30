
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

let cart = []

//abrir modal do carrinho
cartBtn.addEventListener("click", function () {
  cartModal.style.display = "flex"
})

//Fechar o modal quando clicar fora
cartModal.addEventListener("click", function (event) {
  if (event.target === cartModal) {
    cartModal.style.display = "none"
  }
})

closseModalBtn.addEventListener("click", function () {
  cartModal.style.display = "none"
})

menu.addEventListener("click", function (event) {

  let parentButton = event.target.closest(".add-to-cart-btn")

  if (parentButton) {
    const name = parentButton.getAttribute("data-name")
    const price = parseFloat(parentButton.getAttribute("data-price"))
    addTocart(name, price)
  }

})

//função para adicionar no crrinho
function addTocart(name, price) {

  const exestingIItem = cart.find(item => item.name === name)

  if (exestingIItem) {
    exestingIItem.quatity += 1
    return
  }

  cart.push({
    name,
    price,
    quatity: 1,
  })
}