/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles

import 'vuetify/styles'
// import colors from 'vuetify/lib/util/colors'

// Composables
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'

// import { aliases, mdi } from 'vuetify/iconsets/mdi'
// import '@mdi/font/css/materialdesignicons.css'

export default createVuetify({
  // theme: {
  //   themes: {
  //     light: {
  //       colors: {
  //         primary: colors.red.darken1, // #E53935
  //         secondary: colors.red.lighten4, // #FFCDD2
  //       },
  //     },
  //   },
  // },
  icons: {
    iconfont: 'mdi',
  }
})

