import App from '@/App.vue'

import { createApp } from 'vue'

import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)

const store = useStore()

await store.setChapters()

app.mount('#app')
