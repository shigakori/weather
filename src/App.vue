<template>
  <div>
   <Header/>
   <Notes :notes="notes"/>
   <Modal/>
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import Notes from './components/Notes.vue';
  import Modal from './components/Modal.vue';
  export default {
    components: {
      Header,
      Notes,
      Modal
    },
    data(){
      return {
        notes: [
          {
            id: 1,
            title: 'Vue',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
            date: '15.03.2000'
          },
          {
            id: 2,
            title: 'React',
            desc: 'Lorem ipsum dolor sit amet',
            date: '07.03.2022'
          },
          {
            id: 3,
            title: 'Angular',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
            date: '07.03.2022'
          },
        ]
      }
    } 
  }
</script>

<style>

</style>