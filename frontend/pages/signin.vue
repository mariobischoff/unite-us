<template>
  <div div="container">
    <v-card
      class="card"
      width="400"
      height="300"
      outlined
    >
      <v-card-title class="text-center">
        UNITE US
      </v-card-title>
      <v-text-field v-model="user.email" label="Email" />
      <v-text-field v-model="user.password" label="Senha" />
      <v-btn
        text
        color="primary"
        @click="authenticate"
      >
        Entrar
      </v-btn>
    </v-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  layout: 'AuthLayout',
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(['user/login']),
    authenticate () {
      this.$store.dispatch('user/login', this.user)
    }
  }
}
</script>

<style lang="sass" scoped>
.container
  height: 100%
.card
  padding: 20px
  display: flex
  justify-content: center
  flex-direction: column
.campo
  height: 30px
  border: solid 0.5px #555
  border-radius: 5px
</style>
