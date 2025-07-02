<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Mezcla de mercadeo

    .row.bg-color-secundario-s10.align-items-center.justify-content-center.avion-decorativo.p-4.p-md-2.p-xl-0
      .col-lg-7.offset-lg-1
        p.mb-4.mb-lg-0 En el proceso de posicionar productos o servicios en un mercado competitivo, las organizaciones requieren herramientas estratégicas que les permitan conectar con sus clientes de forma efectiva. La mezcla de mercadeo surge como un modelo clave para estructurar esas acciones, integrando variables que influyen directamente en la percepción del consumidor y en su decisión de compra. Comprender este enfoque es fundamental para quienes desean diseñar propuestas de valor coherentes, adaptadas al mercado y orientadas a resultados sostenibles.

      .col-10.col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-up")(src="@/assets/curso/temas/tema2/1.png" alt="Imagen decorativa")

    Separador

    .fullwidth-bg.fullwidth-bg--3
    #t_2_1(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 2.1	Concepto

    .row.justify-content-center.align-items-center.z-2
      .col-lg-8.mb-4.mb-lg-0
        p La mezcla de mercadeo, o <em>marketing mix</em>, se refiere al conjunto de estrategias y acciones tácticas que una organización utiliza para posicionar su oferta en el mercado y alcanzar sus objetivos comerciales. Este enfoque integra cuatro variables clave, conocidas como las 4 P: producto, precio, plaza (distribución) y promoción. 
        .cajon.color-primario-p5.p-4(data-aos="fade-left")
          p.mb-0 En un entorno empresarial cada vez más dinámico, aplicar correctamente estas variables permite a las empresas conectar de manera efectiva con sus clientes, responder a las tendencias del mercado y construir relaciones duraderas. La mezcla de mercadeo es, por tanto, una herramienta esencial para diseñar propuestas de valor atractivas, mejorar la toma de decisiones comerciales y lograr una ventaja competitiva sostenible.
      .col-10.col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-up")(src="@/assets/curso/temas/tema2/3.png" alt="Imagen decorativa")
    
    Separador

    #t_2_2(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 2.2	Elementos

    .row.justify-content-center.align-items-center.z-2
      .col-10.col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-up")(src='@/assets/curso/temas/tema2/4.png', alt='Imagen decorativa')
      .col-lg-8
        p Para comprender cómo las empresas logran conectar con sus clientes y destacar en el mercado, es necesario analizar los componentes fundamentales de la mezcla de mercadeo. Estos conforman el eje central de cualquier estrategia comercial, ya que permiten diseñar ofertas atractivas y alineadas con las expectativas del consumidor.
        p Una estrategia comercial efectiva no solo depende de tener un buen producto, sino de cómo se integran y articulan todos los elementos que lo rodean. Las 4 P (producto, precio, plaza y promoción) constituyen el núcleo táctico de la mezcla de mercadeo. Analizar cada uno de estos componentes permite a las organizaciones construir propuestas de valor coherentes, adaptadas a las necesidades del mercado y capaces de generar una ventaja competitiva. Comprender cómo interactúan entre sí es clave para diseñar acciones que conecten con los consumidores de manera efectiva y sostenible.

</template>

<script>
export default {
  name: 'Tema2',
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
