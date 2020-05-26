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
          v-model="team.objective"
          class="input-primary"
          label="Objetivo"
          type="text"
        />
        <v-text-field
          v-model="team.wayWork"
          class="input-primary"
          label="Forma de trabalho"
          type="text"
        />
      </div>
      <div class="buttons">
        <v-btn class="button-accept" text large @click="create()">
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
export default {
  layout: 'AuthLayout',
  data () {
    return {
      team: {
        name: '',
        objective: '',
        wayWork: ''
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
