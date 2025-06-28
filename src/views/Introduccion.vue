<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-lg-8
        p Comprender el funcionamiento del mercado global puede marcar la diferencia entre el éxito y el fracaso de una empresa. El componente formativo “Análisis estratégico del mercado internacional” es una puerta de entrada al fascinante mundo del comercio global, donde las oportunidades se multiplican para quienes saben interpretar las señales del entorno.
        .row.p-3.bg-color-terciario-t5.rounded-3.align-items-center.mb-3
          .col-lg-2
            figure
              img(data-aos="fade-in")(src="../assets/curso/intro/1.svg" alt="Imagen decorativa")
          .col-lg-10
            p.mb-0 Este componente permitirá descubrir cómo las empresas logran posicionarse en otros países, adaptando sus estrategias para conquistar nuevos públicos. A través de ejemplos prácticos y herramientas clave, conocerá cómo analizar el mercado, identificar tendencias y tomar decisiones acertadas que respondan a los retos de un mundo cada vez más interconectado.
        p Estará preparado para observar el comercio desde una óptica global, con una visión estratégica y herramientas que le pondrán un paso adelante.

      .col-lg-4
        figure
          img(data-aos="fade-in")(src="../assets/curso/intro/2.svg" alt="Imagen decorativa")

    .video.mb-5
      <iframe width="560" height="315" src="https://www.youtube.com/embed/x7VjTivXHBk" title="Generalidades, ingredientes y aspectos higiénicos en la preparación de conservas" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
