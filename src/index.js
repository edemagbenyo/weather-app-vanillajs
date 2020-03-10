import './style.css'
window.onload = function(){

fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=f06f39597935c040f0dde71ac7cfd97c',{
  mode:'cors'
})
.then((response)=>{
  return response.json();
})
.then(response=>console.log(response))
.catch(error=>{
  console.log(error);
});
}