<template>
  <div class="container">
    <div class="content-left">
      <p class="title">
        Nome Completo
      </p>
      <p class="body-1">
        {{ user.fullName }}
      </p>
      <p class="body-1">
        {{ user.email }}
      </p>
      <p class="body-1">
        {{ user.city }}
      </p>
      <h2 class="text-subtitle">
        Especialidade
      </h2>
      <p class="text-body">
        especialidade
      </p>
      <h2 class="text-subtitle">
        Disponibilidade
      </h2>
      <p class="text-body">
        disponibilidade
      </p>
      <h2 class="text-subtitle">
        Pretenção Salarial
      </h2>
      <p class="text-body">
        pret. salarial
      </p>
      <h2 class="text-subtitle">
        Última Formação Academica
      </h2>
      <p class="text-body">
        formação academica
      </p>
      <h2 class="text-subtitle">
        Habilidades
      </h2>
      <p class="text-body">
        habilidades 1
      </p>
      <p class="text-body">
        habilidades 2
      </p>
      <p class="text-body">
        habilidades 3
      </p>
      <p class="text-body">
        habilidades 4
      </p>
      <p class="text-body">
        habilidades 5
      </p>
      <div class="content-right">
        <button class="button-accept">
          Alterar Perfil
        </button>
      </div>
    </div>
    <div class="content-right">
      <belbin-test v-if="!user.belbinTest" />
      <div>
        {{ user.belbinTest }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BelbinTest from '@/components/BelbinTest'
export default {
  layout: 'BaseLayout',
  // middleware: 'authenticated',
  components: {
    BelbinTest
  },
  computed: {
    ...mapGetters({
      user: 'user/getUser'
    })
  }
}
</script>

<style lang="sass" scoped>

p
  margin: 0
  margin-bottom: 8px

.container
  display: flex
  padding: 0
  padding-top: 10px

.container > .content-left
  flex: 1

.container > .content-left > .content-right
  justify-content: flex-end
  align-items: flex-end

.container > .content-left > .content-right > .button-accept
  width: 50%

.container > .content-right
  flex: 3
  align-items: center
  margin-bottom: 60px

</style>
