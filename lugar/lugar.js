const axios = require('axios');

const getLugarLatLng = async (direccion) => {

    let encodedUrl = encodeURI(direccion);

    let resp = await axios.get(`http://open.mapquestapi.com/geocoding/v1/address?key=XMsC1uGNeN5Yf9hj2qnHPIajrsuAHoQ0&location=${encodedUrl}`);

            let location = resp.data.results[0].locations[0];
            let coors = location.latLng;
            let formatedAddress = location.adminArea3+", "+
                location.adminArea5+", "+ location.adminArea1;

    return {
        direccion: formatedAddress,
        lat: coors.lat,
        lng: coors.lng
    }
};

module.exports = {
    getLugarLatLng
}

