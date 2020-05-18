<template>
  <div>
    <span>{{ question.text }}</span>
    <v-slider
      v-model="question.value"
      :color="color"
      track-color="#952597"
      min="0"
      :max="max"
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
      if (this.answer > 9) { return 'red' }
      if (this.answer > 6) { return 'orange' }
      if (this.answer > 4) { return 'green' }
      if (this.answer > 2) { return 'primary' }
      return 'primary'
    }
  }
}
</script>

<style>
p {
  margin: 0px
}

</style>
