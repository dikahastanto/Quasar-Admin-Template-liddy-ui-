<template>
  <DoughnutChart :chart-data="data" :options="options"/>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { DoughnutChart } from 'vue-chart-3'

export default defineComponent({
  components: { DoughnutChart },
  name: 'MyDoughnatChart',
  setup () {
    const options = {
      plugins: {
        legend: {
          display: false
        },
        title: {
          display: true,
          text: 'Data'
        },
        datalabels: {
          color: 'white'
        }

      }
    }

    const data = {
      showLine: false,
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May'
      ],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: [
            '#77CEFF',
            '#0079AF',
            '#123E6B',
            '#97B0C4'
          ],
          borderColor: '#ffffff',
          borderSkipped: false,
          data: [40, 20, 12, 39, 10]
        }
      ]
    }

    return {
      data,
      options
    }
  }
})
</script>
