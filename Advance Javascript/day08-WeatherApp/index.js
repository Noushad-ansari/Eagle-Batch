
// https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=6eed81b01f2ee0f7670a4ec34f5fb3f1&units=metric

const weatherAPi = {
    baseUrl: "https://api.openweathermap.org/data/2.5/weather",
    key: "6eed81b01f2ee0f7670a4ec34f5fb3f1"
}

const searchInputBox = document.querySelector("#input_Box")

searchInputBox.addEventListener("keypress", (e) => {

    if (e.keyCode == 13) {
        // console.log(e.target.value)
        getWeatherReport(e.target.value)
    }
})

// get data weatherAPi

function getWeatherReport(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6eed81b01f2ee0f7670a4ec34f5fb3f1&units=metric`)
        .then(res => res.json())
        .then(showWeatherReport)
}

function showWeatherReport(weather) {
    // console.log(weather)
    let city = document.querySelector("#city")
    city.innerText = `${weather.name},${weather.sys.country}`

    let temprature = document.querySelector("#temp")
    temprature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`

    let minMaxTemp = document.querySelector("#min_max")
    minMaxTemp.innerHTML = `${Math.round(weather.main.temp_min)}&deg;C  (min) / ${Math.round(weather.main.temp_max)}&deg;C  (max)  `

    let weatherType = document.querySelector("#weather")
    weatherType.innerHTML = `${weather.weather[0].main}`

    let date = document.querySelector("#date")
    let currentDate = new Date()
    date.innerHTML = dateManage(currentDate)
    // date.innerText = 
    if (weather.weather[0].main == "Clouds") {
        document.body.style.background = "url('./public/cloud2.gif')"
        document.body.style.repeate = "no-repeate"
        document.body.style.backgroundSize = "cover"
    }

    // if(weather.weather[0].main == "Clouds"){
    //   document.body.style.background = "url('./public/cloud2.gif')"
    //   document.body.style.repeate = "no-repeate"
    //   document.body.style.backgroundSize = "cover"
    // }

    // if(weather.weather[0].main == "Snow"){
    //     let weather_Icon = document.querySelector("#icon")
    //   weather_Icon.setAttribute("src","./public/weather_icon/snow.png") 

    // }

    // console.log(weatherType.innerText)
    // switch (weatherType.textContent) {
    //     case "Clouds":
    //         {
            
    //             break;
    //         }


    //     default:
    //         break;
    // }



}


function dateManage(dateArg) {

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let year = dateArg.getFullYear() // number 2022
    let month = months[dateArg.getMonth()]
    let date = dateArg.getDate()  //number 5
    let day = days[dateArg.getDay()]

    return `${date} ${month} (${day}) ${year} `



}



// show weather Report






// Date Manage