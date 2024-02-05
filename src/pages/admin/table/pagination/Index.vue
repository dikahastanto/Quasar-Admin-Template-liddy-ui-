<template>
  <q-page padding>
    <HeaderPage
      title="Table"
      subTitle="Pagination Table"
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
          v-model:pagination="pagination"
          @request="onRequest"
        >
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="profilePicture" :props="props">
                <div class="row q-gutter-sm no-wrap">
                  <q-avatar>
                    <q-img
                      :src="props.row.profile_picture"
                      width="4em"
                    />
                  </q-avatar>
                  <div>
                    <div class="text-body1">{{`${props.row.first_name} ${props.row.last_name}` }}</div>
                    <div class="text-caption text-weight-light">{{ props.row.job }}</div>
                  </div>
                </div>
              </q-td>
              <q-td key="gender" :props="props">
                {{ props.row.gender.toUpperCase() }}
              </q-td>
              <q-td key="email" :props="props">
                {{ props.row.email }}
              </q-td>
              <q-td key="phone" :props="props">
                {{ props.row.phone }}
              </q-td>
              <q-td key="street" :props="props">
                {{ props.row.street }}
              </q-td>
              <q-td key="country" :props="props">
                {{ props.row.country }}
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
import { onMounted, Ref, ref } from 'vue'
import { DefaultColumns, TResponseUser } from './Props'
import { api, ResponseAPI } from 'src/boot/axios'
import createPagination, { paginateProps } from 'src/helpers/Pagination'

export default {
  setup () {
    const filter = ref('')
    const rows: Ref<TResponseUser[]> = ref([])
    const loading = ref(false)
    const pagination = ref({
      page: 1,
      rowsPerPage: 10,
      rowsNumber: 0
    })

    const onRequest = async (props: paginateProps) => {
      try {
        // this is example free api pagination
        loading.value = true
        const res = await api.get<ResponseAPI<TResponseUser[]>>('sample-data/users', {
          params: createPagination(props)
        })
        if (res.data.success) {
          rows.value = res.data.users

          // eslint-disable-next-line camelcase, @typescript-eslint/no-non-null-assertion
          const { limit, offset, total_users } = res.data
          pagination.value.page = offset
          pagination.value.rowsPerPage = limit
          // eslint-disable-next-line camelcase
          pagination.value.rowsNumber = total_users
        } else {
          rows.value = []
        }
      } finally {
        loading.value = false
      }
    }

    onMounted(() => {
      onRequest({
        pagination: pagination.value,
        filter: filter.value
      })
    })

    return {
      onRequest,
      filter,
      rows,
      loading,
      DefaultColumns,
      pagination
    }
  }
}
</script>
