<template>
  <footer>
    <div id="supporters">
      <p>Apoiadores</p>
    </div>
    <div id="informations">
      <p>informações</p>
    </div>
  </footer>
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>

footer
  margin-top: 100%
  position: absolute
  bottom: 0
  width: 100%
  flex: 1
  background-color: $primary
  display: flex
  flex-direction: row
  justify-content: space-around
  align-items: center

p
  color: #fff
</style>
