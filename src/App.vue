<template>
  <div v-if="getFullWeather">
    <Header/>
    <Main/>
    
  </div>
  
  <div class="loading" v-else>
    <img src="./assets/img/loading.gif" alt="">
  </div>
  
  
</template>

<script>
import Header from '@/components/Header/Header.vue';
import Main from '@/components/Main/Main.vue';
import { mapActions, mapGetters } from 'vuex';

  export default {
    components: {
            Header,
            Main,
    },
    methods: {
      ...mapActions(['setWeather'])
    },
    computed: {
      ...mapGetters(['getFullWeather'])
    },
    created(){
      setTimeout( () => {
        this.setWeather('New York')
        
      }, 1000)
    }
  }
</script>

<style lang="scss">

</style>
