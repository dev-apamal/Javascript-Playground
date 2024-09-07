import { menuArray } from './data.js'
const feed = document.getElementById('feed')

document.addEventListener('click', function(e){
    if(e.target.dataset.add){
        addItem(e.target.dataset.add)
    }
})

function addItem(itemId){  
    const targetObject = menuArray.find(function(item){
        return item.id == itemId; 
    })
    console.log(targetObject);
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