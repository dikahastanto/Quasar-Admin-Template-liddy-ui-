export interface TAkses {
  label: string,
  value: string,
  index: string,
  path: string
}

const admin: TAkses = {
  label: 'Admin', // label to show
  value: 'admin', // you can customize any value here ex. from db
  index: 'dashboardAdmin', // this property help you redirect after login
  path: 'admin' // path in url
}

const allAkses = [
  admin
]

export {
  allAkses,
  admin
}
