<template>
  <div>
    <div class="content-right">
      <h1 class="content-title">
        Equipes
      </h1>
    </div>
    <nuxt-link v-for="team in teams" :key="team._id" :to="{ name: 'team-id', params: { id: team._id }}" class="team-link">
      <content-card :content="team" class="card-content" />
    </nuxt-link>
  </div>
</template>

<script>
import ContentCard from '@/components/ContentCard'
export default {
  components: {
    ContentCard
  },
  data () {
    return {
      teams: []
    }
  },

  mounted () {
    this.$axios.$get('/teams/user')
      .then((data) => {
        this.teams = data
      })
  }
}
</script>

<style lang="sass" scoped>
.team-link
  text-decoration: none
</style>
