const seedColor = document.getElementById("seedcolor") //access seed color
const getColorSchemeButton = document.getElementById("getColorScheme") //access colors button
const colorTypes = document.getElementById("color-types") //access color scheme

getColorSchemeButton.addEventListener('click', function(e){
    console.log(seedcolor.value)
    console.log(colorTypes.value)
}) // get colors button listener