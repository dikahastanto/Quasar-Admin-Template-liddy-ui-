<template>
  <q-page padding>
    <HeaderPage
      title="Notes App"
      sub-title="Example notes app"
      headerFor="table"
    />
    <div class="row q-mt-md card-header-table q-col-gutter-y-sm items-start justify-between shadow-card q-mb-md">
      <div class="col-lg-8 q-pb-sm col-md-8 col-sm-4 col-xs-12">
        <div class="row q-gutter-sm">
          <q-btn
            :label="t.name"
            unelevated
            color="primary"
            no-caps
            :icon="t.icon"
            v-for="(t, i) in listType"
            :key="i"
            :flat="t.value !== typeActive"
            @click="changeActiveType(t.value)"
          />
        </div>
      </div>
      <div class="col-lg-2 col-md-2 q-pb-sm col-sm-4 col-xs-12">
        <q-btn
          label="Add Note"
          class="float-right full-width"
          color="primary"
          unelevated
          no-caps
          no-wrap
          icon="note_add"
        />
      </div>
    </div>
    <div class="row q-mt-xs q-col-gutter-x-md q-col-gutter-y-md">
      <div class="col-md-3 col-sm-6 col-xs-12" v-for="(n, i) in notes" :key="i">
        <q-card class="shadow-card notes-card card-negative">
          <q-card-section>
            <div class="text-body1">
              {{ n.title }}
            </div>
            <div class="text-caption my-text-color">
              {{ n.date }}
            </div>
            <div class="q-mt-md">
              {{ n.content }}
            </div>
          </q-card-section>
          <q-card-actions class="q-pb-md">
            <q-btn size="sm" flat round icon="star" color="secondary" outline/>
            <q-btn size="sm" flat round icon="delete" color="negative"/>
            <q-space/>
            <q-btn size="sm" round flat color="primary" icon="more_vert">
              <q-menu>
                <q-list style="min-width: 100px">
                  <q-item clickable v-close-popup>
                    <q-item-section>Business</q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-item-section>Social</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<script lang="ts">
import { ref } from 'vue'
import { NotesTypes } from './Props'
export default {
  setup () {
    const typeActive = ref('all')
    const changeActiveType = (type: string) => {
      typeActive.value = type
    }
    const notes: NotesTypes[] = [
      {
        title: 'Go For Lunch',
        content: 'Lunch with business colleagues at the Novotel Hotel',
        date: '4 Jan 2024',
        tag: 'Social',
        type: 'card-positive'
      }
    ]

    return {
      typeActive,
      changeActiveType,
      notes,
      listType: [
        {
          name: 'All Notes',
          value: 'all',
          icon: 'list'
        },
        {
          name: 'Social',
          value: 'social',
          icon: 'share'
        },
        {
          name: 'Important',
          value: 'important',
          icon: 'star'
        }
      ]
    }
  }
}
</script>
<style lang="sass">
.notes-card
  position: relative !important
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1) !important

.notes-card::before
  content: ''
  height: 2.4em
  position: absolute
  top: 1.5em
  left: 0
div.q-card.shadow-card.notes-card.card-positive::before
  border-left: 0.2em solid $positive

div.q-card.shadow-card.notes-card.card-negative::before
  border-left: 0.2em solid $negative
</style>
