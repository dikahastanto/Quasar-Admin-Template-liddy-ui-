<template>
  <q-page padding>
    <HeaderPage
      title="Table"
      subTitle="Default Table"
    />
    <div class="row q-mt-md card-header-table q-col-gutter-y-sm justify-between shadow-card q-mb-md">
      <div class="col-lg-3 col-md-3 col-sm-4 col-xs-12">
        <q-input
          label="Search Data"
          v-model="filter"
          outlined
          dense
        >
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
        <div class="row justify-end q-gutter-sm">
          <q-btn-dropdown
            no-caps
            color="primary"
            label="Export/Import"
            outline
          >
            <q-list>
              <q-item clickable v-close-popup>
                <q-item-section>
                  <q-item-label>Import</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>
                  <q-item-label>Export CSV</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <q-btn
            label="Add"
            class="float-right col"
            color="primary"
            unelevated
            no-caps
            no-wrap
            icon="add_circle"
          />
        </div>
      </div>
    </div>
    <q-card class="shadow-card">
      <q-card-section>
        <q-table
          flat
          :rows="rows"
          :columns="DefaultColumns"
          row-key="name"
          :filter="filter"
          :loading="loading"
          separator="none"
        >
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="name" :props="props">
                {{ props.row.name }}
              </q-td>
              <q-td key="calories" :props="props">
                {{ props.row.calories }}
              </q-td>
              <q-td key="fat" :props="props">
                {{ props.row.fat }}
              </q-td>
              <q-td key="carbs" :props="props">
                {{ props.row.carbs }}
              </q-td>
              <q-td key="protein" :props="props">
                {{ props.row.protein }}
              </q-td>
              <q-td key="sodium" :props="props">
                {{ props.row.sodium }}
              </q-td>
              <q-td key="iron" :props="props">
                {{ props.row.iron }}
              </q-td>
              <q-td key="actions" :props="props">
                <div class="justify-center q-gutter-x-xs">
                  <q-btn
                    label="Details"
                    icon="info"
                    outline
                    color="primary"
                    no-wrap
                  />
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
                </div>
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script lang="ts">
import { ref } from 'vue'
import { DefaultColumns } from './Props'
export default {
  setup () {
    const filter = ref('')
    const rows = ref([
      {
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        sodium: 87,
        calcium: '14%',
        iron: '1%'
      },
      {
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        sodium: 129,
        calcium: '8%',
        iron: '1%'
      },
      {
        name: 'Eclair',
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        sodium: 337,
        calcium: '6%',
        iron: '7%'
      },
      {
        name: 'Cupcake',
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        sodium: 413,
        calcium: '3%',
        iron: '8%'
      },
      {
        name: 'Gingerbread',
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        sodium: 327,
        calcium: '7%',
        iron: '16%'
      },
      {
        name: 'Jelly bean',
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        sodium: 50,
        calcium: '0%',
        iron: '0%'
      },
      {
        name: 'Lollipop',
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        sodium: 38,
        calcium: '0%',
        iron: '2%'
      },
      {
        name: 'Honeycomb',
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        sodium: 562,
        calcium: '0%',
        iron: '45%'
      },
      {
        name: 'Donut',
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        sodium: 326,
        calcium: '2%',
        iron: '22%'
      },
      {
        name: 'KitKat',
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        sodium: 54,
        calcium: '12%',
        iron: '6%'
      }
    ])
    const loading = ref(false)
    return {
      filter,
      rows,
      loading,
      DefaultColumns
    }
  }
}
</script>
