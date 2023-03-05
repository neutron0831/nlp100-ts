import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'

const dark = useStorage('dark', true)

export default createVuetify({
  theme: {
    defaultTheme: dark.value ? 'dark' : 'light',
    themes: {
      dark: {
        colors: {
          primary: '#3178C6',
        },
      },
      light: {
        colors: {
          primary: '#3178C6',
        },
      },
    },
  },
})
