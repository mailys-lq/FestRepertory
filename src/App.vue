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
              name: 'Déluge',
              genre: 'Black Metal',
              socialMedia:[{
                facebook: 'https://www.facebook.com/delugebandofficial',
                instagram: null,
                twitter: null,
              }],
              logo: 'assets/logo-group/2021/Déluge.jpg',
              op: 'https://www.youtube.com/watch?v=bvyUY9FeI3Q',
              merch: 'http://delugeband.fr/'
            },
            {
              name: 'Fractal Universe',
              genre: 'Progressive Technical Death Metal',
              socialMedia:[{
                facebook: 'https://www.facebook.com/fractaluniverseband',
                instagram: 'https://www.instagram.com/fractaluniverseband/',
                twitter: null,
              }],
              logo: 'assets/logo-group/2021/FractalUniverse.jpg',
              op: 'https://youtu.be/FyigoPdSsZQ',
              merch: null,
            },
            {
              name: 'Hypno5e',
              genre: 'Cinematographic Metal',
              socialMedia:[{
                facebook: 'https://www.facebook.com/hypno5e/',
                instagram: 'https://www.instagram.com/hypno5eofficial/',
                twitter: null,
              }],
              logo: 'assets/logo-group/2021/FractalUniverse.jpg',
              op: 'https://youtu.be/qaT4Xr1r9Y8?list=PLEoIegwFqDOrrsm-7O6Yc1x2DiopCW_u1',
              merch: 'https://www.hypno5e.com/',
            }
          ],
        },
        {
          year:'2020',
          editionNumber: '6',
          groupes:[
            {
              name: 'Heart Attack',
              genre: 'Groove Thrash Metal',
              socialMedia:[{
                facebook: 'https://www.facebook.com/heartattackmetal',
                instagram: 'https://www.instagram.com/heartattack__official/',
                twitter: null,
              }],
              logo: 'assets/logo-group/2020/HeartAttack.jpg',
              op: 'https://youtu.be/eNJBPNde5mw',
              merch: null
            },
            {
              name: 'In Other Climes',
              genre: 'Heavy Thrash Hardcore',
              socialMedia:[{
                facebook: 'https://www.facebook.com/inotherclimes',
                instagram: null,
                twitter: null,
              }],
              logo: 'assets/logo-group/2020/InOtherClimes.jpg',
              op: 'https://youtu.be/Dw72BPABR0A?list=PL5m3xiinvG5f1108hsYzB-6LubWTr7uBY',
              merch: 'https://inotherclimes.jimdofree.com/'
            },
            {
              name: 'Stinky',
              genre: 'Punk Hardcore',
              socialMedia:[{
                facebook: 'https://www.facebook.com/Stinkyhc/',
                instagram: null,
                twitter: null,
              }],
              logo: 'assets/logo-group/2020/Stinky.jpg',
              op: 'https://youtu.be/UlGH_GSCYgE',
              merch: 'https://stinkymerch.com/'
            }
          ],
        },
        {
          year:'2019',
          editionNumber: '5',
          groupes:[
            {
              name: 'Svart Crown',
              genre: 'Blackened Death Metal',
              socialMedia:[{
                facebook: 'https://www.facebook.com/SVARTCROWN',
                instagram: null,
                twitter: null,
              }],
              logo: 'assets/logo-group/2019/SvartCrown.jpg',
              op: 'https://youtu.be/cDhFk2WxOW0?list=PLQYIYNesOL7DDHoHnJbx32JCIs9AeubUX',
              merch: 'https://svartcrown.bandcamp.com/'
            },
            {
              name: 'Trepalium',
              genre: 'Groove Death Metal',
              socialMedia:[{
                facebook: 'https://www.facebook.com/TREPALIUMBAND/',
                instagram: null,
                twitter: null,
              }],
              logo: 'assets/logo-group/2019/Trepalium.jpg',
              op: 'https://youtu.be/9QeIgsBQTHQ?list=PL0fbgsX_h6VMqUESKvMLebUtqFtVUCV_s',
              merch: null
            },
            {
              name: 'Bukowski',
              genre: 'Power Rock',
              socialMedia:[{
                facebook: 'https://www.facebook.com/Bukowskitheband',
                instagram: null,
                twitter: null,
              }],
              logo: 'assets/logo-group/2019/Bukowski.jpg',
              op: 'https://youtu.be/vv6hhyPGW5M?list=PLcAg_FFF547gJCHPYIDjqRPIvmpZqmw-I',
              merch: 'https://bukowskitheband.bandcamp.com/album/strangers'
            }
          ],
        },
        {
          year:'2018',
          editionNumber: '4',
          groupes:[
            {
              name: 'Arcania',
              genre: 'Trash Metal',
              socialMedia:[{
                facebook: 'https://www.facebook.com/arcaniametal/',
                instagram: 'https://www.instagram.com/arcania_official',
                twitter: null,
              }],
              logo: 'assets/logo-group/2018/Arcania.jpg',
              op: 'https://youtu.be/gtCC-v91Yc0',
              merch: 'http://arcania-metal.net/'
            },
            {
              name: 'Atlantis Chronicles',
              genre: 'Modern Death Metal',
              socialMedia:[{
                facebook: 'https://www.facebook.com/atlantischronicles',
                instagram: 'https://www.instagram.com/atlantischronicles/',
                twitter: null,
              }],
              logo: 'assets/logo-group/2018/AtlantisChronicles.jpg',
              op: 'https://youtu.be/KaWcWOh_vTk',
              merch: 'https://atlantischronicles.bigcartel.com/'
            },
            {
              name: 'Pictured',
              genre: 'Death Melodic',
              socialMedia:[{
                facebook: 'https://www.facebook.com/Picturedmusic/',
                instagram: null,
                twitter: null,
              }],
              logo: 'assets/logo-group/2018/Pictured.png',
              op: 'https://youtu.be/XD1CKx3F1pc',
              merch: 'https://pictured-metal.bandcamp.com/'
            }
          ],
        },
        {
          year:'2017',
          editionNumber: '3',
          groupes:[
            {
              name: 'Hopes Of Freedom',
              genre: 'Power Folk Metal',
              socialMedia:[{
                facebook: 'https://www.facebook.com/hopesoffreedom',
                instagram: 'https://www.instagram.com/hopesoffreedom',
                twitter: null,
              }],
              logo: 'assets/logo-group/2017/HopeOfFreedom.jpg',
              op: 'https://youtu.be/s3M5ZXUB9Ko',
              merch: null
            },
            {
              name: 'Karma Zero',
              genre: 'Hardcore',
              socialMedia:[{
                facebook: 'https://www.facebook.com/KarmaZero',
                instagram: null,
                twitter: null,
              }],
              logo: 'assets/logo-group/2017/KarmaZero.jpg',
              op: 'https://youtu.be/W7O2p-tdINU?list=PL2US2lCHhkKDrqawf7_FPpa6OMqRxFYpz',
              merch: 'https://karmazero.bandcamp.com/'
            },
            {
              name: 'Nemost',
              genre: 'Melodic/Progressive Death Metal',
              socialMedia:[{
                facebook: 'https://www.facebook.com/nemostofficial',
                instagram: 'https://www.instagram.com/nemostofficial/',
                twitter: null,
              }],
              logo: 'assets/logo-group/2017/Nemost.jpg',
              op: 'https://youtu.be/TPHV4asIL9c',
              merch: 'https://www.nemost.com/'
            },
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
              logo: 'assets/logo-group/2016/Drakwald.jpg',
              op: 'https://www.youtube.com/watch?v=4of8lye5zQI',
              merch: 'http://drakwald.fr/'
            },
            // {
            //   name: 'Enlightened',
            //   genre: 'Melodic Stoner Progressif',
            //   socialMedia:[{
            //     facebook: 'https://www.facebook.com/Drakwald/',
            //     instagram: null,
            //     twitter: null,
            //   }],
            //   logo: 'assets/logo-group/2016/Enlightened.jpg',
            //   op: 'https://www.youtube.com/watch?v=FWgBaKCGohs',
            //   merch: 'https://enlightened.bandcamp.com/'
            // },
            // {
            //   name: 'Abenakis',
            //   genre: 'Alternative Rock',
            //   socialMedia:[{
            //     facebook: 'https://www.facebook.com/Abenakisnantes/',
            //     instagram: null,
            //     twitter: null,
            //   }],
            //   logo: 'assets/logo-group/2016/Abenakis.jpg',
            //   op: 'https://www.youtube.com/watch?v=DfIk9dXiHUQ&list=PLXW5xZn9g4UM4TC1SkMVLdtNklGySaTgx',
            //   merch: null,
            // },
            {
              name: 'Mormieben',
              genre: 'Pirate Metal',
              socialMedia:[{
                facebook: 'https://www.facebook.com/Mormieben/',
                instagram: 'https://www.instagram.com/Mormieben/',
                twitter: null,
              }],
              logo: 'assets/logo-group/2016/Mormieben.jpg',
              op: 'https://youtu.be/W_1M6x6Czig?list=PLAUmajBX6UO83hoZ346JZhg4F6uFIBwDo',
              merch: 'https://mormieben.bandcamp.com/',
            },
            {
              name: 'Affect',
              genre: 'Hardcore',
              socialMedia:[{
                facebook: 'https://www.facebook.com/affect.officiel/',
                instagram: 'https://www.instagram.com/affect_officiel/?hl=fr',
                twitter: null,
              }],
              logo: 'assets/logo-group/2016/Affect.jpg',
              op: 'https://www.youtube.com/watch?v=WYOFje29ZLU',
              merch: null,
            },
            // {
            //   name: 'Anamorth',
            //   genre: 'Doom, Sludge, Black, Death Metal',
            //   socialMedia:[{
            //     facebook: 'https://www.facebook.com/anamorhofficial/',
            //     instagram: null,
            //     twitter: null,
            //   }],
            //   logo: 'assets/logo-group/2016/Anamorh',
            //   op: 'https://www.youtube.com/watch?v=Uqmyi_NlAH8',
            //   merch: null,
            // },
            // {
            //   name: 'Black Lake',
            //   genre: 'Heavy Rock',
            //   socialMedia:[{
            //     facebook: 'https://www.facebook.com/blacklakeband',
            //     instagram: null,
            //     twitter: null,
            //   }],
            //   logo: 'assets/logo-group/2016/BlackLake.jpg',
            //   op: 'https://www.youtube.com/watch?v=9NC_jYPMlrk',
            //   merch: null,
            // },
            // {
            //   name: 'Drenaï',
            //   genre: 'Folk Metal',
            //   socialMedia:[{
            //     facebook: 'https://www.facebook.com/drenaimetal',
            //     instagram: null,
            //     twitter: 'https://twitter.com/drenaimetal',
            //   }],
            //   logo: 'assets/logo-group/2016/Drenai.jpg',
            //   op: 'https://www.youtube.com/watch?v=gdjbO0HANrU',
            //   merch: 'https://drenai.bandcamp.com/',
            // },
            // {
            //   name: 'Ellipse',
            //   genre: 'Modern Metal',
            //   socialMedia:[{
            //     facebook: 'https://www.facebook.com/ellipsebandMetal/',
            //     instagram: null,
            //     twitter: null,
            //   }],
            //   logo: 'assets/logo-group/2016/Ellipse.jpg',
            //   op: 'https://www.youtube.com/watch?v=uislCMPMdxw',
            //   merch: 'https://ellips3.bandcamp.com/',
            // },
            // {
            //   name: 'Gargantua',
            //   genre: '',
            //   socialMedia:[{
            //     facebook: 'https://www.facebook.com/gargantua.officiel',
            //     instagram: 'https://www.instagram.com/gargantua_official/',
            //     twitter: null,
            //   }],
            //   logo: 'assets/logo-group/2016/Gargantua.jpg',
            //   op: 'https://www.youtube.com/watch?v=uLWWz2Py7wM',
            //   merch: 'https://gargantua-music.com/',
            // },
            // {
            //   name: 'Gohrgone',
            //   genre: 'Modern Death Metal',
            //   socialMedia:[{
            //     facebook: 'https://www.facebook.com/Gohrgoneband',
            //     instagram: null,
            //     twitter: null,
            //   }],
            //   logo: 'assets/logo-group/2016/Gohrgone.jpg',
            //   op: 'https://youtu.be/u5jne4O9nkg?list=PL7JGw4TEdOAmgamOq-s3d-IOHZFJKYM-p',
            //   merch: 'https://gohrgone.bandcamp.com/',
            // },
            // // {
            // //   name: 'Mormieben',
            // //   genre: 'Pirate Metal',
            // //   socialMedia:[{
            // //     facebook: 'https://www.facebook.com/Mormieben/',
            // //     instagram: 'https://www.instagram.com/Mormieben/',
            // //     twitter: null,
            // //   }],
            // //   logo: 'assets/logo-group/2016/Mormieben.jpg',
            // //   op: 'https://youtu.be/W_1M6x6Czig?list=PLAUmajBX6UO83hoZ346JZhg4F6uFIBwDo',
            // //   merch: 'https://mormieben.bandcamp.com/',
            // // },
            // {
            //   name: 'Muezli',
            //   genre: 'Stoner, Grunge, Rock, Metal',
            //   socialMedia:[{
            //     facebook: 'https://www.facebook.com/Muezlistoner/',
            //     instagram: null,
            //     twitter: null,
            //   }],
            //   logo: 'assets/logo-group/2016/Muezli.jpg',
            //   op: 'https://youtu.be/Y90SeGIi1A0',
            //   merch: 'https://muezli.bandcamp.com/',
            // },
            // {
            //   name: 'Rust Theory',
            //   genre: 'Rock, Stoner, Fusion',
            //   socialMedia:[{
            //     facebook: 'https://www.facebook.com/rusttheory',
            //     instagram: null,
            //     twitter: null,
            //   }],
            //   logo: 'assets/logo-group/2016/RustTheory.jpg',
            //   op: 'https://youtu.be/GtVybSw0Uuo?list=PLgYlUNnWHYIAqfgehd7cFbzFuvuvJpDgb',
            //   merch: 'https://rusttheory.com/',
            // },
            // {
            //   name: 'Toter Fisch',
            //   genre: 'Pirate Metal',
            //   socialMedia:[{
            //     facebook: 'https://www.facebook.com/toterfischband/',
            //     instagram: null,
            //     twitter: null,
            //   }],
            //   logo: 'assets/logo-group/2016/ToterFisch.jpg',
            //   op: 'https://youtu.be/QKsiOwrqUbU?list=PLokkhYmqzLJDY6BEnDsIYFFAqSALVwEAS',
            //   merch: null,
            // },
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