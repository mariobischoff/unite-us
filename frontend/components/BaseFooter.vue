<template>
  <v-footer id="footer">
    <div id="supporters">
      <img src="~/assets/logos/logo-fatece.png" alt="Fatece Logo" width="150px">
      <img src="~/assets/logos/logo-negative.svg" alt="UniteUs Logo" width="40px">
    </div>
    <div id="informations">
      <p>
        Copyright © 1999 - 2020 UniteUs Operating Company, LLC. Todos os direitos reservados.
      </p>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: 'BaseFooter'
}
</script>

<style lang="sass" scoped>

#footer
  width: 100%
  bottom: 0
  flex: 1
  background-color: $primary
  display: flex
  flex-direction: row
  justify-content: space-between
  align-items: center

#footer > #supporters
  display: flex
  align-items: center

#footer > #supporters > p
  margin: 0px

p
  color: #fff

</style>
