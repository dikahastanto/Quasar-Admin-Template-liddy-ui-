import { clearSession } from './Session'
import { Router } from 'src/router'

export default () => {
  clearSession()
  Router.push({ name: 'loginPage' })
}
