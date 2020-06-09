<template>
  <div class="container">
    <div class="content-left">
      <img src="~/assets/pictures/photo.jpg" alt="image">
      <div>
        <h1>{{ contents.name | capitalize }}</h1>
        <p v-if=" typeContents === 'User' ">
          {{ contents.expertise }}
        </p>
        <p v-else>
          {{ contents.numberMembers }}
        </p>
      </div>
    </div>
    <div class="content-right">
      <div v-if=" typeContents === 'User' ">
        <h1 class="content-title">
          Habilidades
        </h1>
        <ul class="text-body">
          <li
            v-for="skill in contents.skills"
            :key="skill"
          >
            {{ skill }}
          </li>
        </ul>
      </div>
      <div v-else>
        <h1 class="content-title">
          Objetivo
        </h1>
        <p class="text-body">
          {{ contents.goal }}
        </p>
      </div>
      <div>
        <h1 class="content-title">
          Forma de Trabalho
        </h1>
        <p class="text-body">
          {{ contents.workAt | capitalize }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  filters: {
    capitalize: (value) => {
      if (!value) { return '' }
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  props: {
    typeContents: {
      type: String,
      default: null
    },
    contents: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="sass" scoped>

.container > .content-left
  flex: 1
  background-color: $primary
  color: #fff
  border-radius: 0 0 0 40px

.container > .content-left > img
  width: 100%

.container > .content-left > div
  padding: 3%

.container > .content-left > div > h1
  font-size: 20px

.container > .content-left > div > p
  font-size: 90%
  text-align: right

.container > .content-right
  flex: 2
  display: flex
  flex-direction: row
  align-items: flex-start
  justify-content: space-around
  padding-top: 2%

.container > .content-right > div > h1, p
  font-size: 100%

.container > .content-right > div > ul > li
  padding-left: 8px
  font-size: 100%
  border-radius: 6px
  border-left: solid 2px $primary
  list-style: none
  margin-bottom: 4px
</style>
