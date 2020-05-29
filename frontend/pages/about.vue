<template>
  <div>
    <div class="container">
      <div class="content-left">
        <h1 class="text-title" style="text-align: left;">
          Sobre a UNITE US
        </h1>
        <p class="text-body" style="text-align: justify">
          O grande desafio das grandes e pequenas empresas é o de encontrar pessoas
          adequadas, tanto para desempenhar seus deveres da forma mais eficiente quanto
          para atingir um resultado da melhor maneira possível, com o menor desperdício de
          tempo, esforço e recursos. Para alcançar tais objetivos é necessário ter uma equipe
          que esteja qualificada e que possua um entrosamento fluido, o que possibilita uma
          maior facilidade na obtenção da eficiência e eficácia em seus resultados. É nesse
          cenário que a ideia de nosso projeto foi concebida, a fim de facilitar a criação de
          equipes de trabalho mais eficientes e eficazes possíveis, proporcionando assim uma
          melhor produtividade através de nosso método de afinidade.
        </p>
        <h1 class="text-title">
          Serviços
        </h1>
        <p class="text-body">
          <b>Talent Contact Acquisition:</b> O Talent Contact Acquisition é especialista em avaliar as necessidades de recrutamento de sua empresa, localizar os melhores profissionais de recrutamento, formar equipes de aquisição de talentos de alto desempenho e criar estratégias e processos de recrutamento eficazes.<br>Vamos posicionar sua organização para competir com sucesso por talentos de alto nível em um mercado hipercompetitivo.<br><b>&nbsp;&nbsp;&nbsp;Otimização de vaga: </b> Para empresas que os RHs não têm pessoas técnicas, sempre é interessante ter alguém próximo para auxiliar no levantamento de requisitos da vaga e na montagem do perfil do profissional. Com este serviço, pretendemos otimizar ao máximo o perfil da vaga para poder encontrar a pessoa certa para a empresa

        </p>
      </div>
      <div class="content-right">
        <img src="~/assets/logos/logo-default.svg" alt="Logo Unite US">
      </div>
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
  flex: 1
  justify-content: top
  align-items: flex-end
  padding: 5%

.container > .content-right > img
  height: 200px

</style>

<style >
  p{
    text-align: justify;
    text-indent: 30px;
  }
</style>
