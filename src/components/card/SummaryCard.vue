<template>
  <q-card class="shadow-card">
    <q-card-section>
      <div class="row flex-center">
        <q-avatar :color="bgIconColor" size="4.4em">
          <q-icon :name="icons" :color="iconColor" size="0.8em"/>
        </q-avatar>
      </div>
      <div class="text-center q-mt-sm">
        <div class="text-h6">
          {{ count }}
        </div>
        <div class="my-text-color">
          {{ title }}
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>
<script lang="ts">
export default {
  name: 'SummaryCard',
  props: {
    bgIconColor: {
      default: 'blue-1',
      type: String
    },
    iconColor: {
      default: 'blue-7',
      type: String
    },
    icons: {
      type: String,
      default: 'person'
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
}
</script>
