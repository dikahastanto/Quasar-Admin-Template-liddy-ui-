<template>
  <q-layout class="" view="lHh Lpr lFf">
    <q-header class="bg-app my-header my-text-color">
      <q-toolbar>
        <div class="cursor-pointer row items-center">
          <q-img width="3em" src="~assets/img/logo.png"/>
          <div class="text-h6 q-ml-sm text-primary">LIDDY UI</div>
        </div>
        <q-space/>
        <!-- <q-toolbar-title>
        sfd
        </q-toolbar-title> -->
        <div class="row q-gutter-x-lg q-mr-lg items-center text-body1" v-if="q.screen.gt.sm">
          <div class="cursor-pointer">Home</div>
          <div class="cursor-pointer">Our Feature</div>
          <div class="cursor-pointer">About Us</div>
          <div class="cursor-pointer">Contact</div>
          <q-btn
            color="primary"
            unelevated
            label="Sign In"
            icon-right="login"
            no-caps
          />
        </div>
        <q-btn v-else icon="menu" unelevated round size="md"/>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page>
        <div class="banner">
          <div class="banner-item">
            <div class="row items-center full-width justify-between">
              <div class="col-lg-5">
                <div class="text-h3">
                  Available to All,
                  <div class="text-special">Designed for You</div>
                </div>
                <div class="text-body1 q-mt-md">
                  Welcome to liddy ui! Find Convenience and Pleasure in Every Click. Start Your Online Adventure Now!. You'll Find a Variety of Services That Meet Your Needs, Make Your Online Experience More Enjoyable and Efficient with
                </div>
                <div class="row q-mt-md q-gutter-x-sm">
                  <q-btn label="Get Started" no-caps color="primary" unelevated/>
                  <q-btn label="Explore Now" outline no-caps color="primary" unelevated/>
                </div>
              </div>
              <div class="col-7 text-right">
                <q-img width="40em" src="~assets/img/dashboard.png"/>
              </div>
            </div>
          </div>
        </div>
        <div class="feature">
          <div class="feature-title text-white text-h4">Our Awesome Feature</div>
        </div>
        <div class="row feature-items q-col-gutter-md">
          <div class="col-4">
            <q-card class="shadow-card">
              <q-img src="~assets/img/product-card.png" height="18.4em"/>
              <q-card-section>
                <q-badge outlined class="q-pa-sm" outline color="blue-4">
                  Product Card
                </q-badge>
                <div class="q-mt-sm text-h6">
                  Explore Your Product
                </div>
                <div class="my-text-color">
                  Product cards for you exclusively with beautiful UI for mobile and web displays.
                </div>
                <q-btn label="Read More" class="q-mt-md" color="primary" outline/>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-4">
            <q-card class="shadow-card">
              <q-img src="~assets/img/notes-app.png"/>
              <q-card-section>
                <q-badge outlined class="q-pa-sm" outline color="negative">
                  Notes Apps
                </q-badge>
                <div class="q-mt-sm text-h6">
                  Your Assistant
                </div>
                <div class="my-text-color">
                  note for you which helps in managing your tasks with an attractive and beautiful UI.
                </div>
                <q-btn label="Read More" class="q-mt-md" color="primary" outline/>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-4">
            <q-card class="shadow-card">
              <q-img src="~assets/img/table.png"/>
              <q-card-section>
                <q-badge outlined class="q-pa-sm" outline color="primary">
                  Table View
                </q-badge>
                <div class="q-mt-sm text-h6">
                  Pagination Table
                </div>
                <div class="my-text-color">
                  Having problems when retrieving large data? pagination is the solution.
                </div>
                <q-btn label="Read More" class="q-mt-md" color="primary" outline/>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="row summary-card text-white">
          <div class="col-3 text-center">
            <div class="text-h6 text-bold">4+</div>
            <div class="text-body1">Multiple Layouts</div>
          </div>
          <div class="col-3 text-center">
            <div class="text-h6 text-bold">5+</div>
            <div class="text-body1">UI Example</div>
          </div>
          <div class="col-3 text-center">
            <div class="text-h6 text-bold">3+</div>
            <div class="text-body1">Example Page</div>
          </div>
          <div class="col-3 text-center">
            <div class="text-h6 text-bold">300</div>
            <div class="text-body1">Users</div>
          </div>
        </div>
        <div class="about-us">
          <div class="row items-center justify-between">
            <div class="col-4 items-start">
              <div class="text-h4 q-mb-md">Why should we</div>
                <div class="text-body1 my-text-color">The UI display is soft and easy to see, made from the smallest components to the largest</div>
                <div class="text-body1 my-text-color">You can easily change the style, color, size and so on. Get your best website page and enjoy various features from us</div>
            </div>
            <div class="col-8 text-right">
              <q-img src="~assets/img/aa.svg" width="40em"/>
            </div>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script lang="ts" setup>
import { useQuasar } from 'quasar'

const q = useQuasar()

</script>
<style lang="sass" scoped>
.my-header
  padding: 1em 10%
  border-bottom: 0.1px solid $bg-text-icon

// .my-page
//   padding: 0em 12em

.banner
  height: 45em !important
  padding: 0em 12em

.text-special
  color: $primary
  background: rgb(15, 33, 103, 0.2)
  clip-path: polygon(0% 4%, 70% 10%, 72% 75%, 0% 100%)

.banner-item
  padding: 10em 0em

.feature
  background: #0f172a
  padding: 0em 12em
  height: 30em
.feature-title
  padding-top: 10%
.feature-items
  margin-top: -15em
  margin-bottom: 10em
  padding: 0em 12em

.summary-card
  background: #0f172a
  margin: 0em 12em
  border-radius: 0.8em
  padding: 4em 4em

.about-us
  padding: 0em 12em
  margin-top: 5em
</style>
