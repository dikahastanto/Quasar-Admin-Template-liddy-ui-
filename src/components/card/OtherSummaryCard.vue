<template>
  <q-card class="shadow-card" :style="`border-left: 0.1em solid ${textColor}`">
    <q-card-section class="justify-center q-pa-lg">
      <div class="row justify-left q-col-gutter-x-lg items-center">
        <div class="col-auto">
          <q-img class="text-center" width="3em" :src="`img/summary/${icons}`"/>
        </div>
        <div class="col-auto">
          <div class="row text-h5 text-bold my-text-color">
            {{ count }}
          </div>
          <div class="row text-subtitle" :style="`color: ${textColor}`">
            {{ title }}
          </div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'OtherSummaryCard',
  props: {
    bgColors: {
      default: 'rgb(236,243,254)',
      type: String
    },
    textColor: {
      default: 'rgb(236,243,254)',
      type: String
    },
    icons: {
      type: String,
      default: 'icon-user-male.svg'
    },
    count: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: '-'
    }
  }
})
</script>
<style scoped lang="sass">
.left-shadow
  border-left: 0.2em solid green
</style>
