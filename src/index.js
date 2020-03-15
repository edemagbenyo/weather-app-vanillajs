import './style.css';
import loadingImg from './images/loading.gif';
import Weather from './weather';
import Giphy from './giphy'
(() => {
  const body = document.querySelector('body')
  const form = document.querySelector('form');
  const inputLocation = document.querySelector('#location');
  const icon = document.querySelector('.icon');
  const loading = document.querySelector('.loading');
  const pCity = document.querySelector('.city');
  const pCountry = document.querySelector('.country');
  const pTemp = document.querySelector('.temp');
  const pTempMin = document.querySelector('.temp_min');
  const pTempMax = document.querySelector('.temp_max');
  const pFeelLike = document.querySelector('.feels_like');
  const btnCelsiu = document.querySelector('button.cel');
  const btnFaren = document.querySelector('button.far');

  let tempK; let tempKmin; let
    tempKmax; let tempFeels;
  let weather;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(process);
    const errorSpan = inputLocation.parentElement.querySelector('span');
    if (!inputLocation.checkValidity()) {
      errorSpan.textContent = 'Location is required';
      return;
    }
    loading.setAttribute('src', loadingImg);

    weather = new Weather(inputLocation.value);
    weather.getWeatherData().then(data => {
      tempK = data.temp;
      tempKmin = data.temp_min;
      tempKmax = data.temp_max;
      tempFeels = data.feels_like;
      pTemp.innerHTML = Weather.convertKtoC(data.temp);
      pTempMin.innerHTML = Weather.convertKtoC(data.temp_min);
      pTempMax.innerHTML = Weather.convertKtoC(data.temp_max);
      pCity.innerHTML = data.cityName;
      pCountry.innerHTML = data.countryCode;
      const span = pFeelLike.querySelector('span');
      span.innerHTML = Weather.convertKtoC(data.feels_like);
      loading.setAttribute('src', '');
      icon.setAttribute('src', `http://openweathermap.org/img/wn/${data.icon}@2x.png`);
      errorSpan.textContent = '';

      // enable conversion buttons
      btnCelsiu.disabled = false;
      btnFaren.disabled = false;

      //Set the gif on the db
      const gif = Giphy().search(data.gifimage);
      gif.then(data=>{
        // const
        console.log(data);
        body.style.backgroundImage = `url(${data.data.images.original.url})`;
        body.style.backgroundRepeat='none';
        body.style.backgroundSize='100%'
      });
    }).catch(() => {
      loading.setAttribute('src', '');
      errorSpan.textContent = 'Enter a correct location. eg. Accra';
    });
  });
  btnCelsiu.addEventListener('click', () => {
    pTemp.innerHTML = Weather.convertKtoC(tempK);
    pFeelLike.innerHTML = Weather.convertKtoC(tempFeels);
    pTempMin.innerHTML = Weather.convertKtoC(tempKmin);
    pTempMax.innerHTML = Weather.convertKtoC(tempKmax);
  });
  btnFaren.addEventListener('click', () => {
    pTemp.innerHTML = Weather.convertKtoF(tempK);
    pFeelLike.innerHTML = Weather.convertKtoF(tempFeels);
    pTempMin.innerHTML = Weather.convertKtoF(tempKmin);
    pTempMax.innerHTML = Weather.convertKtoF(tempKmax);
  });
})();