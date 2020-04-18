<template>
  <div>
    <base-header :signin="dialog" />
    <nuxt />
    <base-footer />
  </div>
</template>

<script>
import BaseHeader from '@/components/BaseHeader.vue'
import BaseFooter from '@/components/BaseFooter.vue'
export default {
  components: {
    BaseHeader,
    BaseFooter
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
