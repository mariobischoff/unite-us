<template>
  <div div="container" data-app>
    <v-card class="card" outlined width="700px">
      <div class="logo">
        <p class="text-title">
          Bem vindo a
        </p>
        <img src="~/assets/logos/logo-default.svg" alt="Logo Unite US">
      </div>
      <div class="container">
        <div class="content-left inputs">
          <v-text-field
            v-model="user.fullName"
            class="input-primary"
            label="Nome completo"
            type="text"
          />
          <v-dialog
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
          </v-dialog>
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
        <div class="inputs">
          <v-select
            :items="selectAvailability"
            label="Disponibilidade"
          />
          <v-select
            v-model="user.expertise"
            :items="selectExperise"
            label="Especialidade"
            required
          />
          <v-select
            v-model="user.graduation"
            :items="selectGraduation"
            label="Formação academica"
            required
          />
          <v-select
            v-model="user.skills"
            :items="selectSkills"
            label="Habilidades"
            required
          />
        </div>
      </div>
      <div class="buttons">
        <v-btn class="buttom-accept" text large>
          Cadastrar
        </v-btn>
        <v-btn class="buttom-any" text large to="/">
          Cancelar
        </v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  layout: 'AuthLayout',
  data () {
    return {
      showPassword: false,
      selectAvailability: [
        'Home Office',
        'Presencial',
        'Misto'
      ],
      selectExperise: [
        'Design',
        'Desenvolvedor',
        'Administrador'
      ],
      selectGraduation: [
        'Tecnólogo',
        'Bacharel',
        'Licenciatura',
        'Mestrado',
        'Doutorado',
        'MBA'
      ],
      selectSkills: [
        'Photoshop',
        'VSCode',
        'HTML',
        'Illustrator'
      ],
      date: new Date().toISOString().substr(0, 10),
      displayDialog: false,
      user: {
        fullName: '',
        birthOfDay: '',
        email: '',
        password: '',
        repassword: '',
        availability: '',
        expertise: '',
        graduation: '',
        skills: []
      }
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

.card > .container
  max-width: 80%

.card > .container > .inputs
  padding: 0 20px
  max-width: 50%

.card > .buttons
  display: flex
  justify-content: space-around

.card > .buttons > .buttom-any
  font-size: 15px
</style>
