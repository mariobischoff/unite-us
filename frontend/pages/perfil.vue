<template>
  <div class="container">
    <div class="content-left">
      <h1 class="text-title">
        {{ user.name }}
        <img
          v-if="user.vip === true"
          id="icon-vip"
          src="@/assets/icons/vip.svg"
          alt="vip"
        >
        <v-btn
          icon
          color="red"
          class="ml-6"
          @click="handleLogout"
        >
          <v-icon>mdi-logout</v-icon>
        </v-btn>
      </h1>
      <span class="text-body">
        {{ user.email }}
      </span>
      <span class="text-body">
        {{ user.city }}
      </span>
      <h2 class="text-subtitle">
        Especialidade
      </h2>
      <span class="text-body">
        {{ user.expertise }}
      </span>
      <h2 class="text-subtitle">
        Disponibilidade
      </h2>
      <span class="text-body">
        {{ user.workAt }}
      </span>
      <h2 class="text-subtitle">
        Pretenção Salarial
      </h2>
      <span class="text-body">
        de
        <span class="text-markup">
          R${{ user.pretension[0] }}
        </span>
        a
        <span class="text-markup">
          R${{ user.pretension[1] }}
        </span>
      </span>
      <h2 class="text-subtitle">
        Última Formação Academica
      </h2>
      <span class="text-body">
        {{ user.lastGraduation }}
      </span>
      <h2 class="text-subtitle">
        Habilidades
      </h2>
      <span
        v-for="skill in user.skills"
        :key="skill.id"
        class="text-body"
      >
        {{ skill }}
      </span>
      <div id="edit-button">
        <v-btn rounded color="green" small @click="dialog = !dialog">
          <v-icon color="white" class="mr-2">
            mdi-cog
          </v-icon>
          <span style="color: white">Alterar Perfil</span>
        </v-btn>
      </div>
      <PerfilForm :dialog="dialog" :user="JSON.parse(JSON.stringify(user))" @handleForm="handleForm" />
    </div>
    <div class="content-right">
      <belbin-test v-if="!user.belbinTest" />
      <div>
        {{ user.belbinTest }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import BelbinTest from '@/components/BelbinTest'
import PerfilForm from '@/components/PerfilForm'
export default {
  layout: 'BaseLayout',
  // middleware: 'authenticated',
  components: {
    BelbinTest,
    PerfilForm
  },
  data () {
    return {
      dialog: false
    }
  },
  computed: {
    ...mapGetters({
      user: 'user/getUser'
    })
  },
  methods: {
    ...mapActions({
      logout: 'user/logout'
    }),
    handleLogout () {
      this.logout()
        .then(() => {
          this.$router.push({ name: 'index' })
        })
    },
    handleForm () {
      this.dialog = !this.dialog
    }
  }
}
</script>

<style lang="sass" scoped>

p
  margin: 0
  margin-bottom: 8px

.container
  display: flex
  padding: 0
  padding-top: 10px

.container > .content-left
  flex: 1
  align-items: start

.container > .content-left > #edit-button
  display: flex
  width: 100%
  justify-content: center

.container > .content-left > .text-subtitle
  margin-top: 15px

.container > .content-left > h1 > #icon-vip
  height: 25px
  margin-left: 20px

.container > .content-left > .content-right
  justify-content: flex-end
  align-items: flex-end

.container > .content-left > .content-right > .button-accept
  width: 50%

.container > .content-right
  flex: 3
  align-items: center
  margin-bottom: 60px

</style>
