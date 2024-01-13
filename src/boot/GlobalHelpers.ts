import { ValidationRule, QSelectProps } from 'quasar'
import { boot } from 'quasar/wrappers'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $requiredField: ValidationRule[];
    $requiredSelect: QSelectProps['rules'];
  }
}

export default boot(async ({ app }) => {
  app.config.globalProperties.$requiredField = [
    (val: string | number) => (val !== null && val !== '') || 'This Fiels Is Required'
  ]
  app.config.globalProperties.$requiredSelect = [
    (val: string | number) => (val !== null) || 'This Fiels Is Required'
  ]
})
