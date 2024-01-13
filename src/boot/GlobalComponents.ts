import { boot } from 'quasar/wrappers'
import HeaderPage from 'src/components/page/HeaderPage.vue'

declare module '@vue/runtime-core' {
  interface GlobalComponents {
    HeaderPage: typeof HeaderPage

  }
}

export default boot(async ({ app }) => {
  // something to do
  app.component('HeaderPage', HeaderPage)
})
