<template>
  <q-page padding>
    <div class="row q-gutter-sm q-mb-sm">
      <q-btn @click="notify('Parimary Notify', 'primary')" label="Success Notif" color="primary" unelevated no-caps/>
      <q-btn @click="notify('Transaction Succesfull', 'positive')" label="Success Notif" color="positive" unelevated no-caps/>
      <q-btn @click="notify('Please Update Your Profile', 'warning')" label="Warning Notif" color="warning" unelevated no-caps/>
      <q-btn @click="errNotif('Failed To Load')" label="Error Notif" color="negative" unelevated no-caps/>
    </div>
    <div>You can customize default configuration notify in src/helper/Notify.ts</div>
  </q-page>
</template>
<script lang="ts">
import { notify, errNotif } from 'src/helpers/Notify'

export default {
  setup () {
    return {
      errNotif,
      notify
    }
  }
}
</script>
