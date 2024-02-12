import { Notify } from 'quasar'
type TJenis = 'positive' | 'negative' | 'warning' | 'primary'
type TAttr = {
  positive: {
    icon: string,
    title: string
  },
  negative: {
    icon: string,
    title: string
  },
  warning: {
    icon: string,
    title: string
  },
  primary: {
    icon: string,
    title: string
  }
}

const listAttr : TAttr = {
  positive: {
    icon: 'done',
    title: 'Berhasil'
  },
  negative: {
    icon: 'error',
    title: 'Error'
  },
  warning: {
    icon: 'warning',
    title: 'Warning'
  },
  primary: {
    icon: 'info',
    title: 'Informasi'
  }
}

const notify = (message = 'Unknown Message', notifyType:TJenis = 'positive') => {
  const getAttr = listAttr[notifyType]

  return Notify.create({
    message: getAttr.title,
    color: notifyType,
    caption: message,
    timeout: 2000,
    icon: getAttr.icon,
    classes: 'q-pl-lg q-pr-lg q-pt-sm q-pb-sm text-bold',
    position: 'top-right',
    multiLine: true
  })
}

const errNotif = (msg: string) => {
  return notify(msg, 'negative')
}

export { notify, errNotif }
