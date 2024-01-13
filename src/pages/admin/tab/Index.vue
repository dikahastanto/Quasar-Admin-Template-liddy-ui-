<template>
  <q-page padding>
    <q-card class="shadow-card">
      <q-card-section>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="left"
          narrow-indicator
        >
          <q-tab name="mails" label="Mail" />
          <q-tab name="movie" label="Movie" />
          <q-tab name="other" label="Other" />
        </q-tabs>
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="mails">
            Mails
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, id facilis officiis quaerat quidem expedita libero nesciunt vero voluptatem similique ipsa quas praesentium error accusamus facere tempora laudantium officia animi?</p>
            <!-- add content here -->
          </q-tab-panel>
          <q-tab-panel name="movie">
            Movie
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut soluta fugiat cupiditate iste animi possimus labore sit suscipit consectetur sequi harum nostrum autem placeat inventore et, perspiciatis illum aut quaerat!</p>
            <!-- add content here -->
          </q-tab-panel>
          <q-tab-panel name="other">
            Other
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt asperiores ex tenetur error sequi accusantium vitae, beatae maiores quasi ad tempora possimus illum rerum, doloremque qui ipsa mollitia ab magnam!</p>
            <!-- add content here -->
          </q-tab-panel>
        </q-tab-panels>
      </q-card-section>
    </q-card>
    <q-card class="shadow-card q-mt-sm">
      <q-card-section>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="left"
          narrow-indicator
        >
          <q-tab name="mails" label="Mail" />
          <q-tab name="movie" label="Movie" />
          <q-tab name="other" label="Other" />
        </q-tabs>
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="mails">
            <div class="row q-col-gutter-x-md">
              <div class="col-3">
                <q-img src="https://fastly.picsum.photos/id/979/500/300.jpg?hmac=YpeoDKd26bHTrifDoNXzLJKydHnPU6q5aOkpc9_7mzU"/>
              </div>
              <div class="col-9">
                <div class="text-h6">Mails</div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit maiores velit iure odio, mollitia quod quo veniam commodi fugiat ut officiis ipsam! Numquam laborum similique perferendis quis. Dignissimos, temporibus enim.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit maiores velit iure odio, mollitia quod quo veniam commodi fugiat ut officiis ipsam! Numquam laborum similique perferendis quis. Dignissimos, temporibus enim.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit maiores velit iure odio, mollitia quod quo veniam commodi fugiat ut officiis ipsam! Numquam laborum similique perferendis quis. Dignissimos, temporibus enim.
              </div>
            </div>
          </q-tab-panel>
          <q-tab-panel name="movie">
            <div class="row q-col-gutter-x-md">
              <div class="col-3">
                <q-img src="https://fastly.picsum.photos/id/979/500/300.jpg?hmac=YpeoDKd26bHTrifDoNXzLJKydHnPU6q5aOkpc9_7mzU"/>
              </div>
              <div class="col-9">
                <div class="text-h6">Movie</div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit maiores velit iure odio, mollitia quod quo veniam commodi fugiat ut officiis ipsam! Numquam laborum similique perferendis quis. Dignissimos, temporibus enim.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit maiores velit iure odio, mollitia quod quo veniam commodi fugiat ut officiis ipsam! Numquam laborum similique perferendis quis. Dignissimos, temporibus enim.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit maiores velit iure odio, mollitia quod quo veniam commodi fugiat ut officiis ipsam! Numquam laborum similique perferendis quis. Dignissimos, temporibus enim.
              </div>
            </div>
          </q-tab-panel>
          <q-tab-panel name="other">
            <div class="row q-col-gutter-x-md">
              <div class="col-3">
                <q-img src="https://fastly.picsum.photos/id/979/500/300.jpg?hmac=YpeoDKd26bHTrifDoNXzLJKydHnPU6q5aOkpc9_7mzU"/>
              </div>
              <div class="col-9">
                <div class="text-h6">Other</div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit maiores velit iure odio, mollitia quod quo veniam commodi fugiat ut officiis ipsam! Numquam laborum similique perferendis quis. Dignissimos, temporibus enim.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit maiores velit iure odio, mollitia quod quo veniam commodi fugiat ut officiis ipsam! Numquam laborum similique perferendis quis. Dignissimos, temporibus enim.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit maiores velit iure odio, mollitia quod quo veniam commodi fugiat ut officiis ipsam! Numquam laborum similique perferendis quis. Dignissimos, temporibus enim.
              </div>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script lang="ts">
import { ref } from 'vue'

export default {
  setup () {
    const tab = ref('mails')
    return { tab }
  }
}
</script>
