document.getElementById("searchBtn").addEventListener("click", getWeather);

function getWeather() {
  const city = document.getElementById("_city").value;
  const apiKey = "c9990202bb75ca194bfdbf67ff2765ca"; // ← इथे तुझा API key टाक

  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then((data) => {
      document.getElementById("cityName").textContent = data.name;
      document.getElementById("temp").textContent = data.main.temp;
      document.getElementById("condition").textContent = data.weather[0].description;
      document.getElementById("humidity").textContent = data.main.humidity;
      document.getElementById("wind").textContent = data.wind.speed;
      document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

      document.getElementById("weatherResult").style.display = "block";
    })
    .catch((error) => {
      document.getElementById("weatherResult").style.display = "none";
      alert("❌ " + error.message);
    });
}

const themeSwitch = document.getElementById('themeSwitch');
const body = document.body;

// Default theme
body.classList.add('light-mode');

// Toggle switch logic
themeSwitch.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');
});

