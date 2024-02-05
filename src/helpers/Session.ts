import { Cookies } from 'quasar'
const storage = 'datauser' // you can change this
export interface TUser {
  iduser: number,
  nama: string,
  role: string,
  token: string | null,
  username: string
}

const getProfile = (sto : string = storage) : TUser => {
  return Cookies.get(sto)
}

const setProfile = (data: TUser, sto : string = storage) => {
  return Cookies.set(sto, JSON.stringify(data), { expires: 24 * 60 * 60 /* 24 jam */ })
}

const clearSession = (sto: string = storage) => {
  return Cookies.remove(sto)
}

export { getProfile, setProfile, clearSession }
