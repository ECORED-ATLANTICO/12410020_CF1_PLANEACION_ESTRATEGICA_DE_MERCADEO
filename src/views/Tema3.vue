<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Mercadeo internacional

    .bloque-texto-g.color-acento-contenido-a10.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En un mundo cada vez más interconectado, las empresas buscan ampliar sus horizontes más allá de las fronteras locales. Esta expansión requiere no solo trasladar productos a otros países, sino comprender profundamente las particularidades de cada mercado. El mercadeo internacional surge como una disciplina estratégica que permite adaptar las decisiones comerciales a diversos contextos culturales, económicos y sociales. Antes de ingresar a nuevos mercados, es fundamental analizar cómo piensan, compran y viven los consumidores en otras regiones. Esta sección ofrece una visión integral sobre el enfoque internacional del mercadeo, sus principios, objetivos y desafíos clave en un entorno global competitivo.

    Separador

    #t_3_1(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 3.1	Concepto

    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-lg-8
        p El mercadeo internacional comprende el conjunto de estrategias y decisiones que las empresas implementan para ingresar, posicionarse y competir en mercados fuera de su país de origen. Va más allá de exportar productos: implica adaptar la oferta a realidades diversas, considerando factores culturales, económicos, sociales, legales y tecnológicos que caracterizan a cada mercado destino (Lamb, Hair & McDaniel, 2012).
        .cajon.color-terciario-t10.p-4.mb-3(data-aos="fade-left")
          p.mb-0 Este enfoque exige comprender cómo piensan, consumen y se comportan los compradores en otros países, lo que obliga a ajustar no solo el producto, sino también su precio, los canales de distribución y las formas de promoción. Las empresas deben identificar las preferencias, valores y hábitos de compra locales para lograr que sus productos conecten verdaderamente con el público extranjero.
        p En síntesis, hacer mercadeo internacional es diseñar estrategias comerciales que hablen el lenguaje del mercado global, reconociendo sus particularidades y creando propuestas de valor relevantes para cada entorno.
      .col-sm-8.col-md-6.col-lg-4
        figure
          img(data-aos="fade-left")(src="@/assets/curso/temas/tema3/2.png" alt="Imagen decorativa")

    .video.mb-5
      iframe(width="560" height="315" src="https://www.youtube.com/embed/138g3ojttqA" title="Introducción al Mercadeo Internacional" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)

    Separador

    #t_3_2(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 3.2	Objetivo

    p.mb-4.mb-lg-5 El mercadeo internacional permite a las empresas proyectarse más allá de sus fronteras nacionales, buscando posicionarse en mercados globales. A través de diferentes estrategias, se persiguen objetivos que fortalecen su competitividad, estabilidad financiera y crecimiento sostenible, en contextos donde las oportunidades trascienden lo local para convertirse en ventajas globales. 

    .fullwidth-bg.fullwidth-bg--3
    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 1.
          span Objetivos del mercadeo internacional
        img.d-sm-none(data-aos="fade-up")(src="@/assets/curso/temas/tema3/3-mob.png", alt="La figura representa una síntesis visual de los principales objetivos del mercadeo internacional. Refleja cómo las organizaciones buscan consolidar su presencia internacional. ,Expandir el mercado meta ,Diversificar las fuentes de ingreso ,Aprovechar ventajas competitivas globales ,Buscar nuevos clientes ,Reducir riesgos por concentración geográfica")
        img.d-none.d-md-block(data-aos="fade-up")(src="@/assets/curso/temas/tema3/3.png", alt="La figura representa una síntesis visual de los principales objetivos del mercadeo internacional. Refleja cómo las organizaciones buscan consolidar su presencia internacional. ,Expandir el mercado meta ,Diversificar las fuentes de ingreso ,Aprovechar ventajas competitivas globales ,Buscar nuevos clientes ,Reducir riesgos por concentración geográfica")
        figcaption <strong>Fuente:</strong> SENA, 2025.

    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-lg-10
        .cajon.color-terciario-t10.p-4.mb-3(data-aos="fade-left")
          p.mb-0 Además de comprender los objetivos generales del mercadeo internacional, es fundamental profundizar en su aplicación práctica. A continuación, se amplían los propósitos estratégicos, presentando descripciones claras y ejemplos representativos que permiten evidenciar cómo las empresas los incorporan en sus procesos de internacionalización. Este análisis facilita la conexión entre la teoría y la realidad empresarial, fortaleciendo la toma de decisiones en contextos globales.

    .row.justify-content-center.align-items-center.factores-slider.z-2.rounded-4.p-lg-4
      .col-sm-8.col-lg-4.d-none.d-xl-block
        figure
          img(src='@/assets/curso/temas/tema3/4.png', alt='Imagen decorativa')

      .col-sm-8.col-md-10.col-xl-8.mb-3.mb-lg-0
        SlyderF(columnas="col-lg-6")
          .tarjeta.p-3.card-decoration.rounded-4.mx-2.my-3
            .row.justify-content-center.mb-3
              .col-5
                img.mb-2(src='@/assets/curso/temas/tema3/5.svg' alt='Icon decarativo')
            h5.bg-color-primario.text-white.text-center.p-3.rounded-3 Expandir el mercado meta
            p Llegar a consumidores en otros países donde exista demanda potencial por los productos o servicios de la empresa. Ejemplo: una marca de ropa colombiana abre tiendas en Centroamérica para captar nuevos segmentos de clientes.

          .tarjeta.p-4.card-decoration.rounded-4.mx-2.my-3
            .row.justify-content-center.mb-3
              .col-5
                img.mb-2(src='@/assets/curso/temas/tema3/7.svg' alt='Icon decarativo')
            h5.bg-color-primario.text-white.text-center.p-3.rounded-3 Diversificar las fuentes de ingreso
            p Reducir la dependencia de un único mercado, generando ingresos desde diversas regiones. Ejemplo: una empresa de software comercializa licencias en Europa y América Latina para mantener estabilidad financiera.

          .tarjeta.p-4.card-decoration.rounded-4.mx-2.my-3
            .row.justify-content-center.mb-3
              .col-5
                img.mb-2(src='@/assets/curso/temas/tema3/8.svg' alt='Icon decarativo')
            h5.bg-color-primario.text-white.text-center.p-3.rounded-3 Aprovechar ventajas competitivas globales
            p Utilizar fortalezas como la calidad, la innovación o la eficiencia para destacarse internacionalmente. Ejemplo: una empresa brasilera exporta maquinaria agrícola diseñada para climas tropicales, superando a competidores locales.

          .tarjeta.p-4.card-decoration.rounded-4.mx-2.my-3
            .row.justify-content-center.mb-3
              .col-5
                img.mb-2(src='@/assets/curso/temas/tema3/9.svg' alt='Icon decarativo')
            h5.bg-color-primario.text-white.text-center.p-3.rounded-3 Buscar nuevos clientes
            p Ampliar la base de compradores potenciales en diferentes países o regiones. Ejemplo: una plataforma educativa digital traduce sus contenidos a varios idiomas para atraer estudiantes globales.

          .tarjeta.p-4.card-decoration.rounded-4.mx-2.my-3
            .row.justify-content-center.mb-3
              .col-5
                img.mb-2(src='@/assets/curso/temas/tema3/10.svg' alt='Icon decarativo')
            h5.bg-color-primario.text-white.text-center.p-3.rounded-3 Reducir riesgos por concentración geográfica
            p Distribuir operaciones en varios países para minimizar el impacto de crisis regionales. Ejemplo: una empresa de alimentos vende en América y Europa, compensando caídas de demanda local con mercados externos.

    Separador

    #t_3_3(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 3.3	Beneficios

    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-lg-1.d-none.d-lg-block
        figure
          img(src="@/assets/curso/temas/tema3/11.svg" alt="Imagen decorativa")
      .col-lg-11
        p.mb-0 El mercadeo internacional permite a las empresas alcanzar objetivos clave como la expansión de mercados y la diversificación de ingresos. Estos logros se traducen en beneficios estratégicos que fortalecen su competitividad global. A continuación, se presentan los más destacados, con respaldo teórico.
        
    AcordionA(tipo="a" clase-tarjeta="tarjeta acordion-mercado")
      div(titulo="Expansión del alcance comercial")
        .row.align-items-center.justify-content-center
          .col-lg-8
            p Permite a las empresas llegar a nuevos mercados, aumentando su base de clientes y la demanda potencial de sus productos o servicios. (<em>Kotler & Keller</em>, 2016).
          .col-sm-10.col-lg-3
            figure
              img(data-aos="fade-up")(src='@/assets/curso/temas/tema3/12.png', alt='Imagen decorativa')

      div(titulo="Diversificación del riesgo empresarial")
        .row.align-items-center.justify-content-center
          .col-lg-8
            p Al operar en varios países, se reduce la dependencia de un solo mercado y se amortiguan los efectos de crisis económicas o políticas locales. (<em>Lamb, Hair & McDaniel</em>, 2012).
          .col-sm-10.col-lg-3
            figure
              img(data-aos="fade-up")(src='@/assets/curso/temas/tema3/13.png', alt='Imagen decorativa')

      div(titulo="Incremento de ingresos")
        .row.align-items-center.justify-content-center
          .col-lg-8
            p El acceso a nuevos consumidores y la posibilidad de adaptarse a distintos niveles de poder adquisitivo generan mayores ventas y rentabilidad. (<em>Kotler & Keller</em>, 2016).
          .col-sm-10.col-lg-3
            figure
              img(data-aos="fade-up")(src='@/assets/curso/temas/tema3/14.png', alt='Imagen decorativa')

      div(titulo="Aprovechamiento de oportunidades enmercados emergentes")
        .row.align-items-center.justify-content-center
          .col-lg-8
            p Las empresas pueden adelantarse a la competencia aprovechando el crecimiento acelerado de ciertas regiones, posicionando su marca desde etapas tempranas. (<em>Lamb, Hair & McDaniel</em>, 2012).
          .col-sm-10.col-lg-3
            figure
              img(data-aos="fade-up")(src='@/assets/curso/temas/tema3/15.png', alt='Imagen decorativa')

      div(titulo="Fortalecimiento de la marca a nivel global")
        .row.align-items-center.justify-content-center
          .col-lg-8
            p La presencia internacional mejora el prestigio, la percepción de valor y el reconocimiento global de una marca, lo cual impulsa la lealtad del cliente. (<em>Kotler & Keller</em>, 2016).
          .col-sm-10.col-lg-3
            figure
              img(data-aos="fade-up")(src='@/assets/curso/temas/tema3/16.png', alt='Imagen decorativa')

      div(titulo="Economías de escala")
        .row.align-items-center.justify-content-center
          .col-lg-8
            p Al producir mayores volúmenes para varios mercados, se reducen los costos unitarios, aumentando la eficiencia y competitividad. (<em>Kotler & Keller</em>, 2016).
          .col-sm-10.col-lg-3
            figure
              img(data-aos="fade-up")(src='@/assets/curso/temas/tema3/17.png', alt='Imagen decorativa')

      div(titulo="Innovación y adaptación estratégica")
        .row.align-items-center.justify-content-center
          .col-lg-8
            p Las empresas deben adaptar sus productos, empaques y estrategias al contexto local, lo cual estimula procesos de innovación y mejora continua. (<em>Lamb, Hair & McDaniel</em>, 2012).
          .col-sm-10.col-lg-3
            figure
              img(data-aos="fade-up")(src='@/assets/curso/temas/tema3/18.png', alt='Imagen decorativa')

</template>

<script>
export default {
  name: 'Tema3',
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
