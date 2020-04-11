<template>
  <div>
    <div id="container">
      <div id="content-left">
        <h1 class="text-title">Sobre a UNITE US</h1>
        <p class="text-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac varius nisi. Phasellus dapibus sed eros a rhoncus. Pellentesque convallis at lectus vel lobortis. Nulla commodo vestibulum urna. Donec dapibus turpis massa, id molestie massa tristique eu. Curabitur ex mi, consequat quis suscipit at, iaculis vel elit.<br>Atualmente, atuamos muito próximos a comunidade Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac varius nisi. Phasellus dapibus sed eros a rhoncus. Pellentesque convallis at lectus vel lobortis. Nulla commodo vestibulum urna.</p>
        <h1 class="text-title">Serviços</h1>
        <p class="text-body">Talent Contact Acquisition: Etiam vel congue magna, in sodales augue. Quisque eget convallis metus. Praesent ornare nisl sit amet malesuada dictum. Maecenas eget interdum felis, quis sagittis diam. Quisque ultrices nunc mauris, a vestibulum est egestas sed.</p>
      </div>
      <div id="content-right">
        <img src="~/assets/logos/logo-default.svg" alt="Logo Unite US">
      </div>
    </div>
    <base-footer />
  </div>
</template>

<script>
import BaseFooter from '@/components/BaseFooter.vue'
export default {
  layout: 'BaseLayout',
  components: {
    BaseFooter
  }
}
</script>

<style lang="sass" scoped>
#container > #content-left
  flex: 2

#container > #content-right
  flex: 1
  justify-content: top
  align-items: flex-end
  padding: 5%

#container > #content-right > img
  height: 200px
</style>
