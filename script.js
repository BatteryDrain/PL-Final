const apiURL = "https://api.weatherapi.com/v1/current.json?key=4e5e576e864142e780a45600252403&q=Cancun";
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
            tempe.innerHTML = "Temperature: " + weatherInfo.current.temp_c + "°C";
            icon.src = "https:" + weatherInfo.current.condition.icon;
            description.innerHTML= weatherInfo.current.condition.text;
        })
        .catch(error => {
            console.error("Error:", error);
        });