// Imported Cats Data from Data.js.
import { catsData } from "./data.js"

// Accessed HTML elements using DOM manipulation.
const emotionRadios = document.getElementById('emotion-radios')
const getImageBtn = document.getElementById('get-image-btn')
const memeModal = document.getElementById('meme-modal')
const memeModalInner = document.getElementById('meme-modal-inner')
const gifsOnlyOption = document.getElementById('gifs-only-option')
const memeCloseBtn = document.getElementById('meme-modal-close-btn')

// Added event listener to the elements.
emotionRadios.addEventListener('change', highlightedOption)
getImageBtn.addEventListener('click', renderImage)
memeCloseBtn.addEventListener('click', function(e){
    memeModal.style.display = 'none'
})


function renderImage(){
    const render = getSingleCatObject()
    memeModal.style.display = 'flex'
    memeModalInner.innerHTML = ` <img 
        class="cat-img" 
        src="./images/${render.image}"
        alt="${render.alt}"
        >
        `
}


function getSingleCatObject(){
    const catsArray = getMatchingCatsArray()
    
    if(catsArray.length === 1){
        return catsArray[0]
    }
    else{
        const randomNumber = Math.floor(Math.random() * catsArray.length)
        return catsArray[randomNumber]
    }
}

// Access the specific object of the selected emotion
function getMatchingCatsArray(){
    if(document.querySelector('input[type="radio"]:checked')){
        const selectedEmotion = document.querySelector('input[type="radio"]:checked').value
        const isGif = gifsOnlyOption.checked
        const matchingArray = catsData.filter(function(cat){
            if(isGif){
                return cat.emotionTags.includes(selectedEmotion) && cat.isGif
            } else{
                return cat.emotionTags.includes(selectedEmotion)
            }
        })
        return matchingArray
    }
}


// Highlights the selected option.
function highlightedOption(e){
    const highlights = document.getElementsByClassName('radio')
    for (let highlight of highlights){
        highlight.classList.remove('highlight')
    }
    document.getElementById(e.target.id).parentElement.classList.add('highlight')
}

// Access the emotion from Cats Data and stores it in the emotionArray.
function getCatsEmotionArray(cats){
    const emotionArray = []

    for(let cat of cats){
        for(let emotion of cat.emotionTags){
            if(!emotionArray.includes(emotion)){
                emotionArray.push(emotion)   
            }
        }
    }
    return emotionArray
}

// Render the cats data and displays it on Website.
function renderEmotion(cats){
    const allEmotions = getCatsEmotionArray(cats)
    let radioItems = ''
    for (let emotion of allEmotions){
        radioItems += `<div class="radio"><label for="${emotion}" id="${emotion}">${emotion}</label>
        <input type="radio" value="${emotion}" id="${emotion}" name="emotions"/></div>`
    }
    emotionRadios.innerHTML = radioItems
}

renderEmotion(catsData)