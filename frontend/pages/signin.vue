<template>
  <div div="container">
    <v-card class="auth-card" outlined @keypress.enter="authenticate">
      <div class="logo">
        <img src="~/assets/logos/logo-default.svg" alt="Logo Unite US">
      </div>
      <div class="inputs">
        <v-text-field
          v-model="user.email"
          class="input-primary"
          label="Email"
          type="email"
        />
        <v-text-field
          v-model="user.password"
          class="input-primary"
          label="Senha"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword ? 'text' : 'password'"
          @click:append="showPassword = !showPassword"
        />
      </div>
      <v-btn
        class="buttom-any"
        text
      >
        Esqueceu sua senha ?
      </v-btn>
      <div class="buttons">
        <v-btn class="button-accept" text large @click="authenticate">
          Entrar
        </v-btn>
        <v-btn class="button-any" text large to="/">
          Cancelar
        </v-btn>
      </div>
    </v-card>
    <notifications position="bottom" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  layout: 'AuthLayout',
  data () {
    return {
      showPassword: false,
      user: {
        email: 'bruxa.blair@test.com',
        password: '123456'
      }
    }
  },
  methods: {
    ...mapActions({
      login: 'user/login'
    }),
    authenticate () {
      this.login(this.user)
        .then(() => {
          this.$router.push({ name: 'perfil' })
        })
        .catch(() => {
          this.$notify({
            text: 'Email ou senha inválido!',
            type: 'error'
          })
        })
    }
  }
}
</script>

<style lang="sass" scoped>
.auth-card
  height: auto
  padding: 20px
  display: flex
  justify-content: center
  flex-direction: column

.auth-card > .logo
  display: flex
  justify-content: center

.auth-card > .logo > img
  width: 25%

.auth-card > .buttons
  display: flex
  justify-content: space-around

.auth-card > .buttom-any
  margin: 0 0 3px 0
  font-size: 10px

</style>
