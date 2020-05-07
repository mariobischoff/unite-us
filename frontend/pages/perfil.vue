<template>
  <div class="container">
    <div class="content-left info">
      <h1 class="text-title">
        Nome
      </h1>
      <p>[email]</p>
      <p>[idade]</p>
      <p>[endereco]</p>
      <p>Especilidade</p>
      <p>[especialidade]</p>
      <p>Disponibilidade</p>
      <p>[disponibilidade]</p>
      <p>Pretenção Salarial</p>
      <p>[pretenção-salarial]</p>
      <p>Última Formação Academica</p>
      <p>[ultima-formacao-academica]</p>
      <p>Habildidades</p>
      <ul>
        <li>[habilidade]</li>
        <li>[habilidade]</li>
        <li>[habilidade]</li>
        <li>[habilidade]</li>
      </ul>
    </div>
    <div class="content-right">
      <h1 class="content-title">
        Equipes
      </h1>
      <content-card class="card-content" />
    </div>
  </div>
</template>

<script>
import ContentCard from '@/components/ContentCard.vue'
export default {
  layotut: 'BaseLayout',
  components: {
    ContentCard
  }
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
