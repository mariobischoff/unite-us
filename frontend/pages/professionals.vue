<template>
  <div>
    <div id="container">
      <div id="content-left">
        <h1 class="content-title">Profissinais</h1>
      </div>
      <div id="content-right">
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
  flex: 1

#container > #content-right
  flex: 3
  justify-content: center
  align-items: center

</style>
