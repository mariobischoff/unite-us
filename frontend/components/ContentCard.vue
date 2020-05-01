<template>
  <div class="container">
    <div class="content-left">
      <img src="~/assets/pictures/photo.jpg" alt="image">
      <div>
        <h1>Name</h1>
        <p>Expertise</p>
      </div>
      </div>
      <div class="content-right">
        <div>
          <h1 class="content-title">
          Habilidades
        </h1>
        <ul class="text-body">
          <li>Photoshop</li>
          <li>Photoshop</li>
          <li>Photoshop</li>
          <li>Photoshop</li>
        </ul>
      </div>
      <div>
        <h1 class="content-title">
          Forma de Trabalho
        </h1>
        <p class="text-body">
          Home Office
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
  font-size: 150%

.container > .content-left > div > p
  font-size: 90%
  text-align: right

.container > .content-right
  flex: 2
  display: flex
  flex-direction: row
  justify-content: space-around
  padding-top: 2%

.container > .content-right > div > h1, p
  font-size: 100%

.container > .content-right > div > ul > li
  font-size: 100%
  list-style: none
</style>
