import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'
import { getProfile } from 'src/helpers/Session'
import { TAkses, allAkses } from 'src/helpers/ListAkses'

export default (to: RouteLocationNormalized, _from: RouteLocationNormalized, next: NavigationGuardNext) => {
  const dataUser = getProfile()
  const noSession = dataUser === null
  const loginPage = { name: 'loginPage' }

  const role = noSession ? null : dataUser.role

  if (to.matched.some(record => record.meta.requiredAuth)) {
    if (noSession) {
      next(loginPage)
    } else {
      const adaRoutes = allAkses.find((r: TAkses) => {
        return r.value === to.meta.allowedRole && to.meta.allowedRole === role
      })
      if (adaRoutes) {
        next()
      } else {
        next(loginPage)
      }
    }
  } else {
    const adaRoutes = allAkses.find((r: TAkses) => r.value === role)
    if (adaRoutes) {
      next({
        name: adaRoutes.index
      })
    } else {
      next()
    }
  }
}
