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
        <v-card>
          <v-btn
            color="#28D04D"
            dark
            medium
            absolute
            bottom
            right
            fab
            depressed
            @click="() => {
              targetUser = user
              showDialog()
            }"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-card>
      </content-card>
    </div>
    <v-dialog
      v-model="dialog.show"
      max-width="300"
    >
      <v-card>
        <v-card-title class="content-title">
          {{ dialog.text }}
        </v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="green darken-1"
            text
            @click="dialog.show = false"
          >
            Cancelar
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="addUser(targetUser._id)"
          >
            Aceitar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
    const id = params.id
    const members = params.members
    const teamName = params.teamName
    return { id, members, teamName }
  },
  data () {
    return {
      dialog: {
        show: false,
        text: ''
      },
      search: {
        expertise: 'Developer'
      },
      users: [],
      targetUser: null
    }
  },
  methods: {
    showDialog () {
      this.dialog.text = `Quer adicionar ${this.targetUser.name} na equipe ${this.teamName} ?`
      this.dialog.show = true
    },
    async searchUsers () {
      this.users = []
      this.users = await this.$axios.$get(`/users/best/${this.id}`, {
        params: {
          expertise: this.search.expertise
        }
      })
    },
    async addUser (userId) {
      try {
        const same = this.members.includes(userId)
        if (!same) {
          await this.$axios.put(`/teams/${this.id}`, { members: this.members.push(userId) })
          this.users = []
          this.dialog.show = false
        }
      } catch (error) {
        alert(error)
      }
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
