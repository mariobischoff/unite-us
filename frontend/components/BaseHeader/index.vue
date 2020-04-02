<template>
  <div>
    <nav class="navbar">
      <div class="logo">
        <img src="~/assets/logo.svg" alt="Logo Unite US">
      </div>
      <div class="links">
        <nuxt-link
          v-for="(path, index) in paths"
          :key="index"
          :to="path.path"
        >
          {{ path.name }}
        </nuxt-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      paths: [
        { name: 'Home', path: '/' },
        { name: 'Equipes', path: '/' },
        { name: 'Profissionais', path: '/' },
        { name: 'Sobre', path: '/' },
        { name: 'Login', path: '/' },
        { name: 'Cadastrar', path: '/' }
      ]
    }
  }
}
</script>

<style scoped>
.navbar {
  background-color: #952597;
  display: flex;
  height: 120px;
  justify-content: space-between;
  align-items: center;
}

.links > a {
  text-decoration: none;
  color: whitesmoke;
  font-weight: bold;
  font-size: 1.8em;
  margin-right: 25px;
}

.logo > img {
  margin-left: 25px;
  width: 120px;
}
</style>
