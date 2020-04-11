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
  position: absolute
  bottom: 0
  width: 100%
  flex: 1
  background-color: $primary
  display: flex
  flex-direction: row
  justify-content: space-around
  align-items: center

footer > #supporters > p
  color: #fff

footer > #informations > p
  color: #fff
</style>
