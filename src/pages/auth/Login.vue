<template>
  <q-layout class="bg-grey-2" view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="items-center bg-soft">
        <div style="" class="row full-height full-width main-container">
          <div class="col-lg-8 col-md-7 center" v-if="q.screen.gt.sm">
            <div class="col center">
              <q-img src="~assets/img/login.svg" width="100%"/>
            </div>
          </div>
          <div class="col-lg-4 col-md-5 col-sm-12 col-xs-12 right-section">
            <div :class="getContainer()">
              <div class="text-h5 text-weight-light my-text-color">LIDDY UI</div>
              <div class="text-body2 text-weight-light my-text-color">Login to access your account</div>
              <q-form class="q-mt-md" @submit="onSubmit">
                <q-input
                  label="Username"
                  v-model="form.username"
                  outlined
                  :rules="$requiredField"
                />
                <q-input
                  label="Password"
                  v-model="form.password"
                  outlined :type="`${showPassword ? 'text' : 'password'}`"
                  :rules="$requiredField"
                />
                <div class="row q-mt-xs justify-between items-center">
                  <q-checkbox v-model="showPassword" style="margin-left: -10px !important;" label="Show password" />
                  <div class="cursor-pointer text-primary">Forgot Password?</div>
                </div>
                <q-btn label="Sign In" type="submit" no-caps unelevated class="q-mt-md full-width" color="primary"/>
              </q-form>
              <div class="q-mt-md row justify-center items-center">
                Don't have account ? <span class="q-ml-xs text-primary cursor-pointer">Register Now</span>
              </div>
            </div>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script lang="ts">
import { ref } from 'vue'
// import { api, ResponseAPI } from 'src/boot/axios'
// import { setProfile, TUser } from 'src/helper/Session'
// import { allAkses } from 'src/helper/ListAkses'
import { useRouter } from 'vue-router'
import { errNotif } from 'src/helpers/Notify'
import { useQuasar } from 'quasar'
import { setProfile, TUser } from 'src/helpers/Session'
import { allAkses } from 'src/helpers/ListAkses'

export default {
  setup () {
    const router = useRouter()
    const form = ref({
      username: 'admin',
      password: '123'
    })
    const isLoading = ref(false)
    const visible = ref(false)
    const showPassword = ref(false)
    const q = useQuasar()

    const onSubmit = async () => {
      if (form.value.username === 'admin' && form.value.password === '123') {
        // example from api
        // const res = await api.post<ResponseAPI<TUser>>('user/sign-in', form.value)
        // if (res.data.status) {
        //   goToHome(res.data.result)
        // }
        const res: TUser = {
          iduser: 1,
          nama: 'Dika Hastanto',
          role: 'admin',
          token: '323949298hifih4infnfn494ibfi449',
          username: 'admin'
        }
        goToHome(res)
        // router.push({ name: 'dashboardAdmin' })
      } else {
        errNotif('Username or Password not correct')
      }
    }

    const goToHome = (data: TUser) => {
      const access = data.role
      if (access) {
        const page = allAkses.find(r => {
          return r.value === access
        })
        if (page) {
          setProfile(data)
          router.push({ name: page.index })
        } else {
          deniedAccess()
        }
      } else {
        deniedAccess()
      }
    }

    const deniedAccess = () => {
      errNotif('Akses Dilarang')
    }

    const getContainer = () => {
      if (q.screen.sm || q.screen.xs) {
        return `container-${q.screen.name}`
      }
      return 'container'
    }

    return {
      form,
      isLoading,
      visible,
      showPassword,
      onSubmit,
      getContainer,
      q
    }
  }
}
</script>
<style lang="sass" scoped>
.login-card
  background-color: white
  padding: 40px
.main-container
  height: 100% !important
  overflow: auto !important
  position: absolute !important

.right-section
  background-color: white !important
.center
  margin: auto
  width: 50%
  padding: 10px
.container
  padding: 50% 15% 0px 15%
.container-sm
  padding: 26% 15% 0px 15%
.container-xs
  padding: 41% 15% 0px 15%
</style>
