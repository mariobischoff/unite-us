<template>
  <div class="container">
    <div class="content-left">
      <h1 class="text-title">
        Nome da equipe
      </h1>
      <p class="text-body">
        {{ team.name }}
      </p>
      <h2 class="text-subtitle">
        Objetivo da Equipe
      </h2>
      <p class="text-body">
        {{ team.goal }}
      </p>
      <h2 class="text-subtitle">
        Forma de Trabalho
      </h2>
      <p class="text-body">
        {{ team.workAt }}
      </p>
    </div>
    <div class="content-right">
      <h1 class="content-title">
        Equipe
      </h1>
      {{ team }}
      <content-card v-for="member in members" :key="member._id" class="card-content" :content="member" />
    </div>
  </div>
</template>

<script>
// import ContentCard from '@/components/ContentCard'
export default {
  layout: 'BaseLayout',
  // middleware: 'authenticated',
  components: {
    // ContentCard
  },
  async asyncData ({ $axios, params }) {
    const team = await $axios.$get(`teams/${params.id}`)
    return {
      team
    }
  }
}
</script>

<style lang="sass" scoped>

.container > .content-left
  flex: 2

.container > .content-right
  flex: 3

</style>
