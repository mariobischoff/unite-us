<template>
  <div>
    LISTA DE TIMES
    <nuxt-link v-for="team in teams" :key="team._id" to="visualizeteam">
      <content-card :content="team" />
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

<style>

</style>
