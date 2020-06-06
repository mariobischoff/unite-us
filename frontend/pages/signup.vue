<template>
  <div div="container" data-app>
    <v-card class="card" outlined width="500px">
      <div class="logo">
        <p class="text-title">
          Bem vindo a
        </p>
        <img src="~/assets/logos/logo-default.svg" alt="Logo Unite US">
      </div>
      <div class="inputs">
        <v-text-field
          v-model="user.name"
          class="input-primary"
          label="Nome completo"
          type="text"
        />
        <!-- <v-dialog
          ref="dialog"
          v-model="displayDialog"
          :return-value.sync="user.birthOfDay"
          persistent
          width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="user.birthOfDay"
              class="input-primary"
              label="Data de nascimento"
              readonly
              v-on="on"
            />
          </template>
          <v-date-picker v-model="user.birthOfDay" scrollable color="#952597">
            <v-spacer />
            <v-btn text color="#952597" @click="displayDialog = false">
              Cancel
            </v-btn>
            <v-btn text color="#952597" @click="$refs.dialog.save(date)">
              OK
            </v-btn>
          </v-date-picker>
        </v-dialog> -->
        <v-text-field
          v-model="user.email"
          class="input-primary"
          label="E-mail"
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
        <v-text-field
          v-model="user.repassword"
          class="input-primary"
          label="Confirmação de senha"
          :type="showPassword ? 'text' : 'password'"
        />
      </div>
      <div class="buttons">
        <v-btn class="button-accept" text large @click="create()">
          Cadastrar
        </v-btn>
        <v-btn class="button-any" text large to="/">
          Cancelar
        </v-btn>
      </div>
    </v-card>
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
        name: '',
        email: '',
        password: '',
        repassword: ''
      }
    }
  },
  methods: {
    ...mapActions({
      register: 'user/register'
    }),
    create () {
      this.register(this.user)
        .then(() => {
          this.$router.push({ name: 'signin' })
        })
        .catch((error) => {
          this.$notify({
            text: `Erro no cadastro!\nERROR: ${error}`,
            type: 'error'
          })
        })
    }
  }
}
</script>

<style lang="sass" scoped>
.card
  height: auto
  padding: 10px 20px
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column

.card > .logo
  display: flex
  justify-content: center
  align-items: center

.card > .logo > .text-title
  color: $primary
  padding: 0 10px

.card > .logo > img
  width: 25%

.card > .inputs
  width: 370px

.card > .buttons
  width: 370px
  display: flex
  justify-content: space-around

.card > .buttons > .buttom-any
  font-size: 15px
</style>
