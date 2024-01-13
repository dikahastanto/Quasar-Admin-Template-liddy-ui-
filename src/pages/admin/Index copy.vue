<!-- <template>
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
    <div class="text-body1 q-mt-lg text-bold my-text-color q-mb-md">Advertise card</div>
    <q-separator class="q-mb-md"/>
    <div class="row q-col-gutter-x-sm q-col-gutter-y-sm">
      <div class="col-md-4 col-sm-6 col-xs-12" v-for="i in 3" :key="i">
        <q-card class="shadow-card">
          <q-card-section>
            <div class="row q-gutter-md items-center">
              <div class="col-auto">
                <q-img img-class="img-rounded" height="5em" width="5em" src="https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/products/s1.jpg"/>
              </div>
              <div class="col-auto">
                <div class="text-body1">50% sell on wrist watch</div>
                <div class="text-caption my-text-color">By Daniel Jubile</div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="text-body1 q-mt-lg text-bold my-text-color q-mb-md">Kichen Sink</div>
    <q-separator class="q-mb-md"/>
    <div class="row q-col-gutter-x-md q-col-gutter-y-md">
      <div class="col-md-4" v-for="i in 3" :key="i">
        <q-card class="shadow-card">
          <q-img src="https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/blog/blog-img5.jpg"/>
          <q-card-section class="q-px-lg">
            <div class="text-h6">Nancy Henry</div>
            <div class="my-text-color">Some quick example text to build on the card title and make up the bulk of the card's content.</div>
          </q-card-section>
          <q-card-actions class="q-px-lg q-pb-lg">
            <q-btn class="btn-transparent-secondary" flat no-caps icon="favorite" label="Like"/>
            <q-btn flat icon="speaker_notes" class="btn-transparent-secondary" no-caps label="Comments"/>
            <q-space/>
            <q-btn icon="share" flat class="btn-transparent-secondary"/>
          </q-card-actions>
        </q-card>
      </div>
    </div>
    <div class="text-body1 q-mt-lg text-bold my-text-color q-mb-md">Progress Card</div>
    <q-separator class="q-mb-md"/>
    <div class="row q-col-gutter-x-md q-col-gutter-y-md">
      <div class="col-md-3 col-xs-12" v-for="(d, i) in cards" :key="i">
        <q-card class="shadow-card">
          <q-card-section>
            <div class="row justify-between items-start">
              <q-avatar rounded size="7em" :color="`${d.color}-1`">
                <q-icon :color="`${d.color}-8`" width="10em" :name="d.icon"/>
              </q-avatar>
              <q-btn flat icon="more_horiz">
                <q-menu>
                  <q-list style="min-width: 100px">
                    <q-item clickable v-close-popup>
                      <q-item-section>Action 1</q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup>
                      <q-item-section>Action 2</q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup>
                      <q-item-section>Action 3</q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>
              </q-btn>
            </div>
            <div class="q-mt-md text-body1 text-bold">{{ d.name }}</div>
            <q-linear-progress rounded size="0.5em" :value="d.val/d.max" :color="d.color" class="q-mt-sm" />
            <div class="row justify-between q-mt-sm">
              <div>{{ d.val }} Gb</div>
              <div>{{d.max}} Gb</div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
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
</style> -->
