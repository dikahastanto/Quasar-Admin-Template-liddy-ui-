<template>
  <q-dialog ref="dialogRef" persistent @hide="onDialogHide">
    <q-card flat class="q-dialog-plugin my-card">
      <q-card-section class="text-center">
        <q-avatar size="100px" font-size="82px" text-color="blue-grey-2" icon="error" />
        <div class="text-h6">{{ title }}</div>
        <div class="">{{ message }}</div>
      </q-card-section>

      <q-card-actions>
        <div class="row full-width q-col-gutter-sm">
          <div class="col-6">

            <q-btn color="primary" class="full-width" label="Yes, Continue" no-caps unelevated @click="onOKClick" />
          </div>
          <div class="col-6">
            <q-btn color="primary" class="full-width" label="Cancle" no-caps outline @click="onDialogCancel" />
          </div>
        </div>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script setup lang="ts">
import { useDialogPluginComponent } from 'quasar'
defineEmits([
  ...useDialogPluginComponent.emits
])

const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } = useDialogPluginComponent()
function onOKClick () {
  onDialogOK()
}
</script>
<script lang="ts">
export default {
  name: 'ConfirmationDialog',
  props: {
    title: {
      type: String,
      default: 'Confirmation'
    },
    message: {
      type: String,
      default: 'This action maybe take a risk, are you sure?'
    }
  }
  // Other component options
}
</script>
