<template>
  <div class="container">
    <div class="content-left">
      <h1 class="text-title">
        Buscar usuários
      </h1>
      <v-text-field
        class="input-primary"
        label="Especialidade"
        type="text"
      />
      <div class="content-right">
        <button class="button-accept">
          Buscar Usuário
        </button>
      </div>
    </div>
    <div class="content-right">
      <h1 class="content-title">
        Usuários Encontrados
      </h1>
      <content-card class="card-content" />
      <content-card class="card-content" />
      <content-card class="card-content" />
      <content-card class="card-content" />
    </div>
  </div>
</template>

<script>
import ContentCard from '@/components/ContentCard.vue'
export default {
  layout: 'BaseLayout',
  components: {
    ContentCard
  },
  data () {
    return {
      search: {
        expertise: null
      }
    }
  }
}
</script>

<style lang="sass" scoped>

.container > .content-left
  flex: 1
  height: 50px

.container > .content-right
  flex: 2

</style>
