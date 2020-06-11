<template>
  <div>
    <span class="text-body">{{ question.text }}</span>
    <v-slider
      v-model="question.value"
      :color="color"
      track-color="#cdd1ce"
      min="0"
      :max="max"
      height="70"
      :thumb-size="20"
      thumb-label="always"
    />
    <v-divider />
  </div>
</template>

<script>
export default {
  props: {
    max: {
      type: Number,
      default: 10
    },
    question: {
      type: Object,
      default: null
    }
  },
  computed: {
    color () {
      if (this.question.value >= 1 && this.question.value < 3) { return '#b4d1bb' }
      if (this.question.value >= 3 && this.question.value < 5) { return '#87c795' }
      if (this.question.value >= 5 && this.question.value < 7) { return '#52cc6c' }
      if (this.question.value >= 7 && this.question.value < 9) { return '#32cf54' }
      if (this.question.value >= 9 && this.question.value < 11) { return '#1cd443' }
      return '#cdd1ce'
    }
  }
}
</script>

<style lang="sass" scoped>

.v-divider
  margin: 0 30px 10px 30px

</style>
