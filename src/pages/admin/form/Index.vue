<template>
  <q-page padding>
    <HeaderPage
      title="Form"
      subTitle="Example Form"
      headerFor="form"
    />
    <q-card class="shadow-card">
      <q-card-section>
        <q-form @submit="onSubmit" @reset="onReset">
          <div class="text-body1 q-mb-sm">Fill this form</div>
          <q-input
            v-model="form.name"
            outlined dense
            label="Your Name"
            :rules="$requiredField"
          />
          <q-input
            v-model="form.email"
            outlined dense
            label="E-Mail"
            type="email"
            :rules="$requiredField"
          />
          <q-input
            v-model="form.phoneNumber"
            outlined dense
            label="Phone Number"
            type="number"
            :rules="$requiredField"
          />
          <q-select
            v-model="form.type"
            :options="['Frontend', 'Backend', 'Mobile', 'Data Science']"
            dense
            label="Your Position"
            outlined
            :rules="$requiredField"
          />
          <q-checkbox class="q-mb-md" style="margin-left: -8px;" v-model="form.agree" label="I Agree..." required/>
          <div class="row q-gutter-sm">
            <q-btn label="Cancle" color="primary" outline type="reset"/>
            <q-btn label="Submit" color="primary" unelevated type="submit"/>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script lang="ts">
import { ref } from 'vue'
import { notify } from 'src/helpers/Notify'
import { useQuasar } from 'quasar'

export default {
  setup () {
    const defaultValue = () => {
      return {
        name: '',
        email: '',
        phoneNumber: '',
        type: '',
        agree: false
      }
    }
    const form = ref(defaultValue())
    const q = useQuasar()

    const onSubmit = () => {
      if (form.value.agree) {
        notify('Form has been submitted')
        onReset()
      } else {
        q.dialog({
          title: 'Please agree the term and conditions'
        })
      }
    }

    const onReset = () => {
      form.value = defaultValue()
    }

    return {
      form,
      onSubmit,
      onReset
    }
  }
}
</script>
