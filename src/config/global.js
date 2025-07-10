export default {
  global: {
    Name: 'Análisis estratégico del mercado internacional',
    Description:
      'Este componente formativo permite comprender el funcionamiento de los mercados globales, identificando oportunidades y desafíos para la toma de decisiones comerciales. Desarrolla habilidades para analizar el entorno, interpretar información clave y aplicar estrategias efectivas que mejoren la competitividad de productos o servicios en escenarios internacionales, fortaleciendo así la visión global y la capacidad de adaptación en contextos empresariales dinámicos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Mercado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Mezcla de mercadeo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Elementos',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Mercadeo internacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Objetivo',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Beneficios',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Entorno empresarial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Conceptos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Variables',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Sistema de información de mercadeo – SIM',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Concepto',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Estructura',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Funciones',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Guía implementación SIM',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Ejemplo empresarial',
            hash: 't_5_5',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Análisis situacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Concepto',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Variables',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Metodología',
            hash: 't_6_3',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Herramientas diagnósticas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Concepto',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Tipos',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Matrices',
            hash: 't_7_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Mercadeo Internacional',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2020). <em>Introducción al Mercadeo Internacional</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=138g3ojttqA',
    },
    {
      tema: 'Herramientas diagnósticas',
      referencia:
        'Cuenta Conmigo. (2020). <em>Análisis PESTEL. Fácil, rápido y sencillo</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=zr19Z0kVA1w',
    },
    {
      tema: 'Herramientas diagnósticas',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). <em>Benchmarking: qué es, cómo funciona, utilidad</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=4by9PtD7qDw',
    },
    {
      tema: 'Herramientas diagnósticas',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022). <em>Estrategia de diagnóstico y análisis empresarial</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=CDspVWIYvRk',
    },
    {
      tema: 'Herramientas diagnósticas',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). <em>Matriz DOFA</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=84fuGpQeYg0',
    },
  ],
  glosario: [
    {
      termino: 'Análisis',
      significado:
        'Proceso de estudiar una situación para tomar decisiones informadas.',
    },
    {
      termino: 'Cliente',
      significado: 'Persona que compra o utiliza un producto o servicio.',
    },
    {
      termino: 'Competencia',
      significado:
        'Empresas que ofrecen productos similares y compiten por los mismos clientes.',
    },
    {
      termino: 'Consumidor',
      significado:
        'Quien usa el producto o servicio, no necesariamente quien lo compra.',
    },
    {
      termino: 'Demanda',
      significado:
        'Cantidad de un producto que los consumidores están dispuestos a comprar.',
    },
    {
      termino: 'Distribución',
      significado:
        'Proceso de hacer llegar un producto desde el fabricante hasta el consumidor.',
    },
    {
      termino: 'Entorno',
      significado: 'Conjunto de factores externos que influyen en una empresa.',
    },
    {
      termino: 'Estrategia',
      significado: 'Plan para alcanzar objetivos comerciales.',
    },
    {
      termino: 'Exportación',
      significado: 'Venta de bienes o servicios a otros países.',
    },
    {
      termino: 'Imagen',
      significado: 'Percepción que el público tiene de una marca o empresa.',
    },
    {
      termino: 'Industria',
      significado: 'Conjunto de empresas que producen bienes similares.',
    },
    {
      termino: 'Marketing',
      significado:
        'Conjunto de acciones para satisfacer necesidades y generar valor.',
    },
    {
      termino: 'Mercado',
      significado:
        'Espacio donde se intercambian productos o servicios entre compradores y vendedores.',
    },
    {
      termino: 'Posicionamiento',
      significado:
        'Lugar que ocupa una marca o producto en la mente del consumidor.',
    },
    {
      termino: 'Precio',
      significado: 'Valor monetario que se asigna a un producto o servicio.',
    },
    {
      termino: 'Producto',
      significado: 'Bien o servicio ofrecido para satisfacer una necesidad.',
    },
    {
      termino: 'Promoción',
      significado: 'Actividades para dar a conocer y vender un producto.',
    },
    {
      termino: 'Segmentación',
      significado:
        'División del mercado en grupos con características similares.',
    },
    {
      termino: 'Servicio',
      significado:
        'Actividad intangible que satisface una necesidad (como educación o salud).',
    },
    {
      termino: 'Mezcla de mercadeo',
      significado: 'Combinación de producto, precio, plaza y promoción.',
    },
  ],
  referencias: [
    {
      referencia:
        'Chiavenato, I. (2006). <em>Introducción a la teoría general de la administración</em> (7.ª ed.). McGraw‑Hill Interamericana. Recuperado de una fuente con licencia abierta:',
      link:
        'https://frrq.cvg.utn.edu.ar/pluginfile.php/15525/mod_resource/content/0/Chiavenato%20Idalverto.%20Introducci%C3%B3n%20a%20la%20teor%C3%ADa%20general%20de%20la%20Administraci%C3%B3n.pdf',
    },
    {
      referencia:
        'David, F. R., David, F. R., & David, M. E. (2020). <em>Strategic management: A competitive advantage approach, concepts and cases</em> (17.ª ed.). Pearson. Disponible en PDF:',
      link: 'https://pracownik.kul.pl/files/12439/public/3_David.pdf',
    },
    {
      referencia:
        'Kotler, P., & Armstrong, G. (2008). <em>Fundamentos de marketing</em> (8.ª ed.). Pearson Educación México. Recuperado de una versión en español: Fundamentos del <em>Marketing</em>, por Kotler & Armstrong.',
      link:
        'https://es.scribd.com/document/472306508/Fundamentos-de-marketing-philip-kotler-pdf-download?utm_source=chatgpt.com',
    },
    {
      referencia:
        'Kotler, P., & Keller, K. L. (2006). <em>Dirección de marketing</em> (15.ª ed.). Pearson. Disponible en versión PDF en español: Dirección de <em>Marketing</em>, Kotler & Keller.',
      link:
        'https://frrq.cvg.utn.edu.ar/pluginfile.php/14585/mod_resource/content/1/libro%20direccion-de-marketing%28kotler-keller_2006%29.pdf?utm_source=chatgpt.com',
    },
    {
      referencia:
        'Lamb, C. W., Hair, J. F., & McDaniel, C. (2012). <em>Marketing</em> (11.ª ed.). Cengage Learning. Recuperado de versión en español: <em>Marketing</em> (pdf).',
      link:
        'https://fir.bsu.by/images/departments/ee/ee-materials/ee-materials/drozd/drazd_Lamb.Marketing%2011%20edition.pdf?utm_source=chatgpt.com',
    },
    {
      referencia:
        'Porter, M. E. (2008). <em>Las cinco fuerzas competitivas que dan forma a la estrategia</em>. Harvard Business Review, 86(1), 78–93. Disponible en español: Las fuerzas competitivas de Porter.',
      link:
        'https://relayn.redesla.la/biblioteca/22.003/T1-C09.pdf?utm_source=chatgpt.com',
    },
    {
      referencia:
        'ProColombia. (2023). <em>Así se exportan alimentos a EE. UU.</em> Recuperado de',
      link:
        'https://procolombia.co/publicaciones/asi-se-exportan-alimentos-ee-uu',
    },
    {
      referencia:
        'ProColombia. (2025). <em>Publicaciones y estudios de mercado.</em> Recuperado de',
      link: 'https://www.procolombia.co',
    },
    {
      referencia: '',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Mario Morales',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Heydy Cristina González García',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Jair Coll Gallardo',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera',
          cargo: 'Diseñador <i>web</i>',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Fabio Fonseca Arguelles',
          cargo: 'Desarrollador <i>full stack junior</i>',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Morales Angulo',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
