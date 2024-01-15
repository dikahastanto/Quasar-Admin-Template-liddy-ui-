<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Chart, registerables } from 'chart.js'
import ChartJSPluginDatalabels from 'chartjs-plugin-datalabels'
Chart.register(...registerables, ChartJSPluginDatalabels)
export default defineComponent({
  name: 'App'
})
</script>
