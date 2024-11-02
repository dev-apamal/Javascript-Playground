const inputColor = document.getElementById("input-color") 
const getColorSchemeButton = document.getElementById("getColorScheme") 
const colorTypes = document.getElementById("color-types")
const footer = document.getElementById("footer")
const colorPalette = document.getElementById("colorPalette")

getColorSchemeButton.addEventListener('click', function(){
    generateSchemeColors()
}) // listen for any event on get color scheme.

// removes hash from the input color and gives a clean value.
function hashRemover(){
    let hexOfInputColor = inputColor.value
    let removeHash = hexOfInputColor.slice(1)
    return removeHash
}

// generate color scheme basis the input color and color type.
function generateSchemeColors(){
    let selectedColor = hashRemover()
    fetch(`https://www.thecolorapi.com/scheme?hex=${selectedColor}&mode=${colorTypes.value}&count=4`)
        .then(res => res.json())
        .then(data => {
            const colors = data.colors
            for (let color of colors){
                footer.innerHTML += `<div class="footer-hexcode">${color.hex.value}</div>`
                colorPalette.innerHTML += `<div style="background: ${color.hex.value}"`
                console.log(color.hex.value)
            }
        })
}