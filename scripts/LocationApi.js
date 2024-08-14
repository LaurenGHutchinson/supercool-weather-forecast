//link url: ''
//api_key: 'BvLK0RfGL4q1WDK2maFxGffw0b1L4zkH'

//location-key: /locations/v1/cities/autocomplete
//current-conditions: /currentconditions/v1/{locationKey}
//radar images: /imagery/v1/maps/radsat/{resolution}/{locationKey}
//https://express-proxy-3fa2dcca9dad.herokuapp.com/api?url=http://dataservice.accuweather.com
//google api-key: AIzaSyDU2-WQo0gxz_6dx0-IUwuC2t1hrkxQw_E

//http://dataservice.accuweather.com/locations/v1/328328?apikey=BvLK0RfGL4q1WDK2maFxGffw0b1L4zkH

class LocationApi {
    constructor(apiKey){
        this.apiKey = apiKey;
        this.baseUrl = 'http://dataservice.accuweather.com';
    }

    async getLocationKey(location){
        const response = await axios.get(`${this.baseUrl}/locations/v1/cities/autocomplete?apikey=${this.apiKey}&q=${location}`);
        //console.log(response.data);
        return response.data;
    }

    async getCurrentConditions(locationKey){
        const response = await axios.get(`${this.baseUrl}/currentconditions/v1/${locationKey}?apikey=${this.apiKey}`)
        console.log(response.data);
        return response.data;
    }

    async getCoordinateInfo(locationKey){
        const response = await axios.get(`${this.baseUrl}/locations/v1/${locationKey}?apikey=${this.apiKey}`)
        console.log(response.data);
        return response.data;

        //remove lad, long
    }
}

export default LocationApi;

//${this.baseUrl}/currentconditions/v1/${locationKey}?apikey=${this.apiKey}