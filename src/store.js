import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
    state: { 
        apiKey: '00f1d7cbac08a3b1f5c7dce507a5654b',
        fullWeather: null,
        city: 'New York'
     },
    mutations: { 
        setWeather(state, weather){
            state.fullWeather = weather;
        },
        setCity(state, payload){
            state.city = payload
        },
        
     },
    actions: { 
        async setWeather({commit, state}, city){
            try {
                let response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${state.apiKey}`);
                let cityInfo = response.data[0]
                let { lat, lon, local_names } = cityInfo;
                let result = await axios.get(`https://api.openweathermap.org/data/2.8/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${state.apiKey}&units=metric&lang=ru`)
                let weather = result.data;
                let weatherObj = { ...weather, name: local_names.en }; 
                commit('setWeather', weatherObj)
                commit('setCity', city)
                console.log(weatherObj);
            } catch(error){
                
            }
        }
     },
    getters: { 
        getFullWeather: (state) => { return state.fullWeather },
        getDailyWeather: (state) => state.fullWeather.daily
     },
})

export default store;
