const bgImage = document.getElementById('bg')
const weatherData = document.getElementById('weatherData')

// async function getBackgroundImage() {
//     let random = Math.floor(Math.random()*10)
//     const response = await fetch("https://api.unsplash.com/search/photos?query=Dubai&client_id=RtuxLQyMYHe3dJtZqEMNCGp7BB3kAPa6qoIFqMGIv3Q");
//     const data = await response.json();
//     return data.results[random].urls.full; 
// }

// async function renderBackgroundImage() {
//     try {
//         const imageUrl = await getBackgroundImage(); // Wait for the image URL
//         bgImage.style.backgroundImage = `url(${imageUrl})`; // Set the background image
//     } catch (error) {
//         console.error("Error fetching or rendering the background image:", error);
//     }
// }

// renderBackgroundImage()

// async function accessWeather(){
//     const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=11.0510&lon=76.0711&appid=cad498a5ed234a6fdda0ef8ec2d74bf5&units=metric");
//     const data = await response.json();
//     return data;
// }

// async function renderWeatherData(){
//     try{
//         const locationData = await accessWeather();
//         console.log(locationData)
//         weatherData.innerHTML = `<h2>${locationData.main.temp}°</h2>
//             <p>${locationData.name}</p>`;
//     } catch(error){
//         console.error("Error fetching or rendering the current weather:", error);
//     }
// }

// renderWeatherData();