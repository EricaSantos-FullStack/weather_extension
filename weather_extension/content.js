fetch('https://api.openweathermap.org/data/2.5/weather?units=metric&q=S%C3%A3o%20Paulo&appid=37313c00b8125056729cdda9f6638f1c')

.then(response => response.json())
.then(data => {

    const weather = document.getElementById('name')
    weather.innerHTML = (data.name)

    const weather2 = document.getElementById('tempmin')
    weather2.innerHTML = (data.main.temp_min)
    
    const weather3 = document.getElementById('tempmax')
    weather3.innerHTML = (data.main.temp_max)
    
    const weather4 = document.getElementById('temp')
    weather4.innerHTML = (data.main.temp)
    
    const weather5 = document.getElementById('termica')
    weather5.innerHTML = (data.main.feels_like)
    
    console.log(data)

})