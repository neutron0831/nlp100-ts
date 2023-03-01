import { loadFonts } from '@/plugins/webfontloader'
import vuetify from '@/plugins/vuetify'
import pinia from '@/store'
import router from '@/router'

import type { App } from 'vue'

export function registerPlugins(app: App) {
  loadFonts()
  app.use(vuetify).use(router).use(pinia)
}
