const API_KEY = '738bc30f1fb7fff7a35d441a5e0970ae';

function getWeather() {
  const city = document.getElementById('cityInput').value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      document.getElementById('weatherData').classList.remove('hidden');
      document.getElementById('cityName').textContent = data.name;
      document.getElementById('temp').textContent = data.main.temp;
      document.getElementById('desc').textContent = data.weather[0].description;
      document.getElementById('humidity').textContent = data.main.humidity;
      document.getElementById('wind').textContent = data.wind.speed;
      document.getElementById('icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    })
    .catch(() => {
      alert('City not found!');
    });
}
