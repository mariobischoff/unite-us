<template>
  <div>
    <div id="container">
      <div id="content-left">
        <h1>Encontre aqui sua equipe ideal!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisi lectus, malesuada cursus faucibus quis, suscipit vitae tortor. In sapien libero, dapibus at lorem nec, dignissim pharetra risus. Suspendisse urna nisi, egestas at dui quis, aliquam dapibus magna. Nulla risus nunc, ornare at bibendum vehicula, tristique eu ex. Morbi ac fermentum nisi. Duis nec iaculis ante, vulputate pretium elit. Proin quis nibh et risus tincidunt lacinia a vel tellus. Nunc ac ex non ligula sodales pharetra. Nulla in dapibus magna, vitae euismod odio. In dignissim pretium lectus, ut tristique mauris viverra sed.</p>
      </div>
      <div id="content-right">
        <img src="~/assets/images-content/equipe.jpg" alt="Imagem de equipe">
      </div>
    </div>
    <base-footer />
  </div>
</template>

<script>
import BaseFooter from '@/components/BaseFooter.vue'
export default {
  layout: 'BaseLayout',
  components: {
    BaseFooter
  }
}
</script>

<style lang="sass" scoped>
#container > #content-left
  flex: 2

#container > #content-right
  flex: 3
  justify-content: center
  align-items: center

#container > #content-right > img
  height: 400px
</style>
