<template>
  <div div="container" data-app>
    <v-card class="card" outlined width="500px">
      <div class="logo">
        <p class="text-title">
          Crie sua equipe na
        </p>
        <img src="~/assets/logos/logo-default.svg" alt="Logo Unite US">
      </div>
      <div class="inputs">
        <v-text-field
          v-model="team.name"
          class="input-primary"
          label="Nome da equipe"
          type="text"
        />
        <v-text-field
          v-model="team.goal"
          class="input-primary"
          label="Objetivo"
          type="text"
        />
        <v-select
          v-model="team.workAt"
          class="input-primary"
          label="Forma de trabalho"
          :items="workAtOptions"
        />
      </div>
      <div class="buttons">
        <v-btn class="button-accept" text large @click="postTeam">
          Cadastrar Equipe
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
      workAtOptions: [
        {
          text: 'Remoto',
          value: 'remoto'
        },
        {
          text: 'Local',
          value: 'local'
        },
        {
          text: 'Remoto e Local',
          value: 'remoto/local'
        }
      ],
      team: {
        name: '',
        goal: '',
        workAt: ''
      }
    }
  },
  methods: {
    ...mapActions({
      createTeam: 'team/createTeam'
    }),
    postTeam () {
      this.createTeam(this.team)
        .then(() => {
          this.$router.push({ name: 'perfil' })
        }).catch((error) => {
          this.$notify({
            text: error,
            type: error.type
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
