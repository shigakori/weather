<template>
    <div class="current">
        <div class="current__info">
            <p class="current__degree">{{ Math.round(getFullWeather.current.temp) }}°</p>
            <p class="current__day">Today</p>
            <p class="current__time">Time: {{ getHours }}:{{ getMinutes }}</p>
            <p class="current__city">City: {{ getFullWeather.name }}</p>
            
            <img src="@/assets/img/sun.svg" v-if="icon == 1" alt="" class="current__img">
            <img src="@/assets/img/cloudy.svg" v-else-if="icon == 2" alt="" class="current__img">
            <img src="@/assets/img/small-rain.svg" v-else-if="icon == 3" alt="" class="current__img">
            <img src="@/assets/img/mainly-cloudy.svg" v-else-if="icon == 4" alt="" class="current__img">
            <img src="@/assets/img/rain.svg" v-else-if="icon == 9" alt="" class="current__img">
            <img src="@/assets/img/small-rain-sun.svg" v-else-if="icon == 10" alt="" class="current__img">
            <img src="@/assets/img/storm.svg" v-else-if="icon == 11" alt="" class="current__img">
            <img src="@/assets/img/snow.svg" v-else-if="icon == 13" alt="" class="current__img">
            <img src="@/assets/img/mist.svg" v-else-if="icon == 50" alt="" class="current__img">
        </div>
        
        <div class="current__content">
            <div class="current__card">
                <div class="current__icon">
                    <img src="../../assets/img/temp.svg">
                </div>
                <p class="current__name">Temperature</p>
                <p class="current__temp">{{ Math.round(getFullWeather.current.temp) }}° - feels like {{ Math.round(getFullWeather.current.feels_like) }}°</p>
            </div>
            <div class="current__card">
                <div class="current__icon">
                    <img src="../../assets/img/pressure.svg">
                </div>
                <p class="current__name">Pressure</p>
                <p class="current__temp">{{ getFullWeather.current.pressure }} mmHg</p>
            </div>
            <div class="current__card">
                <div class="current__icon">
                    <img src="../../assets/img/precipitation.svg">
                </div>
                <p class="current__name">Humidity</p>
                <p class="current__temp">{{ getFullWeather.current.humidity }}%</p>
            </div>
            <div class="current__card">
                <div class="current__icon">
                    <img src="../../assets/img/wind.svg">
                </div>
                <p class="current__name">Wind</p>
                <p class="current__temp">{{ Math.round(getFullWeather.current.wind_speed) }} m/s {{ windDeg }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import unix from '../../timestamp.js';

    export default {
        computed: {
            ...mapGetters(['getFullWeather']),
            icon(){
                let icon = this.getFullWeather.current.weather[0].icon
                return parseInt(icon);
            },
            windDeg(){
                let deg = this.getFullWeather.current.wind_deg;
                if (deg >= 0 && deg < 45 || deg > 315 && deg <= 360){
                    deg = 'northern'
                } else if(deg >= 45 && deg < 135){
                    deg = 'eastern'
                } else if(deg >= 135 && deg < 225){
                    deg = 'southern'
                } else {
                    deg = 'western'
                }
            },
            getHours(){
                return unix( this.getFullWeather.current.dt, 'hour' )
            },
            getMinutes(){
                return unix( this.getFullWeather.current.dt, 'minutes' )
            }
        },
        
    }
</script>

<style lang="scss" >

</style>