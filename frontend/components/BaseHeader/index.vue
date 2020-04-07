<template>
  <div>
    <nav class="navbar">
      <div class="logo">
        <img src="~/assets/logo-default.svg" alt="Logo Unite US">
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

        <nuxt-link
          v-for="authPath in auth"
          :key="authPath.path"
          exact-active-class="active-link"
          :to="authPath.path"
        >
          {{ authPath.name }}
        </nuxt-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
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
        { name: 'Cadastrar', path: '/signup' }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.navbar
  // background-color: $primary
  box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.75)
  display: flex
  height: 110px
  align-items: center

.links > a
  color: $primary
  text-decoration: none
  font-weight: bold
  font-size: 1.2em
  margin-right: 20px

.active-link
  color: black !important

.logo > img
  margin-left: 30px
  width: 100px
</style>
