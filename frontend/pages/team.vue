<template>
  <div class="container" data-app>
    <div class="content-left">
      <h1 class="content-title">
        Equipes
      </h1>
    </div>
    <div class="content-right">
      <content-card
        v-for="team in teams"
        :key="team.id"
        class="card-content"
        type-contents="Team"
        :contents="team"
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
    const teams = await $axios.$get('/teams')
    return { teams }
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

.card
  box-shadow: 5px 10px #C3C3C3aa
  width: 600px
  height: 200px
  border-radius: 0 0 0 40px
  padding: 0

</style>
