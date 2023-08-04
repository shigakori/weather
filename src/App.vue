<template>
  <div>
   <Header 
   @getSearch="search = $event"
   :lang="lang"
   @changeLang="changeLang"
   />
   <Notes 
   :notes="filterNotes" 
   @delNote="delNote"
   @changeNote="changeNote"
   :lang="lang"
   />
   <Modal v-show="modalOpen" 
   @closeModal="closeModal"
   :currentId="currentId"
   @addNote="addNote"
   :edit="edit"
   :editNote="editNote"
   @editedNote="editedNote"
   :lang="lang"
   />
   <AddBtn @openModal="openModal"/>
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import Notes from './components/Notes.vue';
  import Modal from './components/Modal.vue';
  import AddBtn from './components/Add-Btn.vue';
  import langs from './lang';
  console.log(langs);
  
  export default {
    components: {
      Header,
      Notes,
      Modal,
      AddBtn
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
        ],
        modalOpen: false,
        currentId: 1,
        edit: false,
        editNote: {},
        search: '',
        lang: 'ru',
        // langwords: {}
      }
    },
    methods: {
      openModal(){
        this.modalOpen = true
      },
      closeModal(){
        this.modalOpen = false;
        setTimeout(() => {
          this.edit = false;          
        }, 500);
      },
      addNote(item){
        this.notes.push(item)
      },
      delNote(id){
        let index = this.notes.findIndex((elem)=> elem.id == id);
        this.notes.splice(index, 1)
      },
      getNotes(){
        let localNotes = localStorage.getItem('notes');
        if (localNotes) {
          this.notes = JSON.parse(localNotes);
          let last = this.notes.length - 1;
          this.currentId = last >= 0 ? this.notes[last].id + 1 : 1
        }
      },
      changeNote(id){
        let value = this.notes.find((elem) => elem.id == id);
        this.edit = this.modalOpen = true;
        this.editNote = value;
      },
      editedNote(item){
        this.notes.forEach((note)=>{
          if (note.id == item.id) {
            note.title = item.title;
            note.desc = item.desc;
            note.date = item.date;
          }
        })
      },
      changeLang(val){
        this.lang = val;
        localStorage.setItem('lang', val)
      }
    },
    watch: {
      notes: {
        handler() {
          localStorage.setItem('notes', JSON.stringify(this.notes))
        },
        deep: true
      }
    },
    created(){
      this.getNotes()
      this.langwords = langs;
      this.lang = localStorage.getItem('lang') || 'ru'
    },
    computed: {
      filterNotes(){
        const items = this.notes.filter((val)=>{
          let result = val.title.toLowerCase().includes(this.search.toLowerCase())
          return result;
        })
        return items;
      }
    },
    provide: {
      words: langs
    }
  }
</script>

<style>

</style>