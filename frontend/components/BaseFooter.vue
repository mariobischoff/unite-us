<template>
  <v-footer id="footer">
    <div id="supporters">
      <p>Apoiadores</p>
      <img src="~/assets/logos/logo-fatece.png" alt="Fatece Logo" width="200px">
    </div>
    <div id="informations">
      <p>informações</p>
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
  position: fixed
  width: 100%
  bottom: 0
  flex: 1
  background-color: $primary
  display: flex
  flex-direction: row
  justify-content: space-between
  align-items: center
  #supporters
    display: flex
    align-items: center
    p
      margin: 0px

p
  color: #fff
</style>
