
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
  updateCartModal()
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

  } else {
    cart.push({
      name,
      price,
      quatity: 1,
    })
  }

  updateCartModal()
}

function updateCartModal() {
  cartItemsContainer.innerHTML = ""
  let total = 0

  cart.forEach(item => {
    const cartItemmElement = document.createElement("div");
    cartItemmElement.classList.add("flex", "justify-between", "mb-4", "flex-col")
    cartItemmElement.innerHTML = `
    <div class="flex items-center justify-between">
      <div>
      <p class = "font-medium">${item.name}</p>
      <p>Qtd: ${item.quatity}</p>
      <p class = "font-medium mb-2">kz ${item.price.toFixed(2)}</p>
      </div>

      <button class = "remove-from-cart-btn" data-name="${item.name}">
        Remover
      </button>
  
    </div>
    `
    total += item.price * item.quatity

    cartItemsContainer.appendChild(cartItemmElement)
  })

  cartTotal.textContent = total.toLocaleString("pt-AO", {
    style: "currency",
    currency: "AOA"
  });

  cartCount.innerHTML = cart.length
}

cartItemsContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("remove-from-cart-btn")) {
    const name = event.target.getAttribute("data-name")
    removeItemCart(name)
  }

})

function removeItemCart(name) {
  const index = cart.findIndex(item => item.name === name)

  if (index !== -1) {
    const item = cart[index]

    if (item.quatity > 1) {
      item.quatity -= 1
      updateCartModal()
      return
    }

    cart.splice(index, 1)
    updateCartModal()
  }
}

addressInput.addEventListener("input", function (event) {
  let inputValue = event.target.value;

  if (inputValue !== "") {
    addressInput.classList.remove("border-red-500")
    addressWarn.classList.add("hidden")
  }

})

checkoutBtn.addEventListener("click", function () {

  const isOpen = checkRestaurantOpen()
  if (!isOpen) {
    alert("RESTAURANTE FECHADO NO MOMENTO!")
    return
  }

  if (cart.length === 0) return;
  if (addressInput.value === "") {
    addressWarn.classList.remove("hidden")
    addressInput.classList.add("border-red-500")
    return
  }
})

function checkRestaurantOpen() {
  const data = new Date()
  const hora = data.getHours()
  return hora >= 18 && hora <= 22
}

const spanItem = document.getElementById("date-span")
const isOpen = checkRestaurantOpen()

if (isOpen) {
  spanItem.classList.remove("bg-red-500")
  spanItem.classList.add("bg-green-600")
} else {
  spanItem.classList.remove("bg-green-600")
  spanItem.classList.add("bg-red-500")
}