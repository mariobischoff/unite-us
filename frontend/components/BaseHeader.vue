<template>
  <div>
    <nav class="navbar">
      <div class="logo">
        <img src="~/assets/logos/logo-negative.svg" alt="Logo Unite US">
      </div>
      <div class="links">
        <nuxt-link
          v-for="(path, index) in paths"
          :key="index"
          exact-active-class="active-link"
          :to="path.path"
        >
          {{ path.name }}
        </nuxt-link>

        <template v-if="!user">
          <nuxt-link
            v-for="authPath in auth"
            :key="authPath.path"
            exact-active-class="active-link"
            :to="authPath.path"
          >
            {{ authPath.name }}
          </nuxt-link>
        </template>
        <template v-else>
          <nuxt-link
            to="/perfil"
            exact-active-class="active-link"
          >
            Perfil
          </nuxt-link>
          <nuxt-link
            to="/signupteam"
            exact-active-class="active-link"
          >
            Cadastrar Equipe
          </nuxt-link>
          <a href="#" @click="handleLogout()">
            Sair
          </a>
        </template>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'BaseHeader',
  data () {
    return {
      paths: [
        { name: 'Home', path: '/' },
        { name: 'Equipes', path: '/team' },
        { name: 'Profissionais', path: '/professionals' },
        { name: 'Sobre', path: '/about' }
      ],
      auth: [
        { name: 'Login', path: '/signin' },
        { name: 'Cadastrar-se', path: '/signup' }
      ]
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
    }
  }
}
</script>

<style lang="sass" scoped>
.navbar
  height: 100px
  background-color: $primary
  display: flex
  flex-direction: row
  align-items: center

.navbar > .logo
  flex: 1

.navbar > .logo > img
  margin-left: 30px
  width: 100px

.navbar > .links > a
  flex: 3
  color: $secondary
  text-decoration: none
  font-weight: bold
  font-size: 1.2em
  margin-right: 20px

.navbar > .links > span
  color: $secondary
  text-decoration: none
  font-weight: bold
  font-size: 1.2em
  margion-right: 30px

.active-link
  color: $accent !important
</style>
