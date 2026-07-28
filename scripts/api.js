const apiKey = import.meta.env.VITE_API_KEY; 
const cityName = "Dubai";

const data = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`) 
.then((response) => response.json())
.then(data => console.log(data))
