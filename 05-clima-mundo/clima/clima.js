const axios = require ('axios');


const getClima = async (lat, lng) => {
    const resp = await axios.get (`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=2bcc71f8aa38c2f9a149261ac89d4be6&units=metric`)

    //console.log(resp.data.cod);
    if (resp.data.cod != '200'){
        throw new Error (`La peticion produjo un error`, resp.data.cod);
    }

    return resp.data.main.temp;
}
module.exports = {
    getClima
}