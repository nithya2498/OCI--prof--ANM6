const apiKey = 'YOUR_API_KEY_HERE'; // Replace with your OpenWeatherMap API Key

document.getElementById('getWeatherBtn').addEventListener('click', getWeather);

function getWeather() {
    const city = document.getElementById('city').value;
    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                alert("City not found");
                return;
            }

            const cityName = data.name;
            const temp = data.main.temp;
            const description = data.weather[0].description;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;

            document.getElementById('cityName').innerText = cityName;
            document.getElementById('temperature').innerText = `Temperature: ${temp}°C`;
            document.getElementById('description').innerText = `Condition: ${description}`;
            document.getElementById('humidity').innerText = `Humidity: ${humidity}%`;
            document.getElementById('windSpeed').innerText = `Wind Speed: ${windSpeed} m/s`;
        })
        .catch(error => {
            console.error("Error fetching weather data", error);
        });
}
