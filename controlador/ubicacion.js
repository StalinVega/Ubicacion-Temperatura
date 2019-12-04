const axios = require('axios');

const getCiudadLatLon= async(nombre)=>{
    const ciudad = encodeURI(nombre);
    const instance = axios.create({  //creacion un obejtos de axios
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ciudad}`,
        headers: {'x-rapidapi-key':'6c3c14f3a9msh9ee319087e40dcfp121393jsnb0a7c1574d0b'}
  });
const resp = await instance.get();

if(resp.data.Results.length ===0){
    throw new Error(`No existe como resultado para ${nombre}`)
}
const data = resp.data.Results[0];
const name = data.name;
const lat = data.lat;
const lon = data.lon;

return{
    name,
    lat,
    lon
}
}

module.exports={
    getCiudadLatLon
}
   
//   instance.get()
//     .then(resp=>{
//         console.log(resp.data.Results[0]);
    
//     }).catch(err=>{
//         console.log('ERROR',err)
//     });