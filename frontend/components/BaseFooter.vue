<template>
  <v-footer id="footer">
    <div id="supporters">
      <p>Apoiadores</p>
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
  justify-content: space-around
  align-items: center

p
  color: #fff
</style>
