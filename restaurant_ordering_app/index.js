import { menuArray } from './data.js'
const feed = document.getElementById('feed')
const footercheckout = document.getElementById('footercheckout')
const cart = []

document.addEventListener('click', function(e){
    if(e.target.dataset.add){
      addItem(e.target.dataset.add)
    }
})


// Function to add an item to the cart
function addItem(itemId) {
  // Find the target item by its ID in the menu array
  const targetObject = menuArray.find(item => item.id == itemId);

  // Add the item to the cart only if it exists and isn't already in the cart
  if (targetObject && !cart.includes(targetObject)) {
    cart.push(targetObject);
  }

  // After adding the item, render the updated cart
  renderCheckout();
}

// Function to render the checkout section with cart items and total price
function renderCheckout() {
  // If the cart is empty, display a message
  if (cart.length === 0) {
    footercheckout.innerHTML = `
      <h2>Your Order</h2>
      <p>Your cart is empty.</p>
      <button disabled>Complete Order</button>
    `;
    return;
  }

  // Generate the HTML for each item in the cart
  const cartItemsHTML = cart.map(function(item) {
    return `
      <div class="itemsincart">
        <h3>${item.name}</h3>
        <h3>$${item.price}</h3>
      </div>
    `;
  }).join('');

  // Calculate total price
  const totalPrice = cart.reduce(function(total, item) {
    return total + item.price;
  }, 0);

  // Update the checkout section HTML with cart items and the total price
  footercheckout.innerHTML = `
    <h2>Your Order</h2>
    ${cartItemsHTML}
    <div class="totalPrice">
      <h3>Total:</h3>
      <h3>$${totalPrice}</h3>
    </div>
    <button>Complete Order</button>
  `
}


function getMenu(){
    const menu = menuArray.map(function(items){
        return `
      <div class="itemContainer">
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