<template>
  <q-page padding>
    <WelcomeBanner/>
    <div class="row q-mt-xs q-col-gutter-x-md q-col-gutter-y-md">
      <div class="col-md-3 col-sm-6 col-xs-12" v-for="(d, i) in summary" :key="i">
        <SummaryCard
          :bg-icon-color="d.bgIconColor"
          :icon-color="d.iconColor"
          :count="formatNumber(Number(d.data))"
          :title="d.title"
          :icons="d.icons"
        />
      </div>
    </div>
    <div class="row q-mt-md q-col-gutter-sm">
      <div class="col-md-4 col-sm-6 col-xs-12">
        <q-card class="shadow-card">
          <q-card-section>
            <MyBarChart/>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
        <q-card class="shadow-card">
          <q-card-section>
            <MyDoughnatChart/>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-4 col-sm-12 col-xs-12">
        <q-card class="shadow-card my-text-color full-height">
          <q-card-section>
            <div class="text-h6">Payment Status</div>
            <div class="text-body2 q-mb-lg">All of status transaction</div>
            <TransactionStatusCard
              v-for="(s, i) in dataStatus"
              :key="i"
              :colorCard="s.color"
              :title="s.title"
              :desc="s.desc"
              class="q-mb-md"
              :val="s.val"
              :icon="s.icon"
            />
            <q-btn
              label="View All Status"
              no-caps
              color="primary"
              outline
              class="full-width q-mt-md"
            />
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="text-body1 q-mt-lg text-bold my-text-color">Transaction</div>
    <div class="text-body2 my-text-color q-mb-md">All of transaction data</div>
    <q-separator class="q-mb-md"/>
    <q-card class="shadow-card">
      <q-card-section>
        <q-table
          flat
          :rows="rows"
          :columns="DefaultColumns"
          row-key="name"
          separator="none"
        >
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="user" :props="props">
                <div class="row q-col-gutter-x-sm no-wrap">
                  <div class="col-auto">
                    <q-avatar>
                      <img :src="props.row.img" alt="">
                    </q-avatar>
                  </div>
                  <div class="col-auto">
                    <div class="text-bold text-body1">{{ props.row.name }}</div>
                    <div class="">{{ props.row.role }}</div>
                  </div>
                </div>
              </q-td>
              <q-td key="item" :props="props">
                {{ props.row.item }}
              </q-td>
              <q-td key="price" :props="props">
                {{ props.row.price }}
              </q-td>
              <q-td key="qty" :props="props">
                {{ props.row.qty }}
              </q-td>
              <q-td key="total" :props="props">
                {{ props.row.total }}
              </q-td>
              <q-td key="status" :props="props">
                <q-badge class="q-pa-sm" :color="listStatus[props.row.status].color" outline>
                  {{ listStatus[props.row.status].label }}
                </q-badge>
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script lang="ts">
import WelcomeBanner from '../../components/dashboard/WelcomeBanner.vue'
import { QTableProps, colors } from 'quasar'
import MyBarChart from './chart/Bar.vue'
import MyDoughnatChart from './chart/Doughnat.vue'
import TransactionStatusCard from 'src/components/card/TransactionStatusCard.vue'
import SummaryCard from 'src/components/card/SummaryCard.vue'
import { formatNumber } from 'src/helpers/Number'

export default {
  components: {
    MyBarChart,
    MyDoughnatChart,
    TransactionStatusCard,
    WelcomeBanner,
    SummaryCard
  },
  setup () {
    const DefaultColumns: QTableProps['columns'] = [
      { name: 'user', label: 'User', field: 'user', align: 'left' },
      { name: 'item', label: 'Item', field: 'item', align: 'left' },
      { name: 'price', label: 'Price', field: 'item', align: 'left' },
      { name: 'qty', label: 'Qty', field: 'qty', align: 'left' },
      { name: 'total', label: 'Total', field: 'total', align: 'left' },
      { name: 'status', label: 'Status', field: 'status', align: 'left' }
    ]
    type status = {
      label: string,
      color: string
    }
    const listStatus: Record<number, status> = {
      1: {
        label: 'Pending',
        color: 'warning'
      },
      2: {
        label: 'Failed',
        color: 'negative'
      },
      3: {
        label: 'Success',
        color: 'positive'
      },
      4: {
        label: 'Cancled',
        color: 'negative'
      }
    }
    const { getPaletteColor, changeAlpha } = colors
    return {
      formatNumber,
      listStatus,
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
      ],
      DefaultColumns,
      rows: [
        {
          name: 'Dika',
          role: 'Customer',
          item: 'TV',
          price: '$40',
          qty: 1,
          total: '$40',
          status: 1,
          img: `https://picsum.photos/500/300?t=${Math.random()}`
        },
        {
          name: 'Hastanto',
          role: 'Dropshipper',
          item: 'Smartphone',
          price: '$50',
          qty: 1,
          total: '$100',
          status: 2,
          img: `https://picsum.photos/500/300?t=${Math.random()}`
        },
        {
          name: 'Budi',
          role: 'Buyer',
          item: 'Laptop',
          price: '$500',
          qty: 1,
          total: '$500',
          status: 3,
          img: `https://picsum.photos/500/300?t=${Math.random()}`
        },
        {
          name: 'Andi',
          role: 'Buyer',
          item: 'Laptop',
          price: '$500',
          qty: 1,
          total: '$500',
          status: 4,
          img: `https://picsum.photos/500/300?t=${Math.random()}`
        }
      ],
      getPaletteColor,
      changeAlpha,
      dataStatus: [
        {
          color: 'warning',
          icon: 'pending',
          val: '$50.000',
          title: 'Pending',
          desc: 'All of pending transactions'
        },
        {
          color: 'negative',
          icon: 'feedback',
          val: '$10.000',
          title: 'Failed',
          desc: 'Failed transaction'
        },
        {
          color: 'secondary',
          icon: 'done',
          val: '$420.000',
          title: 'Success',
          desc: 'Finish transaction'
        },
        {
          color: 'negative',
          icon: 'keyboard_return',
          val: '$420.000',
          title: 'Cancle',
          desc: 'Cancled by user'
        }
      ],
      summary: [
        {
          bgIconColor: 'blue-1',
          iconColor: 'blue-7',
          title: 'Total Users',
          data: '332120',
          icons: 'account_balance_wallet'
        },
        {
          bgIconColor: 'purple-1',
          iconColor: 'purple-7',
          title: 'Total Oreders',
          data: '43553',
          icons: 'local_mall'
        },
        {
          bgIconColor: 'teal-1',
          iconColor: 'teal-7',
          title: 'Total Delivered',
          data: '43553',
          icons: 'local_shipping'
        },
        {
          bgIconColor: 'deep-orange-1',
          iconColor: 'deep-orange-7',
          title: 'Total Cancelled',
          data: '43553',
          icons: 'settings_backup_restore'
        }
      ]
    }
  }
}
</script>

<style lang="sass">
.separator
  background-color: $bg-text-icon
  width: 1px !important
  height: 3em
  // text-align: center
  // margin: 0 auto
.img-rounded
  border-radius: 8% !important
</style>
