<template>
  <q-item clickable active-class="my-active" :to="{name: to}">
    <q-item-section avatar>
      <q-icon :name="icon" class="icon-drawer"/>
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ text }}</q-item-label>
    </q-item-section>
  </q-item>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    icon: {
      type: String,
      default: 'navigate_next'
    },
    text: {
      type: String,
      default: 'menu'
    },
    to: {
      type: String,
      default: ''
    }
  }
})
</script>
