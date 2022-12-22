let ville = $('#ville');
let date = $('#date');
let degres = $('#degres');
let button = $('#button');
let input = $('#input');
let humidity = $('#humidite');

let now = new Date();

let aujourdhui = now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear();
date.html(aujourdhui);


let printPosition = function (coordinates) {
    console.log(coordinates)

    let requestURL =
        "https://api.openweathermap.org/data/2.5/weather?lat=" + `${coordinates.coords.latitude}` + "&lon=" +
        `${coordinates.coords.longitude}` + "&lang=fr&appid=8a4a001f1348b4bd88e32c9272eb8994&units=metric";

    let xhr = new XMLHttpRequest();

    xhr = new XMLHttpRequest();

    xhr.open("GET", requestURL);
    xhr.responseType = "json";

    xhr.onload = function () {
        if (xhr.status !== 200) {
            alert("Une erreur est survenue !");
            return;
        }

        let response = xhr.response;
        console.log(response);
        ville.html(response.name + ", " + response.sys.country);
        degres.html("Température " + Math.trunc(response.main.temp) + "°C <br> Température max : " +
            Math.trunc(response.main.temp_max) + "°C <br> Température min : " + Math.trunc(response.main.temp_min) + "°C");
        degres.addClass('up2');
        humidity.html("Humidité : " + Math.trunc(response.main.humidity) + "%");
        humidity.addClass('up');
    }

    xhr.send();
}


navigator.geolocation.getCurrentPosition(printPosition);
