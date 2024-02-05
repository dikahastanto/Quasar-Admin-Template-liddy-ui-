<template>
  <q-layout view="lHh Lpr lFf" class="bg-app">
    <q-header class="bg-app my-text-color">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          class="my-text-color q-mt-xs"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Dashboard UI
        </q-toolbar-title>
        <div>
          <q-btn round flat>
            <q-avatar>
              <q-img src="~assets/img/user.svg" class="bg-primary"/>
            </q-avatar>
            <q-menu class="shadow-card">
              <q-card flat style="width: 25em;" class="shadow-card my-text-color">
                <q-card-section>
                  <div class="text-bold text-h6 q-px-md">User Profile</div>
                  <div class="row q-px-md q-mt-md q-col-gutter-x-md items-center">
                    <div class="col-auto">
                      <q-avatar size="7em">
                        <q-img src="~assets/img/user.svg"/>
                      </q-avatar>
                    </div>
                    <div class="col">
                      <div class="text-bold text-body1">Admin</div>
                      <div>Admin</div>
                      <div class="text-subtitle">admin@gmail.com</div>
                    </div>
                  </div>
                  <q-separator class="q-mt-md q-mx-md"/>
                  <div class="row q-mt-md">
                    <q-list>
                      <q-item>
                        <q-item-section avatar>
                          <q-avatar class="bg-cool" rounded>
                            <q-icon color="primary" name="manage_accounts" />
                          </q-avatar>
                        </q-item-section>
                        <q-item-section>
                          <q-item-label class="text-bold">My Profile</q-item-label>
                          <q-item-label caption lines="1">Account Settings</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item>
                        <q-item-section avatar>
                          <q-avatar class="bg-cool" rounded>
                            <q-icon color="primary" name="task" />
                          </q-avatar>
                        </q-item-section>
                        <q-item-section>
                          <q-item-label class="text-bold">Task</q-item-label>
                          <q-item-label caption lines="1">Your Task</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item>
                        <q-item-section avatar>
                          <q-avatar class="bg-cool" rounded>
                            <q-icon color="primary" name="key" />
                          </q-avatar>
                        </q-item-section>
                        <q-item-section>
                          <q-item-label class="text-bold">Change Password</q-item-label>
                          <q-item-label caption lines="1">Change Your Personal Password</q-item-label>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </div>
                  <div class="row q-mt-sm q-px-md">
                    <q-btn
                      label="Logout"
                      outline
                      color="primary"
                      class="full-width q-mt-sm q-px-lg"
                      dense
                      @click="Logout"
                    />
                  </div>
                </q-card-section>
              </q-card>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <div class="q-ml-md q-mb-lg q-mt-lg">
        <div class="row">
          <div class="row q-col-gutter-x-md items-center">
            <div class="col-auto">
              <q-img src="~assets/img/logo.png" width="4em"/>
            </div>
            <div class="col-auto">
              <div class="text-h5 text-bold text-primary">LIDDY UI</div>
            </div>
          </div>
        </div>
      </div>
      <q-separator spaced inset />
      <q-list>
        <q-item-label
          header
        >
          Menu
        </q-item-label>

        <menu-item
          v-for="(m, i) in menus"
          :key="i"
          :icon="m.icon"
          :text="m.text"
          :isTitle="m.isTitle"
          :to="m.to"
          :child="m.child"
          :subMenu="m.child"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { ref } from 'vue'
import { menus } from './components/Menu'
import MenuItem from './components/MenuItem.vue'
import Logout from 'src/helpers/Logout'

export default {
  name: 'MainLayout',
  components: { MenuItem },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      menus,
      Logout
    }
  }
}
</script>
