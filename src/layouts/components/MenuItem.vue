<template>
  <q-item-label header v-if="isTitle">
    <div class="title-item">
      {{text}}
    </div>
  </q-item-label>
  <q-expansion-item
    :icon="icon"
    :label="text"
    :content-inset-level="0.1"
    v-else-if="child.length > 0"
    active-class="my-active"
    >
    <child-item
      v-for="(m, i) in child"
      :key="i"
      :to="m.to"
      :text="m.text"
      :icon="m.icon"
    />
  </q-expansion-item>
  <child-item
    v-else
    :to="to"
    :text="text"
    :icon="icon"
  />
</template>
<script lang="ts">
import { ChildMenu } from './types'
import { defineComponent, PropType } from 'vue'
import ChildItem from './ChildMenu.vue'

export default defineComponent({
  components: { ChildItem },
  props: {
    isTitle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: 'dashboard'
    },
    text: {
      type: String,
      default: '-'
    },
    to: {
      type: String,
      default: ''
    },
    hasChild: {
      default: false,
      type: Boolean
    },
    child: {
      type: Array as PropType<ChildMenu[]>,
      default: () => []
    }
  }
})
</script>
