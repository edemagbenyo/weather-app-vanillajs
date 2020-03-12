export default class Weather {
  constructor(location = "accra") {
    this.location = location;
  }
  convertKtoC(tempK) {
    return `${parseFloat(parseFloat(tempK) - 273.15).toFixed(2)} ºC`;
  }
  convertKtoF(tempK) {
    return `${Number(((parseFloat(tempK) - 273.15) * 9) / 5 + 32).toFixed(2)} ºF`;
  }
  async getWeatherData() {
    try {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          this.location +
          "&appid=f06f39597935c040f0dde71ac7cfd97c",
        {
          mode: "cors"
        }
      );
      const data = await response.json();
      const weatherInfo = {
        cityName: data.name,
        countryCode: data.sys.country,
        temp: data.main.temp,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
        feels_like: data.main.feels_like,
        weather: data.weather[0].main,
        icon: data.weather[0].icon
      };
      return weatherInfo;
    } catch (e) {
      throw new Error("Enter a proper location")
    }
  }
}
