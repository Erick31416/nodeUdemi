const axios = require('axios');

const getLugarLatYlong = async (direcionConsulta) => {

    const encodeUrl = encodeURI(direcionConsulta);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        timeout: 1000,
        headers: { 'X-RapidAPI-Key': 'a4e41cb2e0mshfcf30249a9abf2fp1f56b3jsn5ba50dcb3ba0' }
    });

    result = await instance.get();
    

    if (result.data.Results.length === 0){
        throw new Error(`No hay resultados para ${direcionConsulta}`)
    }
    
    const data = result.data.Results[0];
    const direcionRespuesta = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direcionRespuesta,
        lat,
        lng
    }
};

module.exports = {
    getLugarLatYlong
}