<template>
  <q-card class="shadow-card">
    <q-card-section>
      <div class="row q-gutter-md items-center">
        <div class="col-auto">
          <q-img img-class="img-rounded" height="5em" width="5em" src="https://fastly.picsum.photos/id/14/500/300.jpg?hmac=Uz-1yNPjOuo_FDP_oEdiuS4L4QsTK11BDum9G5xOHFc"/>
        </div>
        <div class="col-auto">
          <div class="text-body1">{{title}}</div>
          <div class="text-caption my-text-color">{{ description }}</div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BooksCard',
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    description: {
      type: String,
      default: 'Description'
    }
  }
})
</script>
