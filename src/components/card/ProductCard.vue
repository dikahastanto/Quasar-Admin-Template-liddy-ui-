<template>
  <q-card class="shadow-card q-pa-md">
    <q-card-section>
      <q-img
        :src="image"
        height="13em"
      />
      <q-btn
        fab
        flat
        round
        color="negative"
        icon="favorite"
        class="absolute"
        style="top: 10px; right: 12px"
      />
      <div class="text-body1 text-weight-medium my-text-color">
        {{ productName }}
      </div>
      <div class="row q-gutter-sm q-mb-sm">
        <q-rating v-model="productStars" color="yellow-8" :max="5" size="1.3em" />
        <div class="text-caption my-text-color">(123)</div>
      </div>
      <div class="text-h6 text-weight-bold my-text-color">
        {{ formatPrice(price) }}
      </div>
    </q-card-section>
    <q-card-actions>
      <q-btn label="Add to Card" color="primary" no-caps outline icon="shopping_bag"/>
      <q-btn class="bg-soft" unelevated no-caps icon="more_horiz"/>
    </q-card-actions>
  </q-card>
</template>
<script lang="ts" setup>
import { formatPrice } from 'src/helpers/Number'
defineOptions({
  name: 'ProductCard'
})

interface Props {
  image: string,
  stars: number,
  productName: string,
  price: number,
  ratingCount: number
}

const props = withDefaults(defineProps<Props>(), {
  ratingCount: 0,
  price: 0,
  productName: '',
  stars: 0
})

const productStars = props.stars

</script>
