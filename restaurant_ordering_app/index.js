import { menuArray } from "./data.js";
const menu = document.getElementById('menu')

document.addEventListener('click', function(e){
    console.log(e.target.id)
})

function getFeedData(){
    const feedData = menuArray.map(function(item){
       return `<div class="${item.id} itemContainer" id="${item.id}">
       <img src="${item.image}" class="itemImage"/>
       <h1 class="itemName">${item.name}</h1>
       <h3 class="itemIngredients">${item.ingredients}</h3>
       <h4>${item.price}</h4>
       </div>`
    }).join('')
    return feedData
}

function render(){
    menu.innerHTML = getFeedData()
}

render()
