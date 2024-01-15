<template>
  <div class="row justify-between items-center q-mt-sm">
    <div class="col-auto">
      <div class="row no-wrap q-gutter-x-md">
        <div class="col-auto">
          <q-avatar
            rounded
            :style="`background: ${changeAlpha(getPaletteColor(`${colorCard}`), 0.1)}`"
            :text-color="colorCard"
            :icon="icon"
          />
        </div>
        <div class="col-auto">
          <div class="text-bold text-body1">{{ title }}</div>
          <div>{{desc}}</div>
        </div>
      </div>
    </div>
    <div class="col-3 text-right text-h6 text-bold">
      {{ val }}
    </div>
  </div>
</template>
<script lang="ts">
import { colors } from 'quasar'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TransactionStatusCard',
  props: {
    colorCard: {
      type: String,
      default: 'primary'
    },
    title: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: 'list'
    },
    desc: {
      type: String,
      default: ''
    },
    val: {
      type: String,
      default: '$ 0'
    }
  },
  setup () {
    const { getPaletteColor, changeAlpha } = colors
    return {
      getPaletteColor,
      changeAlpha
    }
  }
})
</script>
