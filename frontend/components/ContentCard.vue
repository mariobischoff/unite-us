<template>
  <div class="container">
    <div class="content-left">
      <img src="~/assets/pictures/photo.jpg" alt="image">
      <div>
        <h1 class="text-capitalize">
          {{ content.name }}
        </h1>
        <p v-if=" typeContent === 'User' ">
          {{ content.expertise }}
        </p>
        <p v-else>
          {{ content.members.length }}
        </p>
      </div>
    </div>
    <div class="content-right">
      <div v-if=" typeContent === 'User' ">
        <h1 class="content-title">
          Habilidades
        </h1>
        <ul class="text-body">
          <li
            v-for="skill in content.skills"
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
          {{ content.goal }}
        </p>
      </div>
      <div>
        <h1 class="content-title">
          Forma de Trabalho
        </h1>
        <p class="text-body text-capitalize">
          {{ content.workAt }}
        </p>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    typeContent: {
      type: String,
      default: null
    },
    content: {
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

.container > .content-right > div > ul
  align-items: left

.container > .content-right > div > ul > li
  padding-left: 8px
  font-size: 75%
  border-radius: 6px
  border-left: solid 2px $primary
  list-style: none
  margin-bottom: 4px
</style>
