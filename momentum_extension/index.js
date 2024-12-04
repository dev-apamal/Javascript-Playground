const bgImage = document.getElementById('bg')

async function getBackgroundImage() {
    const response = await fetch("https://api.unsplash.com/search/photos?query=Dubai&client_id=RtuxLQyMYHe3dJtZqEMNCGp7BB3kAPa6qoIFqMGIv3Q");
    const data = await response.json();
    return data.results[0].urls.full; 
}

async function renderBackgroundImage() {
    try {
        const imageUrl = await getBackgroundImage(); // Wait for the image URL
        bgImage.style.backgroundImage = `url(${imageUrl})`; // Set the background image
    } catch (error) {
        console.error("Error fetching or rendering the background image:", error);
    }
}

renderBackgroundImage()