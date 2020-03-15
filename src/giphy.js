export default function Giphy(){
  async function search(term){
   try{
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=IvRy5BaniNPKcmnafqVecToAWqRWNSam&s=${term}`)
    const data = await response.json(); 
    return data;
   }catch(e){
    console.log(e);
   }
  }
  return {
    search
  }
}