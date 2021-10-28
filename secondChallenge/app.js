const list = document.getElementById('city-list');
const cityArray = ["London", "Basel", "Istanbul", "Berlin", "Lizbon", "Moscow", "Shanghai"]
let showWeather = document.getElementById("weather");
let imgSource = ["cloud.png", "rainy-day.png", "snowflake.png", "sun.png"]

/* 
 document.getElementById("button-city").addEventListener("click",function () {
   let result=cityArray.map(function (clist,index){
        return `<button id=${index}> ${clist} <button>`
    }).join("")
    list.innerHTML=result
})  */
let APIkey = 'adbaa54fce71ba2f91b4353b5cfc6b18';

function findCity() {

    for (let index = 0; index < cityArray.length; index++) {

        let cityName = cityArray[index]

        document.getElementById(`${index}`).addEventListener("click", function () {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=adbaa54fce71ba2f91b4353b5cfc6b18`)
                .then(response => response.json())
                .then(data => showWeather.innerHTML = `<p> ${data.weather[0].main}</p>
    ${showIcon(data.weather[0].description)}
    <p> Temperature: ${temperatureConverter(data.main.temp)} &#8451;</p>`)
        })

    }

}

function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    let float = Math.ceil(valNum - 273.15);
    return float
}
findCity()
let imageIcons = document.getElementById("icon")

function showIcon(weather) {
    switch (weather) {
        case "broken clouds":
             imageIcons.src = "./cloud.png"
             break;
        case "clear sky":
             imageIcons.src = "./sun.png"
            break;
        case "overcast clouds":
            imageIcons.src = "./cloud.png"
            break;
        case "light rain":
           imageIcons.src = "./rainy-day.png"
            break;
        default:
            break;
    }

    return ""
}