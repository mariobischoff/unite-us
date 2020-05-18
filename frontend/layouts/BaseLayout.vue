<template>
  <v-app>
    <base-header :signin="dialog" />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <base-footer />
  </v-app>
</template>

<script>
import BaseHeader from '@/components/BaseHeader.vue'
import BaseFooter from '@/components/BaseFooter.vue'
export default {
  name: 'BaseLayout',
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
