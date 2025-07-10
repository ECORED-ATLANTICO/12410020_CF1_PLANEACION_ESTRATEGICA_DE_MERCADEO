<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Mercado

    .row.justify-content-center.align-items-center
      .col-lg-5
        figure
          img.mb-4.mb-lg-0(data-aos="fade-up")(src="@/assets/curso/temas/tema1/1.png" alt="Imagen decorativa")
      .col-lg-7
        p.mb-4.mb-lg-0 En el contexto de la planeación estratégica del mercadeo internacional, comprender qué es el mercado y cómo se clasifica es fundamental para tomar decisiones informadas y diseñar estrategias comerciales exitosas. El mercado constituye el punto de partida para cualquier análisis de oportunidades y riesgos, pues en él convergen tanto las necesidades del consumidor como las acciones de la competencia. Esta sección proporciona una base conceptual que permitirá al aprendiz entender las dinámicas del mercado, sus componentes y su papel en el desarrollo de estrategias de internacionalización.

    Separador

    #t_1_1(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 1.1	Concepto

    .row.justify-content-center.align-items-center
      .col-10.col-sm-8.col-lg-3
        figure
          img.mb-4.mb-lg-0(data-aos="fade-up")(src="@/assets/curso/temas/tema1/2.png" alt="Imagen decorativa")
      .col-lg-9
        p.mb-4.mb-lg-0 El mercado es un espacio físico o virtual donde se desarrollan las interacciones entre compradores y vendedores, con el fin de intercambiar bienes, servicios o información. Para que un mercado exista, es indispensable que haya una necesidad, personas que deseen satisfacerla, y productos o servicios que respondan a dicha necesidad (Kotler & Armstrong, 2018). En un entorno competitivo, el conocimiento profundo del mercado permite a las organizaciones diseñar estrategias efectivas, anticiparse a los cambios en el comportamiento del consumidor y generar valor sostenible.
        .bloque-texto-b.color-terciario-t5.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-0 Según Chiavenato (2006), el mercado constituye una de las principales fuerzas externas que influyen en la administración de las organizaciones, ya que de su dinámica dependen aspectos críticos como la demanda, los precios, la competencia y la preferencia del consumidor. Por eso resulta fundamental examinarlo con detenimiento y profundidad.
            i.fas.fa-quote-right

    Separador

    #t_1_2(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 1.2	Tipos

    .p.mb-4.mb-lg-5 La clasificación de los mercados depende de diversos criterios, como el tipo de comprador, el uso del producto o el nivel de competencia. A continuación, se presentan los principales tipos de mercados, junto con sus características distintivas.

    .row.justify-content-center.align-items-center.z-2
      .col-8.col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down")(src='@/assets/curso/temas/tema1/3.png', alt='Imagen decorativa')
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordion-mercado")
          div(titulo="Mercado de consumidores")
            p Se refiere al grupo de personas que compran productos o servicios para satisfacer necesidades personales o familiares, sin fines comerciales. Por ejemplo:
            ul.checklist
              li Alimentos, artículos de aseo y productos básicos adquiridos en supermercados.
              li Ropa, tecnología o calzado comprados para uso individual.
              li Hogares que contratan servicios como internet o telefonía móvil.

          div(titulo="Mercado industrial")
            p Agrupa a las organizaciones que adquieren bienes o servicios como parte de sus procesos productivos, ya sea como insumos, herramientas o equipos. Por ejemplo: 
            ul.checklist
              li Empresas manufactureras que invierten en maquinaria o tecnología.
              li Industrias que compran materias primas como acero o plásticos.
              li Constructoras que adquieren materiales y equipos para sus obras.

          div(titulo="Mercado institucional")
            p Incluye entidades públicas y organizaciones sin ánimo de lucro que realizan compras para apoyar el cumplimiento de su misión social o administrativa. Por ejemplo:
            ul.checklist
              li Centros de salud que adquieren equipos médicos.
              li Instituciones educativas que compran materiales escolares.
              li Organismos estatales que dotan sus oficinas con mobiliario o tecnología.

          div(titulo="Mercado de revendedores")
            p Está conformado por negocios que adquieren productos con el propósito de revenderlos, generando una ganancia en el proceso. Por ejemplo:
            ul.checklist
              li Mayoristas que distribuyen alimentos a comercios.
              li Tiendas minoristas que compran al por mayor para reventa.
              li Plataformas digitales que comercializan productos de terceros.






</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
