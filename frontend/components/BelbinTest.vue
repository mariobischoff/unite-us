<template>
  <v-card width="700px">
    <v-window v-model="step">
      <v-window-item :value="0">
        <question
          v-for="(question, index) in questionsByGroup"
          :key="question.text"
          :question="questionsByGroup[index]"
          :max="maxValue(question.id)"
        />
      </v-window-item>

      <v-window-item :value="1">
        <question
          v-for="(question, index) in questionsByGroup"
          :key="question.text"
          :question="questionsByGroup[index]"
          :max="maxValue(question.id)"
        />
      </v-window-item>
    </v-window>
    <v-card-actions>
      <v-btn
        :disabled="step === 0"
        text
        @click="step--"
      >
        Voltar
      </v-btn>
      <v-spacer />
      <v-btn
        v-show="step !== 1"
        color="primary"
        depressed
        @click="step++"
      >
        Proximo
      </v-btn>
      <v-btn
        v-show="step === 1"
        color="primary"
        depressed
        @click="submitAnswers"
      >
        Enviar Teste
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import Question from '@/components/Question'
export default {
  components: { Question },
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
      await this.$axios.post('users/belbin/', answers)
    }
  }
}
</script>

<style lang="sass" scoped>
.v-card
  padding: 50px
</style>
