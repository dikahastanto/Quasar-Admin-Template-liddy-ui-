<template>
  <div class="row banner-card my-card">
    <div class="col-lg-8 col-md-8 col-xs-12 col-sm-6 text-bold text-h6 my-text-color items-center">
      <div class="row">
        Welcome back my admin!
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
</template>
<script lang="ts">
export default {
  name: 'WelcomeBanner'
}
</script>
<style lang="sass" scoped>
.body--light
  .banner-card
    background-color: #ecf3fe
    padding: 2em

</style>
