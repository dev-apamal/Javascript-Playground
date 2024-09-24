import { menuArray } from './data.js'
const feed = document.getElementById('feed')
const cart = []

document.addEventListener('click', function(e){
    if(e.target.dataset.add){
      addItem(e.target.dataset.add)
    }
    else if(e.target.id === "completeOrder"){
        const checkoutModal = document.getElementById('checkout-modal') 
        checkoutModal.style.display = 'flex'
    }
    else if(e.target.id === "submit"){
        const checkoutModal = document.getElementById('checkout-modal')
        const footercheckout = document.getElementById('footercheckout')
        const orderConfirmation = document.getElementById('orderConfirmation')
        checkoutModal.style.display = 'none'
        footercheckout.style.display = 'none'
        orderConfirmation.style.display = 'flex'

    }
})

function addItem(itemId) {
  const targetObject = menuArray.find(item => item.id == itemId);

  if (targetObject && !cart.includes(targetObject)) {
    cart.push(targetObject);
  }
  renderCheckout();
}


function renderCheckout() {
  const footercheckout = document.getElementById('footercheckout')
  const cartItemsHTML = cart.map(function(item) {
    return `
      <div class="itemsincart">
        <h3>${item.name}</h3>
        <h3>$${item.price}</h3>
      </div>
    `;
  }).join('');

  const totalPrice = cart.reduce(function(total, item) {
    return total + item.price;
  }, 0);

  footercheckout.innerHTML = `
    <h2>Your Order</h2>
    ${cartItemsHTML}
    <div class="totalPrice">
      <h3>Total:</h3>
      <h3>$${totalPrice}</h3>
    </div>
    <button class="completeOrder" id="completeOrder">Complete Order</button>
  `
}

function getMenu(){
    const menu = menuArray.map(function(items){
        return `<div class="itemContainer">
        <div class="itemImageAndDetailsHolder">
          <div class="itemImage"><img src="${items.image}" /></div>
          <div class="itemDetails">
            <h2>${items.name}</h2>
            <p>${items.ingredients}</p>
            <h3>${items.price}</h3>
          </div>
        </div>
        <div class="plusBtn"><i class="fa-solid fa-plus" data-add="${items.id}"></i></div>
      </div>`
    }).join('')
    return menu
}

function render(){
    feed.innerHTML = getMenu()
}

render()