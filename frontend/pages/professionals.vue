<template>
  <div class="container" data-app>
    <div class="content-left">
      <h1 class="content-title">
        Profissinais
      </h1>
    </div>
    <div class="content-right">
      <content-card class="card-content" />
    </div>
  </div>
</template>

<script>
import ContentCard from '@/components/ContentCard.vue'
export default {
  layout: 'BaseLayout',
  components: {
    ContentCard
  }
}
</script>

<style lang="sass" scoped>
.container > .content-left
  flex: 1

.container > .content-right
  flex: 3
  justify-content: center
  align-items: center

</style>
