import { menuArray } from './data.js'
const feed = document.getElementById('feed')
const checkout = document.getElementById('checkout')
const cart = []

document.addEventListener('click', function(e){
    if(e.target.dataset.add){
      renderCheckout(e.target.dataset.add)
    }
})


function addItem(itemId){  
    const targetObject = menuArray.find(function(item){
        return item.id == itemId; 
    })
    if(!cart.includes(targetObject)){
      cart.push(targetObject)
    }
    return cart
}

function renderCheckout(itemId){
  const updatedCart = addItem(itemId)
  const getPrice = updatedCart.map(function(item){
    return item.price
  })
  const totalPrice = getPrice.reduce(function(x, y){
    return x+y;
  },0)
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