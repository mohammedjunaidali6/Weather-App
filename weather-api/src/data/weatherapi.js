import axios from 'axios'

const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?';
const apikey = '69648989b551b16f2efc1775393e5db3';

export const getWeatherData = async (cityname)=>{
    try{
        const {data} = await axios.get(baseUrl + `q=${cityname}&appid=${apikey}`);
        return data;
    }catch(error) {
        throw error;
    }
}