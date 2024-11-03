const inputColor = document.getElementById("input-color") // Input Color
const colorTypes = document.getElementById("color-types") // Color Scheme Types - monochrome, complement etc.
const getColorSchemeButton = document.getElementById("getColorScheme") // Color Scheme Button

const colorPalette = document.getElementById("colorPalette") // Generates color palette inside this.

const footer = document.getElementById("footer") // Footer

// Listen for any event on get color scheme button.
getColorSchemeButton.addEventListener('click', function(){
    generateSchemeColors()
})

// Removes hash from the input color and gives a clean value.
function hashRemover(){
    let hexOfInputColor = inputColor.value
    let removeHash = hexOfInputColor.slice(1)
    return removeHash
}

// Generate color scheme basis the input color and color type.
function generateSchemeColors(){
    let selectedColor = hashRemover()
    fetch(`https://www.thecolorapi.com/scheme?hex=${selectedColor}&mode=${colorTypes.value}&count=4`)
        .then(res => res.json())
        .then(data => {
            const colors = data.colors
            for(let color of colors){
                
            }
        })
}