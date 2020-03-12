import './style.css'
import Weather from './weather'
window.onload = function(){
  const form = document.querySelector('form')
  const inputLocation = document.querySelector('#location')
  const body = document.querySelector('.body')
  const icon = document.querySelector('.icon')
  const pCity = document.querySelector('.city')
  const pCountry = document.querySelector('.country')
  const pTemp = document.querySelector('.temp')
  const pTempMin = document.querySelector('.temp_min')
  const pTempMax = document.querySelector('.temp_max')
  const pFeelLike = document.querySelector('.feels_like')

  form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const errorSpan = inputLocation.parentElement.querySelector("span");
    if(!inputLocation.checkValidity()){
      errorSpan.textContent = "Location is required"
      return
    }else{
      errorSpan.textContent = "loading..."
    }
    const weather = new Weather(inputLocation.value)
    weather.getWeatherData().then(data=>{
      pTemp.innerHTML = weather.convertKtoC(data.temp);
      pTempMin.innerHTML = weather.convertKtoC(data.temp_min)
      pTempMax.innerHTML = weather.convertKtoC(data.temp_max)
      pCity.innerHTML = data.cityName
      pCountry.innerHTML = data.countryCode
      const span = pFeelLike.querySelector('span')
      span.innerHTML=weather.convertKtoC(data.feels_like)
      errorSpan.textContent = ""
      icon.setAttribute('src', `http://openweathermap.org/img/wn/${data.icon}@2x.png`);
    })
  })
}