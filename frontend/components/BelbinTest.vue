<template>
  <v-card width="700px">
    <v-window v-model="step">
      <h1 class="content-title">
        Teste de análise de perfil
      </h1>
      <b class="text-body">
        Distribua <span class="content-title">{{ maxValue() }}</span> pontos nas peguntas
      </b>
      <v-divider />
      <v-window-item
        v-for="i in 6"
        :key="i"
        :value="i"
      >
        <question
          v-for="(question, index) in questionsByGroup"
          :key="question.text"
          :question="questionsByGroup[index]"
          :max="maxValue(question.id)"
        />
      </v-window-item>
    </v-window>
    <v-card-actions>
      <button
        class="button-any"
        :disabled="step === 0"
        text
        @click="step--"
      >
        Voltar
      </button>
      <v-spacer />
      <button
        v-if="step === 6"
        v-show="step === 6"
        class="button-accept"
        color="primary"
        depressed
        @click="submitAnswers"
      >
        Enviar Teste
      </button>
      <button
        v-else
        :disabled="maxValue() !== 0"
        exact
        :style="maxValue() !== 0 ? 'background-color: #CCC' : ''"
        class="button-accept"
        depressed
        @click="step++"
      >
        Próximo
      </button>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'
import Question from '@/components/Question'
export default {
  components: { Question },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      step: 0,
      questions: []
    }
  },
  computed: {
    questionsByGroup () {
      return this.questions.slice(this.step * 10, (this.step * 10) + 10)
    },
    maxValue () {
      return id => 10 - this.questionsByGroup
        .filter(question => question.id !== id)
        .reduce((total, value) => total + value.value, 0)
    }
  },
  mounted () {
    this.fetchQuestions()
  },
  methods: {
    ...mapActions({
      fetchUser: 'user/fetch'
    }),
    async fetchQuestions () {
      const questions = await this.$axios.$get('/questions')
      this.questions = questions.map(function (question) {
        return {
          id: question._id,
          text: question.text,
          group: question.group,
          value: 0
        }
      })
    },
    async submitAnswers () {
      const answers = this.questions.map(function (question) {
        return {
          group: question.group,
          value: question.value
        }
      })
      await this.$axios.put(`users/${this.id}`, { answers })
        .then(() => {
          this.fetchUser(this.id)
        })
    }
  }
}
</script>

<style lang="sass" scoped>

.v-card
  padding: 50px

.text-body > .content-title
  font-size: 20px

.v-divider
  margin: 10px 30px 10px 30px

.button-disabled
  background-color: #CCC

</style>
