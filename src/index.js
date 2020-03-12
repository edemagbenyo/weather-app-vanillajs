import './style.css';
import loadingImg from './images/loading.gif';
import Weather from './weather';

(() => {
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
    tempKmax;
  let weather;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

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
      pTemp.innerHTML = weather.convertKtoC(data.temp);
      pTempMin.innerHTML = weather.convertKtoC(data.temp_min);
      pTempMax.innerHTML = weather.convertKtoC(data.temp_max);
      pCity.innerHTML = data.cityName;
      pCountry.innerHTML = data.countryCode;
      const span = pFeelLike.querySelector('span');
      span.innerHTML = weather.convertKtoC(data.feels_like);
      loading.setAttribute('src', '');
      icon.setAttribute('src', `http://openweathermap.org/img/wn/${data.icon}@2x.png`);
      errorSpan.textContent = '';

      // enable conversion buttons
      btnCelsiu.disabled = false;
      btnFaren.disabled = false;
    }).catch(() => {
      loading.setAttribute('src', '');
      errorSpan.textContent = 'Enter a correct location. eg. Accra';
    });
  });
  btnCelsiu.addEventListener('click', () => {
    pTemp.innerHTML = weather.convertKtoC(tempK);
    pTempMin.innerHTML = weather.convertKtoC(tempKmin);
    pTempMax.innerHTML = weather.convertKtoC(tempKmax);
  });
  btnFaren.addEventListener('click', () => {
    pTemp.innerHTML = weather.convertKtoF(tempK);
    pTempMin.innerHTML = weather.convertKtoF(tempKmin);
    pTempMax.innerHTML = weather.convertKtoF(tempKmax);
  });
})();