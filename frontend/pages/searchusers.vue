<template>
  <div class="container">
    <div class="content-left">
      <h1 class="text-title">
        Buscar usuários
      </h1>
      <v-text-field
        v-model="search.expertise"
        class="input-primary"
        label="Especialidade"
        type="text"
      />
      <div class="content-right">
        <button class="button-accept" @click="searchUsers()">
          Buscar Usuário
        </button>
      </div>
    </div>
    <div class="content-right">
      <h1 class="content-title">
        Usuários Encontrados
      </h1>
      <content-card
        v-for="user in users"
        :key="user.id"
        class="card-content"
        type-content="User"
        :content="user"
      >
        <v-card :elevation="n-1">
          <v-btn
            color="#28D04D"
            dark
            medium
            absolute
            bottom
            right
            fab
            @click="addUser(user._id)"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-card>
      </content-card>
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
  asyncData ({ params }) {
    return JSON.parse(JSON.stringify(params))
  },
  data () {
    return {
      dialog: false,
      search: {
        expertise: 'Developer'
      },
      users: []
    }
  },
  methods: {
    async searchUsers () {
      this.users = []
      this.users = await this.$axios.$get('/users', {
        params: {
          expertise: this.search.expertise
        }
      })
    },
    async addUser (userId) {
      this.members.push(userId)
      await this.$axios.put(`/teams/${this.id}`, { members: this.members })
      this.members = []
    }
  }
}
</script>

<style lang="sass" scoped>

.container > .content-left
  flex: 1
  height: 50px

.container > .content-right
  flex: 2

</style>
