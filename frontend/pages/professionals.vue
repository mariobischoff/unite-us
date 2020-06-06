<template>
  <div class="container" data-app>
    <div class="content-left">
      <h1 class="content-title">
        Profissinais
      </h1>
    </div>
    <div class="content-right">
      <content-card
        v-for="user in users"
        :key="user.id"
        class="card-content"
        type-contents="User"
        :contents="user"
      />
    </div>
  </div>
</template>

<script>
import ContentCard from '@/components/ContentCard.vue'
export default {
  layout: 'BaseLayout',
  components: {
    ContentCard
  },
  async asyncData ({ $axios }) {
    const users = await $axios.$get('/users')
    return { users }
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
