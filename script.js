const apiURL = "https://api.weatherapi.com/v1/current.json?key=4e5e576e864142e780a45600252403&q=calgary";
    fetch(apiURL)
        .then(response => {
            if(!response.ok) {
                throw new Error("Network response was not OK");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            var weatherInfo = data;
            // city.innerHTML = weatherInfo.location.name;
            // tempe.innerHTML = "Temperature: " + weatherInfo.current.temp_c + "°C";
            // flike.innerHTML = "feels like: " + weatherInfo.current.feelslike_c + "°C";
            // icon.src = "https:" + weatherInfo.current.condition.icon;
            // description.innerHTML= weatherInfo.current.condition.text;
        })
        .catch(error => {
            console.error("Error:", error);
        });