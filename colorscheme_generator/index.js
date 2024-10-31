const inputColor = document.getElementById("input-color") // access input color
const seedcolor = document.querySelector(".seedcolor") // access seed color div
const getColorSchemeButton = document.getElementById("getColorScheme") // access colors button
const colorTypes = document.getElementById("color-types") // access different color types



getColorSchemeButton.addEventListener('click', function(e){
    // removes hash from the input color and gives a clean value.
    function hashRemover(){
        let hexOfInputColor = inputColor.value
        let removeHash = hexOfInputColor.slice(1)
        return removeHash
    }
    // stores the clean value in selectedColor variable
    const selectedColor = hashRemover()

    // Retrieve the selected color data from the Color API and apply it to the "seedcolor" div.
    // While we could directly use inputColor.value to display the color, 
    // I am making an API request here to learn/practice how API requests work.
    fetch(`https://www.thecolorapi.com/id?hex=${selectedColor}`)
        .then(res => res.json())
        .then(data => {
            seedcolor.style.background = `${data.hex.value}`
        } 
        )
}) // get colors button listener