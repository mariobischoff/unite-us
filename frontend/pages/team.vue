<template>
  <div>
    <div class="container">
      <div class="content-left">
        <h1 class="content-title">
          Equipes
        </h1>
      </div>
      <div class="content-right" />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'BaseLayout'
}
</script>

<style lang="sass" scoped>
.container > .content-left
  flex: 1

.container > .content-right
  flex: 3
  justify-content: center
  align-items: center

</style>
