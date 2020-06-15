<template>
  <div class="container">
    <div class="content-left">
      <h1 class="content-title white">
        SEJA VIP
      </h1>
      <h1 class="text-title white">
        Se tornando VIP você pode:
      </h1>
      <div class="box-content-line white">
        <ul class="">
          <li>Criar e gerenciar suas equipes;</li>
          <li>Encontrar colaboradores com nossa busca personalizada;</li>
          <li>Compartilhar seus objetivos com seus colaboradores;</li>
          <li>Alcançar o <b>SUCESSO</b>.</li>
        </ul>
      </div>
      <div class="box-content-solid">
        <span class="content-title">
          Tudo isso por apenas
        </span>
        <p class="content-title value">
          $50,00/mês
        </p>
      </div>
    </div>
    <div class="content-right">
      <card-form />
    </div>
  </div>
</template>

<script>
import CardForm from '@/components/Card/CardForm'
export default {
  components: {
    CardForm
  },
  layout: 'AuthLayout'
}
</script>

<style lang="sass">
.content-title
  font-size: 400%

.white
  color: #fff

.box-content-line
  border: solid 2px #fff
  padding: 30px
  border-radius: 20px

.box-content-solid
  margin-top: 30px
  background-color: #fff
  border-radius: 20px
  padding: 20px 2px 20px 2px

.box-content-solid > .content-title
  font-size: 300%

.value
  font-weight: bold
  text-align: right
  margin-right: 20px

li
  list-style-type: circle
  font-size: 150%

.container
  padding: 0

.card-form
  max-width: 80%
</style>
