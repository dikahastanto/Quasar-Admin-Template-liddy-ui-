<template>
  <div class="row justify-arround q-col-gutter-y-sm items-center">
    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
      <div class="text-h6 my-text-color text-bold">{{ title }}</div>
    </div>
    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
      <div :class="`q-pl-md row q-gutter-y-md q-col-gutter-x-md ${q.screen.xs ? 'justify-start' : 'justify-end'}`">
        <slot name="rightAction"></slot>
      </div>
    </div>
  </div>
  <div class="row q-ml-md q-mt-sm q-mb-md q-col-gutter-x-sm q-col-gutter-y-sm">
    <slot name="exportSlot"></slot>
  </div>
</template>

<script lang="ts">
import { useQuasar } from 'quasar'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TitleTable',
  props: {
    title: {
      type: String,
      default: 'Table'
    },
    subTitle: {
      type: String,
      default: 'Keterangan/deskripsi table'
    }
  },
  setup () {
    const q = useQuasar()
    return {
      q
    }
  }
})
</script>
