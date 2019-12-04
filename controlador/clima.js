const axios = require('axios');

const getClima = async(lat,lon)=>{
    const rep= await axios.get()
    return Response.data.main.temp;
}
module.exports={
    getClima
}