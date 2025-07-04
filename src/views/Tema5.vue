<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Sistema de información de mercadeo – SIM

    .row.justify-content-center.align-items-center.z-2
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/temas/tema5/1.png" alt="Imagen decorativa")
      .col-lg-8
        p.mb-0 En un entorno empresarial donde la toma de decisiones oportunas y bien fundamentadas marca la diferencia competitiva, contar con información confiable y actualizada se vuelve indispensable. Las empresas necesitan comprender con precisión el comportamiento del mercado, anticiparse a las tendencias y responder con agilidad a las demandas del entorno. Para ello, se apoyan en sistemas estructurados que organizan y transforman los datos en conocimiento útil. En este contexto, surge el Sistema de Información de Mercadeo (SIM) como una herramienta clave para gestionar estratégicamente la información comercial.

    Separador

    #t_5_1(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 5.1	Concepto

    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-8
        p.mb-4 El Sistema de Información de Mercadeo (SIM) es una estructura coordinada que integra recursos humanos, herramientas tecnológicas, procedimientos y fuentes de información, con el propósito de recolectar, procesar, evaluar y difundir datos útiles que respalden la toma de decisiones estratégicas en el ámbito del mercadeo.
        .cajon.color-terciario-t10.p-4.mb-4.mb-lg-0(data-aos="fade-left")
          p.mb-0 Este sistema es esencial en un contexto empresarial caracterizado por la alta competitividad y la velocidad de los cambios. Su valor radica en permitir a las organizaciones detectar tendencias emergentes, comprender las preferencias del consumidor, evaluar el desempeño de la competencia y ajustar sus estrategias en tiempo real. Así, el SIM se convierte en una herramienta clave no solo para reaccionar ante el entorno, sino también para planificar de manera proactiva y minimizar riesgos en la toma de decisiones.
      .col-sm-8.col-lg-4
        figure
          img(data-aos="fade-up")(src="@/assets/curso/temas/tema5/2.png" alt="Imagen decorativa")

    p Además, el SIM incorpora diversas fuentes de información, como bases de datos internas, estudios de mercado, sistemas de inteligencia competitiva y análisis del entorno. Cuando está bien implementado, contribuye al diseño de campañas más eficaces, la mejora de productos y servicios, y el fortalecimiento de las relaciones con los clientes.

    Separador

    #t_5_2(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 5.2	Estructura

    .row.bg-color-adicional-1.align-items-center.justify-content-center.p-4.p-md-2.p-xl-0.mb-4.mb-lg-5
      .col-8.col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(data-aos="fade-up")(src="@/assets/curso/temas/tema5/3.svg" alt="Imagen decorativa")
      .col-lg-9
        p.mb-4.mb-lg-0 El Sistema de Información de Mercadeo (SIM) se compone de diversos elementos que, al integrarse, permiten una visión más completa del mercado y el entorno en el que opera una organización. Cada uno de estos componentes cumple una función específica en el proceso de recopilación, procesamiento y análisis de datos, lo que facilita una toma de decisiones más informada y estratégica. A continuación, se describen los principales componentes del SIM junto con ejemplos prácticos que ilustran su aplicación estructural en contextos reales:

    TabsB.color-acento-contenido
      .py-4.py-md-5(titulo="Registros internos" :icono="require('@/assets/curso/temas/tema5/4.svg')")
        .row.justify-content-center.align-items-center.py-5
          .col-lg-6.mb-4.mb-lg-0.px-4.px-lg-0
            h5 Registros internos
            p Organizan la información generada por la propia empresa, como datos de ventas, inventarios, clientes y costos operativos. Ejemplo: una empresa de alimentos identifica, mediante sus registros de venta, que los productos saludables se venden más en zonas urbanas durante enero. Esta información permite planificar campañas estacionales dirigidas a ese segmento.
          .col-10.col-sm-8.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema5/8.png', alt='Imagen decorativa')

      .py-4.py-md-5(titulo="Inteligencia de mercadeo" :icono="require('@/assets/curso/temas/tema5/5.svg')")
        .row.justify-content-center.align-items-center.py-5
          .col-lg-6.mb-4.mb-lg-0.px-4.px-lg-0
            h5 Inteligencia de mercadeo
            p Recoge datos informales del entorno, observaciones del equipo comercial, retroalimentación de clientes y actividades de la competencia. Ejemplo: un vendedor nota que una marca extranjera ha bajado precios en supermercados locales. La empresa ajusta su estrategia para no perder participación en ese canal.
          .col-10.col-sm-8.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema5/9.png', alt='Imagen decorativa')

      .py-4.py-md-5(titulo="Investigación de mercados" :icono="require('@/assets/curso/temas/tema5/6.svg')")
        .row.justify-content-center.align-items-center.py-5
          .col-lg-6.mb-4.mb-lg-0.px-4.px-lg-0
            h5 Investigación de mercados
            p Realiza estudios sistemáticos sobre el consumidor, la competencia o nuevos mercados, utilizando encuestas, focus groups o entrevistas. Ejemplo: una pyme colombiana interesada en exportar café realiza un estudio en Canadá y descubre que los consumidores valoran empaques biodegradables. Con esa información, rediseña el empaque antes de ingresar al mercado.
          .col-10.col-sm-8.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema5/10.png', alt='Imagen decorativa')

      .py-4.py-md-5(titulo="Soporte analítico" :icono="require('@/assets/curso/temas/tema5/7.svg')")
        .row.justify-content-center.align-items-center.py-5
          .col-lg-6.mb-4.mb-lg-0.px-4.px-lg-0
            h5 Soporte analítico
            p Utiliza modelos estadísticos y herramientas tecnológicas para transformar datos en proyecciones, indicadores y decisiones estratégicas. Ejemplo: una empresa textil analiza tendencias de consumo y detecta un crecimiento proyectado del 15 % en la demanda de ropa deportiva femenina. Decide enfocar su próxima colección en ese segmento.
          .col-10.col-sm-8.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema5/11.png', alt='Imagen decorativa')

    Separador

    #t_5_3(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 5.3	Funciones
    
    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-lg-8
        p.mb-4 El Sistema de Información de Mercadeo (SIM) se ha convertido en una herramienta fundamental para las organizaciones que desean tomar decisiones más acertadas y responder con agilidad a las dinámicas del mercado. Gracias a su capacidad para recopilar, procesar y analizar datos relevantes, el SIM permite transformar la información en conocimiento útil para orientar las estrategias comerciales.
        .cajon.color-terciario-t10.p-4.mb-4.mb-lg-0(data-aos="fade-left")
          p.mb-0 A continuación, se presentan algunas de sus funciones más relevantes, acompañadas de ejemplos prácticos que ilustran cómo se aplican en contextos reales. Estos ejemplos muestran cómo el SIM puede ayudar a las empresas a mejorar la toma de decisiones y a adaptarse mejor a las necesidades del mercado.
      .col-sm-8.col-lg-4.d-none.d-lg-block
        figure
          img(data-aos="fade-up")(src="@/assets/curso/temas/tema5/12.png" alt="Imagen decorativa")

    .row.justify-content-center.align-items-center.z-2
      .col-8.col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(data-aos="fade-up")(src="@/assets/curso/temas/tema5/13.png" alt="Imagen decorativa")
      .col-lg-9
        LineaTiempoD.color-secundario
          .row(numero="1" titulo="Proveer información oportuna y confiable para la toma de decisiones estratégicas")
            p Un supermercado utiliza un Sistema de Información de Mercadeo (SIM) para recopilar datos de ventas en tiempo real. Esta información permite a la gerencia identificar cuáles productos tienen mayor rotación y éxito entre los consumidores, lo que facilita el ajuste de las promociones semanales. De este modo, se optimiza el manejo del inventario y se incrementan las ventas de los artículos más demandados.

          .row(numero="2" titulo="Identificar tendencias y patrones del comportamiento del consumidor")
            p Una marca de ropa deportiva utiliza herramientas de análisis de datos para estudiar las compras realizadas por los consumidores durante las temporadas de rebajas. A través de estos análisis, descubren que los clientes están comprando más productos ecológicos y de bajo impacto ambiental, lo que lleva a la marca a ajustar su producción para enfocarse en estas tendencias.

          .row(numero="3" titulo="Evaluar el impacto de las estrategias de mercadeo")
            p Una empresa de telefonía móvil lanza una campaña publicitaria centrada en nuevos planes de datos. Para evaluar el impacto, utilizan datos del SIM para comparar las ventas antes, durante y después de la campaña. Los resultados muestran un aumento del 30 % en la suscripción de nuevos clientes, lo que confirma que la campaña fue efectiva.

          .row(numero="4" titulo="Apoyar la segmentación del mercado y la definición de perfiles de clientes")
            p Un banco utiliza el SIM para analizar los datos de los clientes existentes y descubrir patrones en la demografía, los hábitos de ahorro y los intereses financieros. Con esta información, el banco puede segmentar su mercado y ofrecer productos personalizados, como préstamos para jóvenes profesionales o cuentas de ahorro con beneficios específicos para familias.

    Separador

    #t_5_4(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 5.4	Guía implementación SIM

    .cajon.color-terciario-t10.p-4.mb-4.mb-lg-5(data-aos="fade-left")
      p.mb-0 Esta guía práctica presenta los componentes clave de un Sistema de Información de Mercadeo (SIM) enfocado en exportaciones. Su objetivo es ayudar a las empresas a organizar y usar la información estratégica necesaria para tomar mejores decisiones en mercados internacionales. Incluye descripciones, herramientas y ejemplos aplicados al caso del aguacate <em>Hass</em>.

    .tarjeta.guia-slyder.p-4.p-lg-5.pb-lg-4.mb-4.mb-lg-5.z-2
      SlyderA(tipo="b")
        .row.align-items-center.justify-content-center
          .col-lg-6.col-xl-5.mb-4.mb-lg-0
            p.mb-4.mb-xl-5 <strong>Paso 1.</strong> Registros internos
            p.mb-4.mb-xl-5 Reúne información generada dentro de la empresa, como datos de producción, ventas, inventario, logística, costos y clientes. Esta base de datos operativa es clave para analizar el rendimiento interno. Ejemplo: la empresa registra el volumen mensual de aguacate cosechado y los costos de empaque y transporte para planear campañas según la disponibilidad y eficiencia logística.
            p <strong>Herramientas / Fuentes:</strong> ERP, CRM, Excel, Google Sheets.
          .col-10.col-sm-8.col-lg-6.col-xl-5
            figure
              img(src='@/assets/curso/temas/tema5/14.png', alt='Imagen decorativa')
        .row.align-items-center.justify-content-center
          .col-lg-6.col-xl-5.mb-4.mb-lg-0
            p.mb-4.mb-xl-5 <strong>Paso 2.</strong> Inteligencia de <em>marketing</em>
            p.mb-4.mb-xl-5 Implica la recolección de datos informales del entorno competitivo, a través de observación directa, interacción con clientes o revisión de fuentes externas. Sirve para detectar oportunidades o amenazas. Ejemplo: se identifican precios por kilo del aguacate Hass en EE.UU. y los requisitos de certificación exigidos por el mercado europeo, ajustando la estrategia comercial según estos hallazgos.
            p <strong>Herramientas / Fuentes:</strong> ProColombia, Trademap, USDA, ferias comerciales, observación directa de clientes.
          .col-10.col-sm-8.col-lg-6.col-xl-5
            figure
              img(src='@/assets/curso/temas/tema5/15.png', alt='Imagen decorativa')
        .row.align-items-center.justify-content-center
          .col-lg-6.col-xl-5.mb-4.mb-lg-0
            p.mb-4.mb-xl-5 <strong>Paso 3.</strong> Investigación de mercados
            p.mb-4.mb-xl-5 Consiste en la aplicación de estudios sistemáticos para conocer percepciones, hábitos de consumo, preferencias o canales de compra en mercados específicos. Ejemplo: la empresa realiza un estudio en Alemania donde descubre que los consumidores valoran el empaque biodegradable, lo cual orienta el rediseño de su producto para ese mercado.
            p <strong>Herramientas / Fuentes:</strong> encuestas, <em>focus groups</em>, entrevistas a compradores.
          .col-10.col-sm-8.col-lg-6.col-xl-5
            figure
              img(src='@/assets/curso/temas/tema5/16.png', alt='Imagen decorativa')
        .row.align-items-center.justify-content-center
          .col-lg-6.col-xl-5.mb-4.mb-lg-0
            p.mb-4.mb-xl-5 <strong>Paso 4.</strong> Sistema de apoyo a decisiones
            p.mb-4.mb-xl-5 Procesa la información recolectada para convertirla en reportes, indicadores, alertas o simulaciones que facilitan la toma de decisiones estratégicas. Ejemplo: a través del análisis de datos, se proyecta la demanda trimestral por país destino y se calculan los márgenes de rentabilidad esperados para priorizar los mercados más viables.
            p <strong>Herramientas / Fuentes:</strong> Power BI, Tableau, <em>dashboards</em> personalizados.
          .col-10.col-sm-8.col-lg-6.col-xl-5
            figure
              img(src='@/assets/curso/temas/tema5/17.png', alt='Imagen decorativa')
        .row.align-items-center.justify-content-center
          .col-lg-6.col-xl-5.mb-4.mb-lg-0
            p.mb-4.mb-xl-5 <strong>Paso 5.</strong> Sistema de distribución de información
            p.mb-4.mb-xl-5 Mecanismo mediante el cual la empresa comparte los datos procesados para apoyar decisiones oportunas y coordinadas. Ejemplo: informes mensuales de exportaciones enviados al equipo comercial y logístico.
            p <strong>Herramientas / Fuentes:</strong> Email, Google Drive, Notion, reuniones de comité exportador.
          .col-10.col-sm-8.col-lg-6.col-xl-5
            figure
              img(src='@/assets/curso/temas/tema5/18.png', alt='Imagen decorativa')

    .bloque-texto-g.color-primario-p5.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/19.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        div
          p Sugerencias de uso:
          ul.checklist
            li Usar esta guía como checklist en reuniones estratégicas.
            li Actualizar la información del SIM de forma mensual o por campaña de exportación.
            li Asegurar que todos los equipos (comercial, producción, logística, calidad) alimenten el sistema.
            li Complementar con alertas sobre cambios en normativas internacionales (fitosanitarias, arancelarias, entre otras).

    Separador

    #t_5_5(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 5.5	Ejemplo empresarial

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-7.p-4.px-5.bg-color-terciario-t10.rounded-4.mb-4.mb-lg-0
        p.my-2 A continuación, se presenta la experiencia de Agroverde Export organizada en secciones desplegables, que permiten conocer de forma detallada cómo esta empresa ha estructurado su Sistema de Información de Mercadeo (SIM). Cada apartado describe los elementos clave del sistema, su aplicación en el contexto exportador del aguacate Hass y los resultados alcanzados, evidenciando el impacto positivo de una gestión estratégica de la información en el proceso de internacionalización. 
      .col-sm-8.col-lg-5
        figure
          img.mb-4.mb-lg-0(data-aos="fade-up")(src='@/assets/curso/temas/tema5/20.png', alt='Imagen decorativa')

    .fullwidth-bg.fullwidth-bg--2
    .row.justify-content-center.z-2
      .col-xl-10
        PasosA.color-acento-contenido.mb-5.z-2(tipo="n")
          .row.align-items-center.justify-content-center
            .col-lg-7.mb-4.mb-lg-0
              h3 1. Introducción al caso
              p Agroverde Export, empresa agroindustrial ubicada en Antioquia, ha estructurado un Sistema de Información de Mercadeo (SIM) para apoyar su proceso de exportación de aguacate Hass a mercados como Estados Unidos y Europa. Gracias a esta herramienta, la empresa toma decisiones basadas en datos reales, mejorando su competitividad internacional.
            .col-10.col-md-7.col-lg-5
              figur5
                img(src='@/assets/curso/temas/tema5/21.png', alt='Imagen decorativa')

          .row.align-items-center.justify-content-center
            .col-10.col-md-7.col-lg-5.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema5/22.png', alt='Imagen decorativa')
            .col-lg-7.text-start
              h3 2. Datos generales
              p.mb-1 <strong>Sector:</strong> agroindustrial. 
              p.mb-1 <strong>Producto:</strong> aguacate Hass. 
              p.mb-1 <strong>Ubicación:</strong> Antioquia, Colombia. 
              p.mb-1 <strong>Objetivo:</strong> exportar a Estados Unidos y Europa.

          .row.align-items-center.justify-content-center
            .col-lg-7.mb-4.mb-lg-0
              h3 3. Estructura del SIM en Agroverde Export
              p.mb-1 <strong>a.</strong> Registros internos: incluyen datos de producción, ventas, costos logísticos y desempeño por temporada. 
              p.mb-1 <strong>b.</strong> Inteligencia de marketing: análisis de fuentes como ProColombia, USDA, ferias internacionales y contacto con distribuidores. 
              p.mb-1 <strong>c.</strong> Investigación de mercados: estudios de percepción en EE. UU. y Europa mediante encuestas y focus groups. 
              p.mb-1 <strong>d.</strong> Soporte a decisiones: dashboards en Power BI para monitorear precios, tendencias y demanda por región. e. Análisis del entorno: seguimiento de normas fitosanitarias, tipo de cambio, tratados comerciales y barreras arancelarias.
            .col-10.col-md-7.col-lg-5
              figure
                img(src='@/assets/curso/temas/tema5/23.png', alt='Imagen decorativa')

          .row.align-items-center.justify-content-center
            .col-10.col-md-7.col-lg-5.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema5/24.png', alt='Imagen decorativa')
            .col-lg-7
              h3.text-start 4. Resultados obtenidos
              ul.checklist.text-start
                li Selección de EE. UU. y Alemania como mercados prioritarios. 
                li Certificaciones: GLOBALG.A.P. y USDA Organic.
                li Diseño de empaque ecológico adaptado a preferencias internacionales.
                li Optimización logística desde Urabá a puertos estratégicos.
                li Posicionamiento como “aguacate premium colombiano”, diferenciándose de México y Perú.
          


    .row.justify-content-center.align-items-center.z-2.mt-4.mt-lg-5.z-2
      .col-lg-7.bg-color-primario.p-4.py-5.rounded-4.mb-4.mb-lg-0
        .row.align-items-center.justify-content-center
          .col-7.col-sm-4.col-lg-5
            figure
              img.mb-4.mb-lg-0(data-aos="fade-right")(src='@/assets/curso/temas/tema2/10.png', alt='Imagen decorativa')
          .col-sm-8.col-lg-7
            h5.text-white ¿Sabías qué?
            p.text-white Lo invitamos a escuchar el siguiente Pódcast:
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="“Charlas que venden” Episodio: “SIM: conectando datos”"
              :audio="require('../assets/componentes/audios/audio-ej.mp3')"
            )
      .col-10.col-sm-8.col-lg-5
        figure
          img.mb-4.mb-lg-0(data-aos="fade-left")(src='@/assets/curso/temas/tema5/25.png', alt='Imagen decorativa')

</template>

<script>
export default {
  name: 'Tema5',
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
