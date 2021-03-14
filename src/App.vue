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
              genre: 'Melodic Death Folk Metal',
            },
            {
              name: 'Enlightened',
              genre: 'Melodic Stoner Progressif',
            },
            {
              name: 'Abenakis',
              genre: 'Alternative Rock',
            }
          ],
        },
        {
          year:'2020',
          editionNumber: '6',
          groupes:[
            {
              name: 'Drakwald',
              genre: 'Melodic Death Folk Metal',
            },
            {
              name: 'Enlightened',
              genre: 'Melodic Stoner Progressif',
            },
            {
              name: 'Abenakis',
              genre: 'Alternative Rock',
            }
          ],
        },
        {
          year:'2019',
          editionNumber: '5',
          groupes:[
            {
              name: 'Drakwald',
              genre: 'Melodic Death Folk Metal',
            },
            {
              name: 'Enlightened',
              genre: 'Melodic Stoner Progressif',
            },
            {
              name: 'Abenakis',
              genre: 'Alternative Rock',
            }
          ],
        },
        {
          year:'2018',
          editionNumber: '4',
          groupes:[
            {
              name: 'Drakwald',
              genre: 'Melodic Death Folk Metal',
            },
            {
              name: 'Enlightened',
              genre: 'Melodic Stoner Progressif',
            },
            {
              name: 'Abenakis',
              genre: 'Alternative Rock',
            }
          ],
        },
        {
          year:'2017',
          editionNumber: '3',
          groupes:[
            {
              name: 'Drakwald',
              genre: 'Melodic Death Folk Metal',
            },
            {
              name: 'Enlightened',
              genre: 'Melodic Stoner Progressif',
            },
            {
              name: 'Abenakis',
              genre: 'Alternative Rock',
            }
          ],
        },
        {
          year:'2016',
          editionNumber: '2',
          groupes:[
            {
              name: 'Drakwald',
              genre: 'Melodic Death Folk Metal',
              socialMedia:[{
                facebook: 'https://www.facebook.com/enlightenedband',
                instagram: 'https://www.instagram.com/drakwald/',
                twitter: 'https://twitter.com/Drakwald',
              }],
              logo: 'assets/logo-group/Drakwald.jpg',
              op: 'https://www.youtube.com/watch?v=4of8lye5zQI',
              merch: 'http://drakwald.fr/'
            },
            {
              name: 'Enlightened',
              genre: 'Melodic Stoner Progressif',
              socialMedia:[{
                facebook: 'https://www.facebook.com/Drakwald/',
                instagram: null,
                twitter: null,
              }],
              logo: 'assets/logo-group/Enlightened.jpg',
              op: 'https://www.youtube.com/watch?v=FWgBaKCGohs',
              merch: 'https://enlightened.bandcamp.com/'
            },
            {
              name: 'Abenakis',
              genre: 'Alternative Rock',
              socialMedia:[{
                facebook: 'https://www.facebook.com/Abenakisnantes/',
                instagram: null,
                twitter: null,
              }],
              logo: 'assets/logo-group/Abenakis.jpg',
              op: 'https://www.youtube.com/watch?v=DfIk9dXiHUQ&list=PLXW5xZn9g4UM4TC1SkMVLdtNklGySaTgx',
              merch: null,
            },
            {
              name: 'Affect',
              genre: 'Hardcore',
              socialMedia:[{
                facebook: 'https://www.facebook.com/affect.officiel/',
                instagram: 'https://www.instagram.com/affect_officiel/?hl=fr',
                twitter: null,
              }],
              logo: 'assets/logo-group/',
              op: null,
              merch: null,
            },
            {
              name: 'Anamorth',
              genre: 'Doom, Sludge, Black, Death Metal',
              socialMedia:[{
                facebook: null,
                instagram: null,
                twitter: null,
              }],
              logo: 'assets/logo-group/',
              op: null,
              merch: null,
            },
            {
              name: 'Black Lake',
              genre: 'Heavy Rock',
              socialMedia:[{
                facebook: null,
                instagram: null,
                twitter: null,
              }],
              logo: 'assets/logo-group/',
              op: null,
              merch: null,
            },
            {
              name: 'Drenai',
              genre: 'Folk Metal',
              socialMedia:[{
                facebook: null,
                instagram: null,
                twitter: null,
              }],
              logo: 'assets/logo-group/',
              op: null,
              merch: null,
            },
            {
              name: 'Ellipse',
              genre: 'Modern Metal',
              socialMedia:[{
                facebook: null,
                instagram: null,
                twitter: null,
              }],
              logo: 'assets/logo-group/',
              op: null,
              merch: null,
            },
            {
              name: 'Gargantua',
              genre: '',
              socialMedia:[{
                facebook: null,
                instagram: null,
                twitter: null,
              }],
              logo: 'assets/logo-group/',
              op: null,
              merch: null,
            },
            {
              name: 'Gohrgone',
              genre: 'Modern Death Metal',
              socialMedia:[{
                facebook: null,
                instagram: null,
                twitter: null,
              }],
              logo: 'assets/logo-group/',
              op: null,
              merch: null,
            },
            {
              name: 'Lappalainen',
              genre: 'Folk Metal',
              socialMedia:[{
                facebook: null,
                instagram: null,
                twitter: null,
              }],
              logo: 'assets/logo-group/',
              op: null,
              merch: null,
            },
            {
              name: 'Mormieben',
              genre: 'Pirate Metal',
              socialMedia:[{
                facebook: null,
                instagram: null,
                twitter: null,
              }],
              logo: 'assets/logo-group/',
              op: null,
              merch: null,
            },
            {
              name: 'Muezli',
              genre: 'Stoner, Grunge, Rock, Metal',
              socialMedia:[{
                facebook: null,
                instagram: null,
                twitter: null,
              }],
              logo: 'assets/logo-group/',
              op: null,
              merch: null,
            },
            {
              name: 'Rust Theory',
              genre: 'Rock, Stoner, Fusion',
              socialMedia:[{
                facebook: null,
                instagram: null,
                twitter: null,
              }],
              logo: 'assets/logo-group/',
              op: null,
              merch: null,
            },
            {
              name: 'Toter Fish',
              genre: 'Pirate Metal',
              socialMedia:[{
                facebook: null,
                instagram: null,
                twitter: null,
              }],
              logo: 'assets/logo-group/',
              op: null,
              merch: null,
            },
            {
              name: 'Uncensored',
              genre: 'Thrash-Metal, Hardcore',
              socialMedia:[{
                facebook: null,
                instagram: null,
                twitter: null,
              }],
              logo: 'assets/logo-group/',
              op: null,
              merch: null,
            },
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