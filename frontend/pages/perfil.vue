<template>
  <div class="container">
    <div class="content-left">
      <h1 class="text-title">
        {{ fullName }}
      </h1>
    </div>
    <div class="content-right">
      <belbin-test />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import ContentCard from '@/components/ContentCard.vue'
import BelbinTest from '@/components/BelbinTest'
export default {
  layout: 'BaseLayout',
  middleware: 'authenticated',
  components: {
    // ContentCard
    BelbinTest
  },
  computed: {
    ...mapGetters({
      fullName: 'user/fullName'
    })
  }
}
</script>

<style lang="sass" scoped>
.container > .content-left
  flex: 1

.container > .content-right
  flex: 3
  align-items: center
  margin-bottom: 60px
</style>
