<template>
    <nav class="nav container">
        <a class="logo" href="">
            <img class="logo__img" src="@/assets/img/logo.png" alt="">
            weather
        </a>
        
        <div class="search">
            <img class="search__icon" src="@/assets/img/city.svg" alt="">
            <input @keydown.enter="setWeather" v-model="query" class="search__input" type="text" placeholder="Выбрать город">
        </div>
    </nav>

</template>

<script>
    export default {
        data(){
            return {
                query: '',
            }
        },
        methods: {
            setWeather(){
                this.$store.dispatch('setWeather', this.query)
            }
        }
    }
        
</script>

<style lang="scss">

</style>