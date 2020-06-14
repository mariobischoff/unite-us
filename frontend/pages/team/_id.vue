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
      <h1 class="content-title align-self-center">
        Equipe
      </h1>
      <content-card
        v-for="member in team.members"
        :key="member.id"
        class="card-content align-self-center"
        type-content="User"
        :content="member"
      />
      <button
        class="button-accept mt-2 font-weight-bold align-self-center"
        color="green"
        text
        @click="$router.push({ name: 'searchusers', params: { id: team._id } })"
      >
        Adicionar novo integrante
      </button>
    </div>
  </div>
</template>

<script>
import ContentCard from '@/components/ContentCard'
export default {
  layout: 'BaseLayout',
  // middleware: 'authenticated',
  components: {
    ContentCard
  },
  async asyncData ({ $axios, params }) {
    const team = await $axios.$get(`teams/${params.id}`)
    return { team }
  },
  computed: {
    idsMembers () {
      return this.team.members.map(element => element._id)
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
