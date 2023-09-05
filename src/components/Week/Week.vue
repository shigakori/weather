<template>
    <div class="week">
        <div class="week__nav">
            <button @click="showWeather" class="week__btn" :class="{ active: show == true }">For a week</button>
            <button @click="show = false" class="week__btn" :class="{ active: show == false }">Cancel</button>
        </div>
        <div v-show="show" class="week__content">
            <Day v-for="item in sevenDays()" :key="index" :day="item" :today="index"/>
        </div>
        
    </div>
    
</template>

<script>
import Day from '../Day/Day.vue'
import { mapActions, mapGetters, mapState } from 'vuex';

    export default{
        components: {
            Day,
        },
        data(){
          return {
            show: true,
          }  
        },
        computed: {
            ...mapGetters(['getDailyWeather', 'getFullWeather']),
            ...mapState(['city'])
        },
        methods: {
            ...mapActions(['setWeather']),
            sevenDays(){
                this.getDailyWeather.pop();
                return this.getDailyWeather;
            },
            showWeather(){
                this.setWeather(this.city);
                this.show = true;
            }
        }
        
    }

</script>

<style lang="scss">

</style>

