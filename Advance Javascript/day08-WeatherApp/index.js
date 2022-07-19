
// https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=6eed81b01f2ee0f7670a4ec34f5fb3f1&units=metric

const weatherAPi = {
    baseUrl : "https://api.openweathermap.org/data/2.5/weather",
    key : "6eed81b01f2ee0f7670a4ec34f5fb3f1"
}

const searchInputBox = document.querySelector("#input_Box")

searchInputBox.addEventListener("keypress",(e)=>{

    if(e.keyCode == 13){
        console.log(e.target.value)
        getWeatherReport(e.target.value)
    }
})

// get weatherAPi

function getWeatherReport(city){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6eed81b01f2ee0f7670a4ec34f5fb3f1&units=metric`)
    .then(res=>res.json())
    .then(weather=>console.log(weather))
}






// show weather Report


// Date Manage