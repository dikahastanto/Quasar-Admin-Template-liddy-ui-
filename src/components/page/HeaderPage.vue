<template>
  <div class="row dashboard-card my-card q-mb-md">
    <div class="col-lg-8 col-md-8 col-xs-12 col-sm-6 my-text-color items-center">
      <div class="row text-bold text-h6">
        {{ title }}
      </div>
      <div class="row text-body1">
        {{ subTitle }}
      </div>
    </div>
    <div class="col-lg-4 col-md-4 col-xs-12 col-sm-6">
      <q-img width="130px" style="margin-bottom: -28px;" :src="`img/${img}`"></q-img>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HeaderPage',
  props: {
    title: {
      type: String,
      default: 'Judul Halaman'
    },
    subTitle: {
      type: String,
      default: ''
    },
    // img: {
    //   type: String,
    //   default: 'img/data.svg'
    // },
    headerFor: {
      type: String,
      default: 'table',
      validator: function (value: string) {
        return ['table', 'form'].includes(value)
      }
    }
  },
  setup (props) {
    const { headerFor } = props
    return {
      img: headerFor === 'table' ? 'data.svg' : 'form.svg'
    }
  }
})
</script>
<style lang="sass" scoped>
.dashboard-card
  background-color: #ecf3fe
  padding: 2em

</style>
