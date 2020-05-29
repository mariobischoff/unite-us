<template>
  <div class="layout-auth">
    <nuxt />
  </div>
</template>

<script>
export default {
  name: 'AuthLayout'
}
</script>

<style lang="sass">
.layout-auth
  background: rgb(62, 153, 214)
  background: radial-gradient(circle, $primary 70%, rgba(149,37,130,1) 100%)
  display: flex
  justify-content: center
  align-items: center
  height: 100vh
</style>
