<template>
  <div class="container">
    <div class="content-left">
      <h1 class="text-title">
        Nome da equipe
      </h1>
      <h2 class="text-subtitle">
        Objetivo da Equipe
      </h2>
      <p class="text-body">
        Lorem ipsum cras quisque leo class auctor ornare platea proin viverra tempus, fringilla interdum id sapien gravida nunc enim pellentesque rutrum etiam, nostra habitasse consequat ad metus nunc aliquam sem sollicitudin odio. nullam est ut dolor varius porta pellentesque bibendum dui, dictumst platea fermentum justo donec primis viverra mi, enim rutrum accumsan hendrerit blandit sem quisque. auctor ultrices imperdiet nibh pretium vivamus integer praesent tristique et, taciti blandit porttitor taciti libero feugiat aliquam consequat, feugiat sagittis netus inceptos etiam mauris faucibus et. suspendisse enim volutpat nulla fermentum pulvinar bibendum, leo feugiat vestibulum vel quis fermentum, inceptos vestibulum ad hac porta.
      </p>
      <h2 class="text-subtitle">
        Forma de Trabalho
      </h2>
      <p class="text-body">
        Lorem ipsum cras quisque leo
      </p>
    </div>
    <div class="content-right">
      <h1 class="content-title">
        Equipe
      </h1>
      <content-card class="card-content" />
    </div>
  </div>
</template>

<script>
import ContentCard from '@/components/ContentCard'
export default {
  layout: 'BaseLayout',
  middleware: 'authenticated',
  components: {
    ContentCard
  }
}
</script>

<style lang="sass" scoped>

.container > .content-left
  flex: 2

.container > .content-right
  flex: 3

</style>
