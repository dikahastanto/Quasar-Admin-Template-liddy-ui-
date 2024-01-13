<template>
  <q-page padding>
    <div class="row q-col-gutter-sm">
      <div class="col-md-6 col-sm-12 col-xs-12">
        <q-card class="shadow-card">
          <q-card-section>
            <div class="text-body1">Elevated Button</div>
            <div class="row q-gutter-sm q-mt-sm">
              <q-btn v-for="(b, i) in listBtn" :key="i" :color="b" :label="b" no-caps/>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <q-card class="shadow-card">
          <q-card-section>
            <div class="text-body1">Unelevated Button</div>
            <div class="row q-gutter-sm q-mt-sm">
              <q-btn unelevated v-for="(b, i) in listBtn" :key="i" :color="b" :label="b" no-caps/>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <q-card class="shadow-card">
          <q-card-section>
            <div class="text-body1">Outline Button</div>
            <div class="row q-gutter-sm q-mt-sm">
              <q-btn outline v-for="(b, i) in listBtn" :key="i" :color="b" :label="b" no-caps/>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <q-card class="shadow-card">
          <q-card-section>
            <div class="text-body1">Flat Button</div>
            <div class="row q-gutter-sm q-mt-sm">
              <q-btn flat v-for="(b, i) in listBtn" :key="i" :color="b" :label="b" no-caps/>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-12 col-sm-12 col-xs-12">
        <q-card class="shadow-card">
          <q-card-section>
            <div class="text-body1">Icon</div>
            <div class="row q-gutter-x-sm q-mt-sm q-mb-sm">
              <q-btn unelevated icon="info" color="primary" label="Icon Left" no-caps/>
              <q-btn unelevated icon-right="info" color="primary" label="Icon Right" no-caps/>
              <q-btn outline icon="info" color="primary" label="Outlined Icon" no-caps/>
              <q-btn flat icon="favorite" color="primary" label="Flat Icon" no-caps/>
              <q-btn round flat icon="comment" color="primary"/>
              <q-btn round unelevated icon="share" color="primary"/>
              <q-btn outline unelevated icon="list" color="primary"/>
            </div>

            <div class="row q-mt-md">
              <q-btn unelevated class="full-width" color="primary" label="Full Width" no-caps/>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <q-card class="shadow-card">
          <q-card-section>
            <div class="text-body1 q-mb-sm">Other</div>
            <div class="row q-gutter-sm">
              <q-btn-dropdown
                no-caps
                color="primary"
                label="More Actions"
                unelevated
              >
                <q-list>
                  <q-item clickable v-close-popup>
                    <q-item-section>
                      <q-item-label>Edit</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-item-section>
                      <q-item-label>Delete</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
              <q-btn color="primary" label="Basic Menu">
                <q-menu>
                  <q-list style="min-width: 100px">
                    <q-item clickable v-close-popup>
                      <q-item-section>New tab</q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup>
                      <q-item-section>New incognito tab</q-item-section>
                    </q-item>
                    <q-separator />
                  </q-list>
                </q-menu>
              </q-btn>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <!-- <div class="col-md-12 col-sm-12 col-xs-12">
        <q-card class="shadow-card">
          <q-card-section>
            <div class="text-body1">Icon</div>
            <div class="row q-gutter-sm q-mt-sm">
              <q-btn round v-for="(b, i) in listBtn" icon="info" :key="i" :color="b" :label="b" no-caps/>
            </div>
          </q-card-section>
        </q-card>
      </div> -->
    </div>
  </q-page>
</template>
<script lang="ts">

export default {
  setup () {
    return {
      listBtn: [
        'primary',
        'warning',
        'negative',
        'info',
        'dark',
        'accent'
      ]
    }
  }
}
</script>
