<template>
  <div>
    <base-header :signin="dialog" />
    <nuxt />
  </div>
</template>

<script>
import BaseHeader from '@/components/BaseHeader.vue'

export default {
  components: {
    BaseHeader
  },
  data () {
    return {
      dialog: false
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
