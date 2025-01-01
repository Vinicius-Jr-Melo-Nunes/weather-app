document.getElementById('getWeatherButton').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'YOUR_API_KEY'; // Substitute 'YOUR_API_KEY' with your actual OpenWeatherMap API Key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            if (data.cod === 200) {
                const { main, weather, name } = data;
                weatherInfo.innerHTML = `
                    <h2>Weather in ${name}</h2>
                    <p>Temperature: ${main.temp}°C</p>
                    <p>Humidity: ${main.humidity}%</p>
                    <p>${weather[0].description}</p>
                `;
            } else {
                weatherInfo.innerHTML = `<p>${data.message}</p>`;
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('weatherInfo').innerHTML = `<p>Error fetching weather data</p>`;
        });
});
