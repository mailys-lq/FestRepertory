<template>
  <li>  
    <a @click="viewEdition(edition.year)" ><img :src='getImgUrl(edition.year)' alt=""></a>
  </li>
  <div v-if='showList === false'>
    <fest-edition :edition="edition"></fest-edition>
  </div>
</template>

<script>
import FestEdition from './FestEdition.vue'

export default {
  name: 'FestEditions',
  props: {
    edition:Object,
  },
  data(){
    return{
      showList: true,
      showEdition: [{boolean : false, edition: ''}],
    }
  },
  components: {
    FestEdition
  },
  methods: {
    getImgUrl(id){
      var images = require.context('../assets/', false, /\.jpg$/)
      return images('./' + id + ".jpg")
    },

    viewEdition(edition) {
      console.log(this.showList)

      if(this.showList === true){
        console.log('c false')
        this.showList = false;
        this.showEdition.boolean = true;
        this.showEdition.edition = edition;
        console.log(this.showEdition);


      } else if(this.showList === false){
        console.log('c true')
        this.showList = true;
      }

    }


  }
}
</script>

<style>
  img{
    width: 10%; 
    height: 100%; 
  }
</style>
