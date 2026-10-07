let vEl = document.getElementById("v");
let XHR = new XMLHttpRequest();
let data = null;

document.addEventListener("DOMContentLoaded", function () {
    grab();
});

function grab() {
    XHR.open("GET", "./file.json", true);

    XHR.onload = function () {
        if (XHR.status >= 200 && XHR.status < 300) {
            data = JSON.parse(XHR.responseText);
            populateV(data || {
                "piezo": {
                    "name": "AA",
                    "description": "barbesta"
                }
            });
        } else {
            console.error("Failed to load data:", XHR.statusText);
        }
    }

    XHR.send();
}

function populateV(data) {
    if (data) {
        console.log(Object.keys(data))
        vEl.innerHTML = Object.keys(data).map(item => `<article><header><h2>${data[item].name}</h2></header><p>${data[item].description}</p></article>`).join('<br>');
    } else {
        vEl.innerHTML = "<div>No data available</div>";
    }
}