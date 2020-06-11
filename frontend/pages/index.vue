<template>
  <div>
    <div class="container">
      <div class="content-left">
        <h1 class="text-title">
          Encontre aqui sua equipe ideal!
        </h1>
        <p class="text-body">
          O grande desafio das grandes e pequenas empresas é o de encontrar pessoas adequadas, tanto para desempenhar seus deveres da forma mais eficiente quanto para atingir um resultado da melhor maneira possível, com o menor desperdício de tempo, esforço e recursos. Para alcançar tais objetivos é necessário ter uma equipe que esteja qualificada e que possua um entrosamento fluido, o que possibilita uma maior facilidade na obtenção da eficiência e eficácia em seus resultados. É nesse cenário que  a ideia de nosso projeto foi concebida, a fim de facilitar a criação de equipes de trabalho mais eficientes e eficazes possíveis, proporcionando assim uma melhor produtividade através de nosso método de afinidade. Aqui nos utilizamos do algoritimo de <a href="https://belbin.com" target="blank"> Belbin</a> para alcançar os melhores desejados.

        </p>
        <br>
          <h1 id="text-body2">Aqui nos pensamos por você e lhe entregamos os melhores resultados!</h1>
        <br>
        <p><b> CHEGA DISSO!</b></p>
        <ul>
          <li><b>Individualismo</b></li>
          <li><b>Frustração</b></li>
          <li><b>Falta de atenção da empresa</b></li>
          <li><b>Conflitos no trabalho em equipe</b></li>
        </ul>
        <br>
          <p class="text-body">
            Conheça as melhores oportunidades! Todas as oportunidades listadas passaram por um processo de curadoria para garantir a melhor qualidade possível das vagas. Nossa parceria com as empresas é feita de maneira transparente e visando melhores oportunidades e condições aos desenvolvedores.
          </p>
      </div>
      <div class="content-right">
        <img src="~/assets/logos/logo-default.svg" alt="Logo Unite US">
        <br>
        <br>
        <br>
        <img src="~/assets/images-content/equipe.jpg" alt="Imagem de equipe">
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

<style lang="sass">
.container > .content-left
  flex: 2
  width: 800px
  background-color: #ffffff
  margin: 0px auto 0px auto
  box-shadow: 0px 0px 10px rgba(0, 0, 0, .5)
  padding: 10px 10px 10px 10px

.container > .content-right
  flex: 3
  justify-content: center
  align-items: center

.container > .content-right > img
  height: 400px
  background-color: #ffffff
  margin: 0px auto 0px auto
  box-shadow: 0px 0px 10px rgba(0, 0, 0, .5)
  padding: 10px 10px 10px 10px

ul
  list-style-type: none
  text-transform: uppercase
  color: #2F4F4F

h1
  background-color: #DCDCDC
  margin: 0px auto 0px auto
  box-shadow: 0px 0px 10px rgba(0, 0, 0, .5)
  padding: 10px 10px 10px 10px

</style>
