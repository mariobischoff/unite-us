<template>
  <div>
    <div class="container">
      <div class="content-left">
        <h1 class="text-title">
          Encontre aqui sua equipe ideal!
        </h1>
        <p class="text-body">
          O grande desafio das grandes e pequenas empresas é o de encontrar pessoas adequadas, tanto para desempenhar seus deveres da forma mais eficiente quanto para atingir seu objetivo da melhor maneira possível, com o menor desperdício de tempo, esforço e recursos. Para alcançar tais objetivos é necessário ter uma equipe que esteja qualificada e que possua um entrosamento fluido, o que possibilita uma maior facilidade na obtenção da eficácia em seus resultados. É nesse cenário que  a ideia de nosso projeto foi concebida, a fim de facilitar a criação de equipes de trabalho mais eficientes e eficazes possíveis, proporcionando assim uma melhor produtividade através de nosso método de afinidade. Aqui nos utilizamos do algoritimo de <a href="https://belbin.com" target="blank"> Belbin</a> para alcançar os melhores resultados.
        </p>
        <h1 class="text-body">
          <i>"Aqui nos pensamos por você e lhe entregamos os melhores resultados"</i>
        </h1>
        <br>
        <ul class="text-title">
          <li>Individualismo ?</li>
          <li>Frustração ?</li>
          <li>Falta de atenção da empresa ?</li>
          <li>Conflitos no trabalho em equipe ?</li>
        </ul>
        <h1 class="content-title">CHEGA DISSO !</h1>
        <p class="text-body">
          Todas as oportunidades listadas passaram por um processo de curadoria para garantir a melhor qualidade possível das vagas. Nossa parceria com as empresas é feita de maneira transparente e visando melhores oportunidades e condições aos desenvolvedores.
        </p>
      </div>
      <div class="content-right">
        <img src="~/assets/logos/logo-default.svg" alt="Logo Unite US">
      </div>
      <notifications position="top center" width="100%" />
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
  flex: 2

.container > .content-right
  flex: 3
  padding-left: 10px

.container > .content-right > img
  width: 50%

.text-title
  list-style-type: none
  text-transform: uppercase

.text-title > li
  font-size: 20px

</style>
