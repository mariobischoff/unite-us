<template>
  <div class="container">
    <div class="content-left">
      <h1 class="text-title">
        Nome da equipe
      </h1>
      <span class="text-body">
        {{ team.name }}
      </span>
      <h2 class="text-subtitle">
        Objetivo da Equipe
      </h2>
      <span class="text-body">
        {{ team.goal }}
      </span>
      <h2 class="text-subtitle">
        Forma de Trabalho
      </h2>
      <span class="text-body">
        {{ team.workAt }}
      </span>
    </div>
    <div class="content-right">
      <h1 class="content-title">
        Equipe
      </h1>
      <content-card
        v-for="member in team.members"
        :key="member.id"
        class="card-content"
        type-content="User"
        :content="member"
      />
      <button
        class="button-accept mt-2 font-weight-bold"
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

.text-subtitle
  margin: 0

span
  margin: 5px 0 20px 0

.container > .content-left
  flex: 2

.container > .content-right
  flex: 3
  justify-content: flex-end
  align-items: flex-end

</style>
