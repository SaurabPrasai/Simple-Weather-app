
const btn=document.getElementById('btn');
const apiKey=//YOUR API KEY FROM OPENWEATHER
const temperature=document.querySelector('.tempt')
const descrip=document.querySelector('.first')
const name=document.querySelector('.last')


const getWeather=async()=>{ 
const city=document.getElementById('city');
const cityName=city.value; 

//fetching the data
const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
const data=await response.json()
temperature.innerHTML=`${data.main.temp}&#176C`
descrip.innerHTML=data.weather[0].description.toUpperCase();
name.innerHTML=`${data.name.toUpperCase()} ${data.coord.lon},${data.coord.lat}`
 city.value=""
}

btn.addEventListener('click',getWeather)

