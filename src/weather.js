export default class Weather {
  constructor(location = "accra") {
    this.location = location;
    
  }
  convertKtoC(tempK){
    return `${parseFloat(parseFloat(tempK) - 273.15).toFixed(2)} ºC` 
  }
  convertKtoF(tempK){
    return `${((parseFloat(tempK) - 273.15) * 9/5 + 32 )} ºF`
  }
  async getWeatherData() {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q="+this.location+"&appid=f06f39597935c040f0dde71ac7cfd97c",
      {
        mode: "cors"
      }
    );
    const data = await response.json();
    const weatherInfo={
      cityName:data.name,
      countryCode : data.sys.country,
      temp : data.main.temp,
      temp_min: data.main.temp_min,
      temp_max: data.main.temp_max,
      feels_like: data.main.feels_like,
      weather:data.weather[0].main
    }
    console.log(data);
    return weatherInfo
  }
}