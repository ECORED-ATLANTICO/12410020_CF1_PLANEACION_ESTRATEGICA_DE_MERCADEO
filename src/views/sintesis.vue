<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4.mb-lg-5 El componente “Análisis estratégico del mercado internacional” te permitirá explorar el concepto y los tipos de mercado, conocer a fondo la mezcla de mercadeo con sus elementos esenciales, y comprender cómo se adapta el mercadeo internacional según su objetivo y beneficios. También profundizarás en el entorno empresarial, identificando sus variables clave; aprenderás sobre el funcionamiento del sistema de información de mercadeo (SIM) y su importancia para la toma de decisiones; realizarás un análisis situacional que te permitirá interpretar el contexto mediante diversas variables y metodologías, y finalmente, aplicarás herramientas diagnósticas como matrices y modelos estratégicos que fortalecerán tu capacidad de análisis en escenarios globales.
    .row.justify-content-center
      .col-12
        figure
          img.mb-4.mb-lg-5(src="@/assets/curso/sintesis.svg", alt='El componente "Análisis estratégico del mercado internacional" te permitirá explorar el concepto y los tipos de mercado, conocer a fondo la mezcla de mercadeo con sus elementos esenciales, y comprender cómo se adapta el mercadeo internacional según su objetivo y beneficios. También profundizarás en el entorno empresarial, identificando sus variables clave; aprenderás sobre el funcionamiento del sistema de información de mercadeo (SIM) y su importancia para la toma de decisiones; realizarás un análisis situacional que te permitirá interpretar el contexto mediante diversas variables y metodologías, y finalmente, aplicarás herramientas diagnósticas como matrices y modelos estratégicos que fortalecerán tu capacidad de análisis en escenarios globales.')
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
