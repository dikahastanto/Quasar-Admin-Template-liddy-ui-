<template>
  <q-page padding>
    <div class="row q-gutter-sm q-mb-sm">
      <q-btn @click="confirmationDialog" label="Confirm Dialog" color="primary" unelevated no-caps/>
      <q-btn @click="dialog = true" label="Dialog Component" color="primary" outline no-caps/>
    </div>
    <div>You can customize default configuration notify in src/helper/Notify.ts</div>
    <q-dialog
      v-model="dialog"
    >
      <q-card style="width: 700px; max-width: 80vw;" class="card-dialog">
        <q-card-section class="row items-center">
          <div class="text-h6">Form Add</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input v-model="name" label="Your Name"/>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn
            flat
            label="Close"
            no-caps
            class="btn-transparent"
            v-close-popup
          />
          <q-btn
            label="Save"
            unelevated
            no-caps
            v-close-popup
            class="btn-transparent-primary"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>
<script lang="ts">
import ConfirmDialogVue from 'src/components/dialog/ConfirmDialog.vue'
import { useQuasar } from 'quasar'
import { notify } from 'src/helpers/Notify'
import { ref } from 'vue'

export default {
  setup () {
    const q = useQuasar()
    const dialog = ref(false)
    const name = ref('')

    const confirmationDialog = () => {
      q.dialog({
        component: ConfirmDialogVue
      }).onOk(async () => {
        notify('Successfull')
      })
    }
    return {
      name,
      dialog,
      confirmationDialog
    }
  }
}
</script>
