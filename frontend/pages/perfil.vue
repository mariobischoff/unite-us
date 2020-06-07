<template>
  <div class="container">
    <div class="content-left">
      <h1 class="text-title">
        {{ user.name }}
        <img v-if="user.vip === true" src="@/assets/icons/vip.svg" alt="vip" id="icon-vip">
      </h1>
      <p class="text-body">
        {{ user.email }}
      </p>
      <p class="text-body">
        {{ user.city }}
      </p>
      <h2 class="text-subtitle">
        Especialidade
      </h2>
      <p class="text-body">
        {{ user.expertise }}
      </p>
      <h2 class="text-subtitle">
        Disponibilidade
      </h2>
      <p class="text-body">
        {{ user.workAt }}
      </p>
      <h2 class="text-subtitle">
        Pretenção Salarial
      </h2>
      <p class="text-body">
        de
        <span class="text-markup">
          R${{ user.pretension[0] }}
        </span>
        a
        <span class="text-markup">
          R${{ user.pretension[1] }}
        </span>
      </p>
      <h2 class="text-subtitle">
        Última Formação Academica
      </h2>
      <p class="text-body">
        {{ user.lastGraduation }}
      </p>
      <h2 class="text-subtitle">
        Habilidades
      </h2>
      <p
        v-for="skill in user.skills"
        :key="skill.id"
        class="text-body"
      >
        {{ skill }}
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

.container > .content-left > h1 > #icon-vip
  height: 25px
  margin-left: 20px

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
