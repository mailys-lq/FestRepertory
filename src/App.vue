<template>
  <div id="app">
    <ul>
      <fest-editions v-for="(edition, index) in editions" :key="index" :edition="edition" />
    </ul>
    
  </div>
</template>

<script>
import FestEditions from './components/FestEditions.vue'

export default {
  name: 'App',
  components: {
    FestEditions
  },
  data() {
    return{
      editions:[
        {
          year:'2021',
          editionNumber: '7',
          groupes:[
            {
              name: 'Drakwald',
              genre: 'Melodic Death Folk Metal'
            },
            {
              name: 'Enlightened',
              genre: 'Melodic Stoner Progressif'
            },
            {
              name: 'Abenakis',
              genre: 'Alternative Rock'
            }
          ],
        },
        {
          year:'2020',
          editionNumber: '6',
          groupes:[
            {
              name: 'Drakwald',
              genre: 'Melodic Death Folk Metal'
            },
            {
              name: 'Enlightened',
              genre: 'Melodic Stoner Progressif'
            },
            {
              name: 'Abenakis',
              genre: 'Alternative Rock'
            }
          ],
        },
        {
          year:'2019',
          editionNumber: '5',
          groupes:[
            {
              name: 'Drakwald',
              genre: 'Melodic Death Folk Metal'
            },
            {
              name: 'Enlightened',
              genre: 'Melodic Stoner Progressif'
            },
            {
              name: 'Abenakis',
              genre: 'Alternative Rock'
            }
          ],
        },
        {
          year:'2018',
          editionNumber: '4',
          groupes:[
            {
              name: 'Drakwald',
              genre: 'Melodic Death Folk Metal'
            },
            {
              name: 'Enlightened',
              genre: 'Melodic Stoner Progressif'
            },
            {
              name: 'Abenakis',
              genre: 'Alternative Rock'
            }
          ],
        },
        {
          year:'2017',
          editionNumber: '3',
          groupes:[
            {
              name: 'Drakwald',
              genre: 'Melodic Death Folk Metal'
            },
            {
              name: 'Enlightened',
              genre: 'Melodic Stoner Progressif'
            },
            {
              name: 'Abenakis',
              genre: 'Alternative Rock'
            }
          ],
        },
        {
          year:'2016',
          editionNumber: '2',
          groupes:[
            {
              name: 'Drakwald',
              genre: 'Melodic Death Folk Metal'
            },
            {
              name: 'Enlightened',
              genre: 'Melodic Stoner Progressif'
            },
            {
              name: 'Abenakis',
              genre: 'Alternative Rock'
            }
          ],
        },
      ],
    }
  }
}
</script>

<style>
  /* @import './app.css'; */
</style>