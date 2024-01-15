<template>
  <BarChart :chart-data="data" :options="options" />
</template>
<script lang="ts">
import { Context } from 'vm'
import { defineComponent } from 'vue'
import { BarChart } from 'vue-chart-3'

export default defineComponent({
  components: { BarChart },
  name: 'MyBarChart',
  setup () {
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
          backgroundColor: '#0F2167',
          borderColor: '#0F2167',
          borderRadius: 30,
          borderSkipped: false,
          data: [40, 20, 12, 39, 10]
        }
      ]
    }
    const options = {
      barThickness: 30,
      legend: {
        position: 'bottom'
      },
      scales: {
        y: {
          grid: {
            borderDash: [1, 3]
          }
        },
        x: {
          display: false
        }
      },
      plugins: {
        datalabels: {
          color: 'white',
          formatter: function (value: string, context: Context) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            return context?.chart!.data!.labels![context.dataIndex]
          }
        },
        legend: {
          position: 'bottom',
          display: false
        },
        title: {
          display: true,
          text: 'Sales By Month'
        }

      }
    }

    return {
      data,
      options
    }
  }
})
</script>
