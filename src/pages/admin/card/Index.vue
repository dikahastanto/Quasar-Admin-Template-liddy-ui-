<template>
  <q-page padding>
    <div class="text-body1 q-mt-lg text-bold my-text-color q-mb-md">Books Card</div>
    <q-separator class="q-mb-md"/>
    <div class="row q-col-gutter-sm">
      <div class="col-md-4 col-sm-6 col-xs-12" v-for="i in 3" :key="i">
        <BooksCard title="Untitled 1" description="Description this book"/>
      </div>
    </div>
    <div class="text-body1 q-mt-lg text-bold my-text-color q-mb-md">Social Card</div>
    <q-separator class="q-mb-md"/>
    <div class="row q-col-gutter-x-md q-col-gutter-y-md">
      <div class="col-md-4" v-for="i in 3" :key="i">
        <q-card class="shadow-card">
          <q-img src="https://fastly.picsum.photos/id/979/500/300.jpg?hmac=YpeoDKd26bHTrifDoNXzLJKydHnPU6q5aOkpc9_7mzU"/>
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
import BooksCard from 'src/components/card/BooksCard.vue'

export default {
  components: { BooksCard },
  setup () {
    return {
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
