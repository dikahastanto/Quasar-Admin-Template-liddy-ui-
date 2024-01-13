<template>
  <q-page padding>
    <div class="row dashboard-card my-card">
      <div class="col-lg-8 col-md-8 col-xs-12 col-sm-6 text-bold text-h6 my-text-color items-center">
        <div class="row">
          Welcome back adminku!
        </div>
        <div class="row q-mt-lg">
          <div class="q-mr-lg">
            <div class="text-h4">484</div>
            <div class="text-caption">User Register</div>
          </div>
          <div class="separator"></div>
          <div class="q-ml-lg">
            <div class="text-h4">944</div>
            <div class="text-caption">Purchased</div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-4 col-xs-12 col-sm-6">
        <q-img width="180px" style="margin-bottom: -28px;" src="~assets/img/welcome.svg"></q-img>
      </div>
    </div>
    <div class="row q-mt-xs q-col-gutter-x-md q-col-gutter-y-md">
      <div class="col-md-3 col-sm-6 col-xs-12" v-for="(d, i) in datas" :key="i">
        <summary-card
          :bg-colors="d.bgColor"
          :textColor="d.textColor"
          :title="d.title"
          :count="d.data"
          :icons="d.icons"
        />
      </div>
    </div>
    <!-- <div class="text-body1 q-mt-lg text-bold my-text-color">User Data</div>
    <div class="text-body2 my-text-color q-mb-md">All of user data</div>
    <q-separator class="q-mb-md"/> -->
  </q-page>
</template>
<script lang="ts">
import SummaryCard from 'src/components/card/SummaryCard.vue'

export default {
  components: {
    SummaryCard
  },
  setup () {
    return {
      datas: [
        {
          bgColor: 'rgb(236,243,254)',
          textColor: 'rgb(70, 138, 247)',
          title: 'Users',
          data: '10',
          icons: 'icon-user-male.svg'
        },
        {
          bgColor: 'rgb(235,1,1, 0.1)',
          textColor: 'rgb(235,1,1)',
          title: 'Items',
          data: '35',
          icons: 'icon-favorites.svg'
        },
        {
          bgColor: 'rgb(230,255,250)',
          textColor: 'rgb(46, 164, 141)',
          title: 'Purchased',
          data: '12',
          icons: 'icon-speech-bubble.svg'
        },
        {
          bgColor: 'rgb(62,217,235, 0.1)',
          textColor: 'rgb(62,217,235)',
          title: 'Followers',
          data: '35 Ha',
          icons: 'icon-connect.svg'
        }

      ],
      cards: [
        {
          name: 'Google Drive',
          icon: 'add_to_drive',
          val: 13,
          max: 15,
          color: 'orange'
        },
        {
          name: 'Facebook',
          icon: 'facebook',
          val: 11,
          max: 15,
          color: 'blue'
        },
        {
          name: 'One Drive',
          icon: 'cloud_upload',
          val: 11,
          max: 15,
          color: 'cyan'
        },
        {
          name: 'Amazon',
          icon: 'cloud',
          val: 11,
          max: 15,
          color: 'green'
        }
      ]
    }
  }
}
</script>

<style lang="sass">
.dashboard-card
  background-color: #ecf3fe
  padding: 2em

.separator
  background-color: $bg-text-icon
  width: 1px !important
  height: 3em
  // text-align: center
  // margin: 0 auto
.img-rounded
  border-radius: 8% !important
</style>
