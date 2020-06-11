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
        type-content="Team"
        :content="team"
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

<style lang="sass">
.layout-auth
  background-color: rgb(62, 153, 214)
  background: radial-gradient(circle, $primary 70%, rgba(149,37,130,1) 100%)
  display: flex
  justify-content: center
  align-items: center
  height: 100

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
