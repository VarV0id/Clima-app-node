const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=70160959e3f6917d74760ea5210eef8a`);
    return resp.data.main.temp;
};
module.exports = {
    getClima
}