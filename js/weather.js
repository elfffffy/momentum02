function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `/weather?lat=${lat}&lon=${lon}`;

    fetch(url).then(response => response.json()).then(data => {
        const city = document.querySelector('.city');
        const weather = document.querySelector('.temp');
        const icon = document.querySelector('.icon');
        const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        city.innerText = data.name;
        weather.innerText = `${data.main.temp}°C`;
        iconImg = document.createElement('img');
        iconImg.src = iconUrl;
        icon.appendChild(iconImg);
    });
}

function onGeoError() {
    alert("If you want to get weather information, please accept the location information.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);