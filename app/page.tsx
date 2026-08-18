'use client';

import { useState } from 'react';

interface ModelDetail {
  id: number;
  name: string;
  size: string;
  dimensions: string;
  price: string;
  oldPrice: string;
  condition: string;
  description: string;
  includes: string[];
  features: string[];
  image: string;       
  gallery: string[];   
}

interface ProfessionalService {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  badge: string;
  description: string;
  fullDetails: {
    heading: string;
    items: string[];
  }[];
  phases: string[];
}

const modelsData: ModelDetail[] = [
  {
    id: 1,
    name: "Edificio de Departamentos",
    size: "Múltiples",
    dimensions: "Planta baja y 3 pisos",
    price: "Consultar",
    oldPrice: "",
    condition: "Aporte de Tierra / Desarrollos",
    description: "La propuesta contempla que el propietario reciba unidades terminadas como contraprestación, mientras AC estructura el proyecto y la ejecución.",
    includes: [
      "Planta baja con cocheras cubiertas",
      "3 pisos de unidades residenciales",
      "Balcones con vista panorámica",
      "Diseño arquitectónico moderno",
      "Instalaciones completas y previsión de servicios"
    ],
    features: [
      "Transformar un terreno en proyecto de valor",
      "Ubicación y factibilidad técnica/económica",
      "Estructuración contractual transparente",
      "Proyecto ejecutado integralmente por AC"
    ],
    image: "/edificio.jpg",
    gallery: [
      "/edificio.jpg"
    ]
  },
  {
    id: 2,
    name: "Casas Modulares",
    size: "15m² a 45m²+",
    dimensions: "Modulares acoplables",
    price: "Cotización personalizada",
    oldPrice: "",
    condition: "Llave en mano",
    description: "Sistema constructivo avanzado con estructura metálica y paneles de aislamiento térmico de alta densidad. Montaje rápido y eficiente en destino.",
    includes: [
      "Estructura sismorresistente",
      "Baño completo y cocina equipada",
      "Pisos vinílicos SPC",
      "Aberturas de aluminio",
      "Instalaciones completas de agua y luz"
    ],
    features: [
      "Velocidad de obra récord",
      "Confort térmico todo el año",
      "Ampliaciones futuras disponibles",
      "Apto crédito y mudables"
    ],
    image: "/contenedor-1.png",
    gallery: [
      "/contenedor-1.png",
      "/contenedor-2.png"
    ]
  },
  {
    id: 3,
    name: "Diseño Interior y Exterior",
    size: "A medida",
    dimensions: "Proyecto integral",
    price: "Cotización personalizada",
    oldPrice: "",
    condition: "Servicio Profesional",
    description: "Creamos espacios funcionales y estéticos adaptados a tu estilo. Optimizamos ambientes, materialidades, iluminación y paisajismo integral.",
    includes: [
      "Proyecto conceptual y renders 3D",
      "Selección de materialidades e iluminación",
      "Mobiliario a medida",
      "Diseño de fachadas y accesos",
      "Dirección y ejecución de obra"
    ],
    features: [
      "Máximo aprovechamiento del espacio",
      "Estética moderna y personalizada",
      "Asesoramiento integral de principio a fin",
      "Ejecución llave en mano opcional"
    ],
    image: "/exterior.jpg",
    gallery: [
      "/exterior.jpg",
      "/exterior-2.jpg",
      "/exterior-3.jpg",
      "/interior-1.jpg",
      "/interior-2.jpg",
      "/interior-3.jpg"
    ]
  }
];

const professionalServicesData: ProfessionalService[] = [
  {
    id: 'interiores',
    title: 'Diseño de Interiores',
    subtitle: 'Livings, Cocinas y Dormitorios',
    image: '/interior-1.jpg',
    badge: 'Ambientes Armónicos',
    description: 'Creación de ambientes armónicos optimizando la distribución de livings, cocinas integradas completas, comedores y habitaciones con mobiliario a medida.',
    fullDetails: [
      {
        heading: 'Espacios Principales Incluidos',
        items: [
          'Optimización de livings y salas de estar',
          'Diseño integral de cocinas modernas y amoblamientos de bajo mesada / alacenas',
          'Proyectos para habitaciones principales, secundarias y vestidores',
          'Comedores integrados y barras desayunadoras'
        ]
      },
      {
        heading: 'Componentes del Servicio',
        items: [
          'Planos de distribución y replanteo de tabiques/muebles',
          'Selección personalizada de paleta de colores y materialidades (pisos, revestimientos, texturas)',
          'Diseño lumínico técnico y decorativo (cintas LED, artefactos colgantes, embutidos)',
          'Propuesta de mobiliario fijo y diseño de piezas a medida'
        ]
      }
    ],
    phases: [
      '1. Relevamiento de necesidades y estilo estético deseado',
      '2. Anteproyecto con renders 3D fotorrealistas',
      '3. Cómputo métrico, presupuesto de materiales y mobiliario',
      '4. Dirección y asistencia opcional en montaje final'
    ]
  },
  {
    id: 'exteriores',
    title: 'Diseño de Exteriores y Jardines',
    subtitle: 'Patios, Galerías y Paisajismo',
    image: '/exterior.jpg',
    badge: 'Paisajismo Integral',
    description: 'Paisajismo integral, diseño de galerías, iluminación exterior, senderos y espacios verdes conectados de forma fluida con la arquitectura de la casa.',
    fullDetails: [
      {
        heading: 'Áreas de Intervención Exterior',
        items: [
          'Diseño de jardines residenciales, parquización y selección botánica acorde al clima',
          'Proyectos de galerías, quinchos, pérgolas y decks de madera o WPC',
          'Senderos de circulación, entradas vehiculares y revestimientos de piso exterior',
          'Integración visual entre el interior del hogar y el espacio verde'
        ]
      },
      {
        heading: 'Detalles Técnicos y Estéticos',
        items: [
          'Esquemas de iluminación exterior de acento y seguridad',
          'Sugerencias de sistemas de riego automático eficientes',
          'Selección de mobiliario de exterior resistente a la intemperie',
          'Asesoramiento en cierres perimetrales, muros verdes y divisorios'
        ]
      }
    ],
    phases: [
      '1. Análisis del terreno, orientación solar y desniveles',
      '2. Masterplan paisajístico y zonificación de usos al aire libre',
      '3. Especificación de especies vegetales, materiales y luminarias',
      '4. Supervisión de plantación y ejecución del proyecto'
    ]
  }
];

export default function Home() {
  const [selectedModel, setSelectedModel] = useState<ModelDetail | null>(null);
  const [selectedService, setSelectedService] = useState<ProfessionalService | null>(null);
  const [activeFaqTab, setActiveFaqTab] = useState<'construccion' | 'diseno' | 'sistema'>('construccion');
  
  const [activeModalImage, setActiveModalImage] = useState<string>('');
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const texto = `Hola, mi nombre es ${nombre}. Mi teléfono es ${telefono}. Mensaje: ${mensaje}`;
    const url = `https://wa.me/5493517601722?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
  };

  const handleOpenModal = (model: ModelDetail) => {
    setSelectedModel(model);
    setActiveModalImage(model.image);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedModel) return;
    const currentIndex = selectedModel.gallery.indexOf(activeModalImage);
    const prevIndex = currentIndex === 0 ? selectedModel.gallery.length - 1 : currentIndex - 1;
    setActiveModalImage(selectedModel.gallery[prevIndex]);
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedModel) return;
    const currentIndex = selectedModel.gallery.indexOf(activeModalImage);
    const nextIndex = currentIndex === selectedModel.gallery.length - 1 ? 0 : currentIndex + 1;
    setActiveModalImage(selectedModel.gallery[nextIndex]);
  };

  const faqData = {
    construccion: [
      {
        pregunta: "¿Cómo funciona el esquema de aporte de tierra?",
        respuesta: "Vos aportás el terreno y AC estructura la oportunidad y la ejecución. El propietario recibe unidades terminadas como contraprestación contractual."
      },
      {
        pregunta: "¿Cómo se evalúa la viabilidad del terreno?",
        respuesta: "Cada operación se analiza individualmente en base a su ubicación, la normativa municipal vigente y el mercado inmobiliario actual."
      },
      {
        pregunta: "¿Qué incluye la planta baja del edificio?",
        respuesta: "La planta baja está destinada principalmente al área de cocheras cubiertas y accesos principales jerarquizados para los propietarios."
      },
      {
        pregunta: "¿Cuáles son las etapas del proyecto de desarrollo?",
        respuesta: "Se divide en 4 etapas principales: 01 / Analizar, 02 / Proyectar, 03 / Acordar y 04 / Desarrollar la obra completa."
      },
      {
        pregunta: "¿Cómo puedo coordinar una reunión para analizar mi terreno?",
        respuesta: "Podés dejarnos tus datos en el formulario de contacto para evaluar la factibilidad técnica y económica de tu lote con nuestro equipo."
      }
    ],
    diseno: [
      {
        pregunta: "¿Cómo trabajamos el servicio de Diseño Interior y Exterior?",
        respuesta: "Comenzamos con una reunión para entender tus gustos, necesidades y presupuesto. Luego desarrollamos un anteproyecto con renders 3D para visualizar el resultado final antes de ejecutar."
      },
      {
        pregunta: "¿Incluyen la dirección de obra y ejecución en el servicio de diseño?",
        respuesta: "Sí, ofrecemos un servicio integral 'llave en mano'. Nos encargamos desde el proyecto conceptual hasta la dirección técnica de obra, fabricación de mobiliario a medida y puesta en marcha final."
      },
      {
        pregunta: "¿Qué incluye el diseño de exteriores y paisajismo?",
        respuesta: "Diseñamos espacios verdes, parquización, sistemas de riego, iluminación exterior, senderos, galerías, quinchos y áreas de descanso, integrándolos fluidamente con la arquitectura de la casa."
      },
      {
        pregunta: "¿Puedo solicitar solo el diseño y contratar la ejecución por separado?",
        respuesta: "Por supuesto. Si ya tenés tu equipo de constructores, te entregamos el proyecto completo (planos, renders, especificaciones técnicas) para que lo lleven a cabo."
      },
      {
        pregunta: "¿Cómo se presupuestan los servicios de diseño profesional?",
        respuesta: "El presupuesto se elabora a medida, dependiendo de los metros cuadrados a intervenir, la complejidad del proyecto y el alcance del servicio (solo proyecto o proyecto + dirección/ejecución)."
      }
    ],
    sistema: [
      {
        pregunta: "¿En qué consiste exactamente el sistema constructivo avanzado?",
        respuesta: "Se basa en la prefabricación de componentes estructurales de alta precisión en taller, minimizando los tiempos de obra en el terreno y reduciendo el margen de error humano."
      },
      {
        pregunta: "¿Qué materiales componen la estructura principal?",
        respuesta: "Utilizamos perfiles de acero estructural altamente resistentes y sismorresistentes, combinados con rigidizadores que garantizan una vida útil superior a la construcción tradicional."
      },
      {
        pregunta: "¿Qué nivel de aislación térmica y acústica poseen los paneles?",
        respuesta: "Los paneles sándwich de alta densidad actúan como barrera eficiente contra la humedad, el calor extremo y el frío, además de reducir notablemente los ruidos exteriores."
      },
      {
        pregunta: "¿El sistema constructivo requiere un mantenimiento especial con los años?",
        respuesta: "No más que una construcción convencional. Los materiales exteriores están preparados para resistir la intemperie y la corrosión con un mantenimiento mínimo y periódico."
      },
      {
        pregunta: "¿Las instalaciones eléctricas y sanitarias vienen integradas?",
        respuesta: "Sí, el diseño de ingeniería prevé las canalizaciones embutidas de luz, agua y cloacas dentro de la estructura, agilizando las conexiones finales en el terreno."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#f7f5f0] text-[#171717] font-sans selection:bg-[#cfc5b5] selection:text-[#171717]">
      {/* --- NAVBAR --- */}
      <header className="sticky top-0 z-50 bg-[#f4f1ea]/90 backdrop-blur-md border-b border-[#171717]/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="font-bold tracking-[0.24em] text-xl uppercase">
            AC <small className="block text-[8px] font-normal tracking-[0.28em] -mt-1 text-[#6e6a63]">ESTUDIO</small>
          </a>
          
          <nav className="hidden md:flex items-center gap-8 text-[11px] font-semibold tracking-[0.15em] uppercase text-[#6e6a63]">
            <a href="#servicios" className="hover:text-[#171717] transition-colors">Servicios</a>
            <a href="#desarrollos" className="hover:text-[#171717] transition-colors">Aporte de Tierra</a>
            <a href="#proyectos" className="hover:text-[#171717] transition-colors">Proyectos</a>
            <a href="#sistema" className="hover:text-[#171717] transition-colors">Modular</a>
            <a href="#faq" className="hover:text-[#171717] transition-colors">FAQ</a>
            <a href="#contacto" className="hover:text-[#171717] transition-colors">Contacto</a>
          </nav>

          <a 
            href="#contacto" 
            className="bg-[#171717] hover:bg-[#2c2b29] text-[#fcfbf8] px-5 py-2.5 rounded-none text-[10px] font-semibold tracking-[0.15em] uppercase transition-all shadow-sm"
          >
            Contacto
          </a>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="bg-[#f4f1ea] border-b border-[#171717]/10">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 min-h-[calc(100vh-80px)] flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 pr-0 lg:pr-6">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#6e6a63] mb-6 block font-semibold">
                Desarrollos • Arquitectura • Diseño interior & exterior
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight mb-8 text-[#171717]">
                Espacios<br /><em className="font-serif italic font-normal text-[#2c2b29]">con intención.</em>
              </h1>
              <p className="text-lg md:text-xl text-[#555149] leading-relaxed max-w-xl font-light mb-10">
                AC crea proyectos integrales donde arquitectura, inversión y diseño se encuentran. Desde el terreno hasta el último detalle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#desarrollos" className="bg-[#171717] text-[#fcfbf8] px-8 py-4 text-[10px] font-semibold tracking-[0.18em] uppercase text-center hover:bg-[#2c2b29] transition shadow-sm">
                  Descubrir AC
                </a>
                <a href="#contacto" className="border border-[#171717]/20 hover:border-[#171717] hover:bg-[#e2ded5]/40 text-[#171717] bg-transparent px-8 py-4 text-[10px] font-semibold tracking-[0.18em] uppercase text-center transition">
                  Consultar
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div 
                onClick={() => setZoomedImage("/edificio.jpg")}
                className="h-[440px] md:h-[560px] bg-[#e2ded5] border border-[#171717]/15 relative overflow-hidden group cursor-pointer shadow-md rounded-none"
                title="Ampliar imagen"
              >
                <img 
                  src="/edificio.jpg" 
                  alt="AC Estudio - Arquitectura y Desarrollos" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700 opacity-95"
                />
                <div className="absolute top-4 right-4 bg-[#f4f1ea]/90 backdrop-blur-sm px-3 py-1 border border-[#171717]/10 text-[9px] font-mono tracking-widest text-[#171717]">
                  AC / 01
                </div>
                <div className="absolute bottom-4 left-4 bg-[#171717]/90 text-[#fcfbf8] backdrop-blur-sm px-3 py-1.5 text-[9px] font-mono tracking-widest uppercase">
                  Arquitectura Integral
                </div>
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-[#171717] text-[#fcfbf8] text-[10px] tracking-widest uppercase font-mono px-3 py-1.5">🔍 Ampliar Vista</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SERVICIOS --- */}
      <section id="servicios" className="max-w-7xl mx-auto px-6 py-24 border-t border-[#171717]/15">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-5">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#6e6a63] block mb-3 font-medium">Lo que hacemos</span>
            <h2 className="text-4xl md:text-6xl font-light leading-[0.95] tracking-tight">Una mirada<br />integral.</h2>
          </div>
          <div className="lg:col-span-7 flex items-end">
            <p className="text-lg text-[#555149] font-light leading-relaxed max-w-xl">
              No diseñamos solamente edificios. Diseñamos cómo se vive un espacio, cómo se construye y cómo puede convertirse en una inversión sostenible.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#171717]/15 border border-[#171717]/15">
          <article className="bg-[#f7f5f0] p-8 min-h-[260px] flex flex-col justify-between hover:bg-[#eee9df] transition duration-300">
            <div className="text-[10px] font-mono tracking-widest text-[#6e6a63]">01</div>
            <div>
              <h3 className="text-xl font-normal mb-2">Desarrollos</h3>
              <p className="text-xs text-[#6e6a63] leading-relaxed">Analizamos terrenos y estructuramos oportunidades inmobiliarias bajo esquema de aporte.</p>
            </div>
          </article>
          <article className="bg-[#f7f5f0] p-8 min-h-[260px] flex flex-col justify-between hover:bg-[#eee9df] transition duration-300">
            <div className="text-[10px] font-mono tracking-widest text-[#6e6a63]">02</div>
            <div>
              <h3 className="text-xl font-normal mb-2">Arquitectura</h3>
              <p className="text-xs text-[#6e6a63] leading-relaxed">Proyectos residenciales y comerciales con una estética contemporánea, limpia y funcional.</p>
            </div>
          </article>
          <article className="bg-[#f7f5f0] p-8 min-h-[260px] flex flex-col justify-between hover:bg-[#eee9df] transition duration-300">
            <div className="text-[10px] font-mono tracking-widest text-[#6e6a63]">03</div>
            <div>
              <h3 className="text-xl font-normal mb-2">Diseño Interior & Exterior</h3>
              <p className="text-xs text-[#6e6a63] leading-relaxed">Diseñamos el espacio completo: interiores, patios, terrazas, paisajismo y mobiliario a medida.</p>
            </div>
          </article>
          <article className="bg-[#f7f5f0] p-8 min-h-[260px] flex flex-col justify-between hover:bg-[#eee9df] transition duration-300">
            <div className="text-[10px] font-mono tracking-widest text-[#6e6a63]">04</div>
            <div>
              <h3 className="text-xl font-normal mb-2">Soluciones Modulares</h3>
              <p className="text-xs text-[#6e6a63] leading-relaxed">Sistemas constructivos eficientes, versátiles y de rápido montaje en destino.</p>
            </div>
          </article>
        </div>
      </section>

      {/* --- DESARROLLO / APORTE DE TIERRA --- */}
      <section id="desarrollos" className="bg-[#1b1b1a] text-[#f7f5f0] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#a39e93] block mb-4 font-medium">
                AC / Desarrollo Inmobiliario
              </span>
              <h2 className="text-4xl md:text-6xl font-light leading-[0.95] tracking-tight mb-6">
                Tu terreno puede ser el comienzo.
              </h2>
              <p className="text-base md:text-lg text-[#c6c1b8] font-light leading-relaxed mb-8 max-w-xl">
                Evaluamos terrenos con potencial y proponemos desarrollos donde el propietario puede participar mediante un esquema de aporte de tierra, sujeto a la factibilidad y estructura de cada proyecto.
              </p>
              <a href="#contacto" className="inline-block bg-[#f7f5f0] text-[#171717] px-8 py-4 text-[10px] font-semibold tracking-[0.15em] uppercase hover:bg-white transition shadow-md">
                Evaluar mi terreno
              </a>
            </div>

            <div 
              onClick={() => setZoomedImage("/edificio.jpg")}
              className="h-[380px] md:h-[480px] bg-[#2d2d2b] border border-neutral-800 relative overflow-hidden group cursor-pointer"
            >
              <img 
                src="/edificio.jpg" 
                alt="Desarrollo Inmobiliario AC" 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-80"
              />
              <div className="absolute bottom-4 left-4 bg-neutral-900/90 text-[#f7f5f0] px-3 py-1.5 text-[9px] font-mono tracking-widest border border-neutral-700 uppercase">
                Concepto / Desarrollo en pozo
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROPUESTA APORTE DE TIERRA --- */}
      <section className="bg-[#e9e3d8] py-24 border-t border-[#171717]/15">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[10px] tracking-[0.25em] uppercase text-[#6e6a63] block mb-3 font-medium">Aporte de tierra</span>
          <h2 className="text-4xl md:text-5xl font-light leading-tight tracking-tight mb-12">
            Transformar un terreno en un proyecto de valor.
          </h2>

          <div className="border-y border-[#171717] py-12 mb-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="text-3xl md:text-5xl font-light tracking-tight leading-tight text-[#171717]">
              Vos aportás el terreno.<br />AC desarrolla la oportunidad.
            </div>
            <div>
              <p className="text-base md:text-lg text-[#555149] font-light leading-relaxed mb-4">
                La propuesta contempla que el propietario reciba unidades como contraprestación, mientras AC estructura el proyecto y la construcción. Cada operación se analiza individualmente según ubicación, normativa, superficies, costos y mercado.
              </p>
              <p className="text-xs text-[#77736a] font-mono">
                * La estructura definitiva debe quedar establecida contractualmente y sujeta a factibilidad técnica, urbanística y económica.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-[#171717]/20">
            <div className="p-6 border-r border-b sm:border-b-0 border-[#171717]/20 min-h-[160px] flex flex-col justify-between">
              <span className="text-[10px] font-mono tracking-widest font-bold text-[#171717] uppercase">01 / ANALIZAR</span>
              <p className="text-xs text-[#6e6a63] leading-relaxed">Estudiamos el terreno y su potencial de densificación.</p>
            </div>
            <div className="p-6 border-r border-b sm:border-b-0 border-[#171717]/20 min-h-[160px] flex flex-col justify-between">
              <span className="text-[10px] font-mono tracking-widest font-bold text-[#171717] uppercase">02 / PROYECTAR</span>
              <p className="text-xs text-[#6e6a63] leading-relaxed">Definimos el producto arquitectónico y la tipología de unidades.</p>
            </div>
            <div className="p-6 border-r border-b sm:border-b-0 border-[#171717]/20 min-h-[160px] flex flex-col justify-between">
              <span className="text-[10px] font-mono tracking-widest font-bold text-[#171717] uppercase">03 / ACORDAR</span>
              <p className="text-xs text-[#6e6a63] leading-relaxed">Estructuramos la participación contractual de cada parte.</p>
            </div>
            <div className="p-6 min-h-[160px] flex flex-col justify-between">
              <span className="text-[10px] font-mono tracking-widest font-bold text-[#171717] uppercase">04 / DESARROLLAR</span>
              <p className="text-xs text-[#6e6a63] leading-relaxed">Llevamos el proyecto desde la idea conceptual hasta la llave en mano.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROYECTOS --- */}
      <section id="proyectos" className="max-w-7xl mx-auto px-6 py-24 border-t border-[#171717]/15">
        <span className="text-[10px] tracking-[0.25em] uppercase text-[#6e6a63] block mb-3 font-medium">Catálogo de Soluciones</span>
        <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4">Unidades y Soluciones AC</h2>
        <p className="text-[#6e6a63] mb-12 max-w-xl font-light">Hacé clic en cualquiera de las opciones para explorar galerías completas y fichas técnicas.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modelsData.map((model) => (
            <div 
              key={model.id}
              className="bg-[#eee9df]/50 border border-[#171717]/15 p-6 group hover:border-[#171717] transition duration-300 flex flex-col justify-between"
            >
              <div>
                <div 
                  onClick={(e) => {
                    e.stopPropagation();
                    setZoomedImage(model.image);
                  }}
                  className="overflow-hidden border border-[#171717]/15 mb-4 relative h-[220px] cursor-pointer bg-[#eee9df]"
                  title="Ampliar foto principal"
                >
                  <img 
                    src={model.image} 
                    alt={model.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-[#171717] text-[#fcfbf8] text-[9px] font-mono px-2 py-1">🔍 Ampliar</span>
                  </div>
                </div>

                <div onClick={() => handleOpenModal(model)} className="cursor-pointer">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-[10px] font-mono text-[#6e6a63] bg-[#f7f5f0] px-2 py-1 border border-[#171717]/10">
                      {model.size}
                    </span>
                    <span className="text-[10px] font-mono text-[#6e6a63]">{model.dimensions}</span>
                  </div>
                  <h3 className="text-xl font-normal mb-2 text-[#171717]">{model.name}</h3>
                  <p className="text-[#6e6a63] text-xs mb-6 font-light leading-relaxed line-clamp-3">{model.description}</p>
                </div>
              </div>

              <div onClick={() => handleOpenModal(model)} className="cursor-pointer pt-4 border-t border-[#171717]/15">
                <div className="mb-4">
                  <span className="block text-lg text-[#171717] font-normal">{model.price}</span>
                  <span className="text-[10px] text-[#6e6a63] uppercase tracking-wider font-mono">{model.condition}</span>
                </div>
                <span className="text-[#171717] font-medium text-[10px] tracking-[0.15em] uppercase inline-flex items-center gap-1 group-hover:underline">
                  Ver detalles completos &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECCIÓN INTERIOR & EXTERIOR --- */}
      <section className="bg-[#eee9df] py-24 border-t border-[#171717]/15">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[10px] tracking-[0.25em] uppercase text-[#6e6a63] block mb-3 font-medium">Interior & Exterior</span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4">Del proyecto al último detalle.</h2>
          <p className="text-[#6e6a63] mb-12 max-w-xl font-light">Diseño integral de espacios para transformar el modo en que se viven.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#f7f5f0] border border-[#171717]/15 p-6 flex flex-col justify-between group hover:border-[#171717] transition duration-300">
              <div>
                <div 
                  onClick={() => setZoomedImage("/interior-1.jpg")}
                  className="overflow-hidden border border-[#171717]/15 mb-6 relative h-[260px] cursor-pointer"
                >
                  <img 
                    src="/interior-1.jpg" 
                    alt="Diseño de Interiores" 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <h3 className="text-2xl font-light text-[#171717] mb-3">Diseño de Interiores</h3>
                <p className="text-[#6e6a63] text-sm font-light leading-relaxed mb-6">
                  Creación de ambientes armónicos optimizando la distribución de livings, cocinas integradas completas, comedores y habitaciones con mobiliario a medida.
                </p>
              </div>
              
              <button 
                onClick={() => setSelectedService(professionalServicesData[0])}
                className="w-full bg-[#171717] hover:bg-[#2c2b29] text-[#fcfbf8] font-medium py-3 text-[10px] tracking-[0.15em] uppercase transition"
              >
                Ver propuesta de Interiores &rarr;
              </button>
            </div>

            <div className="bg-[#f7f5f0] border border-[#171717]/15 p-6 flex flex-col justify-between group hover:border-[#171717] transition duration-300">
              <div>
                <div 
                  onClick={() => setZoomedImage("/exterior.jpg")}
                  className="overflow-hidden border border-[#171717]/15 mb-6 relative h-[260px] cursor-pointer"
                >
                  <img 
                    src="/exterior.jpg" 
                    alt="Diseño de Jardines y Exteriores" 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <h3 className="text-2xl font-light text-[#171717] mb-3">Diseño de Exteriores & Paisajismo</h3>
                <p className="text-[#6e6a63] text-sm font-light leading-relaxed mb-6">
                  Paisajismo integral, diseño de galerías, iluminación exterior, senderos y espacios verdes conectados de forma fluida con la arquitectura.
                </p>
              </div>
              
              <button 
                onClick={() => setSelectedService(professionalServicesData[1])}
                className="w-full bg-[#171717] hover:bg-[#2c2b29] text-[#fcfbf8] font-medium py-3 text-[10px] tracking-[0.15em] uppercase transition"
              >
                Ver propuesta de Exteriores &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- SISTEMA MODULAR --- */}
      <section id="sistema" className="max-w-7xl mx-auto px-6 py-24 border-t border-[#171717]/15">
        <span className="text-[10px] tracking-[0.25em] uppercase text-[#6e6a63] block mb-3 font-medium">AC Modular</span>
        <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4">Viviendas que se adaptan.</h2>
        <p className="text-[#6e6a63] mb-12 max-w-xl font-light">
          Soluciones modulares contemporáneas para vivienda, inversión, turismo, ampliaciones y nuevos desarrollos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 bg-[#eee9df]/40 border border-[#171717]/15">
            <h3 className="font-normal text-lg mb-2">Velocidad de obra</h3>
            <p className="text-xs text-[#6e6a63] leading-relaxed">Reducción drástica de tiempos en comparación con la construcción tradicional.</p>
          </div>
          <div className="p-8 bg-[#eee9df]/40 border border-[#171717]/15">
            <h3 className="font-normal text-lg mb-2">Aislación Térmica</h3>
            <p className="text-xs text-[#6e6a63] leading-relaxed">Paneles de alta densidad que garantizan confort térmico todo el año.</p>
          </div>
          <div className="p-8 bg-[#eee9df]/40 border border-[#171717]/15">
            <h3 className="font-normal text-lg mb-2">Eficiencia y Solidez</h3>
            <p className="text-xs text-[#6e6a63] leading-relaxed">Estructuras metálicas optimizadas de gran resistencia y durabilidad.</p>
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section id="faq" className="max-w-7xl mx-auto px-6 py-24 border-t border-[#171717]/15">
        <span className="text-[10px] tracking-[0.25em] uppercase text-[#6e6a63] block mb-3 font-medium">Dudas frecuentes</span>
        <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4">Preguntas Frecuentes</h2>
        <p className="text-[#6e6a63] mb-8 max-w-xl font-light">Resolvé inquietudes sobre desarrollos, servicios de diseño y sistemas constructivos.</p>
        
        <div className="flex gap-2 mb-8 border-b border-[#171717]/15 pb-4 flex-wrap">
          <button
            onClick={() => setActiveFaqTab('construccion')}
            className={`px-4 py-2 text-[10px] font-mono uppercase tracking-wider transition ${
              activeFaqTab === 'construccion'
                ? 'bg-[#171717] text-[#fcfbf8]'
                : 'bg-[#eee9df] text-[#6e6a63] hover:text-[#171717]'
            }`}
          >
            Aporte de Tierra
          </button>
          <button
            onClick={() => setActiveFaqTab('diseno')}
            className={`px-4 py-2 text-[10px] font-mono uppercase tracking-wider transition ${
              activeFaqTab === 'diseno'
                ? 'bg-[#171717] text-[#fcfbf8]'
                : 'bg-[#eee9df] text-[#6e6a63] hover:text-[#171717]'
            }`}
          >
            Diseño Interior y Exterior
          </button>
          <button
            onClick={() => setActiveFaqTab('sistema')}
            className={`px-4 py-2 text-[10px] font-mono uppercase tracking-wider transition ${
              activeFaqTab === 'sistema'
                ? 'bg-[#171717] text-[#fcfbf8]'
                : 'bg-[#eee9df] text-[#6e6a63] hover:text-[#171717]'
            }`}
          >
            Sistema Modular
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqData[activeFaqTab].map((faq, idx) => (
            <div key={idx} className="p-6 bg-[#eee9df]/30 border border-[#171717]/15">
              <h3 className="font-normal text-base text-[#171717] mb-2">{faq.pregunta}</h3>
              <p className="text-xs text-[#6e6a63] leading-relaxed font-light">{faq.respuesta}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- CONTACTO --- */}
      <section id="contacto" className="bg-[#d8d0c4] py-24 border-t border-[#171717]/15">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#6e6a63] block mb-3 font-medium">AC Estudio</span>
            <h2 className="text-4xl md:text-6xl font-light leading-[0.95] tracking-tight mb-6">
              Hagamos realidad<br />la próxima idea.
            </h2>
            <p className="text-base md:text-lg text-[#5c574f] font-light leading-relaxed mb-6">
              ¿Tenés un terreno? ¿Querés construir? ¿Necesitás diseñar tu casa, departamento o espacio comercial?
            </p>
            <p className="text-xs font-mono uppercase tracking-widest text-[#171717]">
              Córdoba, Argentina
            </p>
          </div>

          <div className="bg-[#f7f5f0] border border-[#171717]/20 p-8 shadow-sm">
            <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-[#6e6a63] mb-2 font-mono">Nombre</label>
                <input 
                  type="text" 
                  required
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="w-full bg-[#f7f5f0] border border-[#171717]/20 px-4 py-3 text-xs text-[#171717] focus:outline-none focus:border-[#171717]" 
                  placeholder="Tu nombre completo" 
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-[#6e6a63] mb-2 font-mono">Teléfono / WhatsApp</label>
                <input 
                  type="text" 
                  required
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  className="w-full bg-[#f7f5f0] border border-[#171717]/20 px-4 py-3 text-xs text-[#171717] focus:outline-none focus:border-[#171717]" 
                  placeholder="Ej: +54 9 351..." 
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-[#6e6a63] mb-2 font-mono">Mensaje</label>
                <textarea 
                  rows={4} 
                  required
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  className="w-full bg-[#f7f5f0] border border-[#171717]/20 px-4 py-3 text-xs text-[#171717] focus:outline-none focus:border-[#171717]" 
                  placeholder="Hola, quiero consultar por..." 
                />
              </div>
              <button type="submit" className="w-full bg-[#171717] hover:bg-[#2c2b29] text-[#fcfbf8] font-semibold py-3.5 text-[10px] tracking-[0.15em] uppercase transition flex items-center justify-center gap-2">
                Hablar con AC por WhatsApp &rarr;
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="border-t border-[#171717]/15 py-8 bg-[#f7f5f0]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] tracking-[0.15em] uppercase text-[#6e6a63]">
          <span className="font-bold text-[#171717]">
            <a 
              href="https://marcelomoyano.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline text-[#171717]"
            >
              AMsolutions
            </a>
            {' - '}
            <a 
              href="https://www.instagram.com/ac.constructora.ar/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline text-[#171717]"
            >
              AC ESTUDIO
            </a>
          </span>
          <span>Desarrollos · Arquitectura · Diseño Interior & Exterior</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>

      {/* --- MODAL DETALLE DE MODELOS --- */}
      {selectedModel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#f7f5f0] border border-[#171717] max-w-xl w-full max-h-[90vh] p-6 relative shadow-2xl overflow-y-auto">
            <button 
              onClick={() => setSelectedModel(null)}
              className="absolute top-4 right-4 text-[#171717] hover:text-[#6e6a63] text-sm font-mono p-2 z-20 bg-[#eee9df] border border-[#171717]/20"
            >
              [✕]
            </button>

            <div 
              onClick={() => setZoomedImage(activeModalImage)}
              className="mb-4 overflow-hidden border border-[#171717]/15 relative h-[240px] cursor-pointer group"
            >
              <img 
                src={activeModalImage} 
                alt={selectedModel.name} 
                className="w-full h-full object-cover"
              />
              {selectedModel.gallery.length > 1 && (
                <>
                  <button 
                    onClick={handlePrevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#f7f5f0]/80 hover:bg-[#f7f5f0] text-[#171717] p-2 border border-[#171717]/20"
                  >
                    &#10094;
                  </button>
                  <button 
                    onClick={handleNextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#f7f5f0]/80 hover:bg-[#f7f5f0] text-[#171717] p-2 border border-[#171717]/20"
                  >
                    &#10095;
                  </button>
                </>
              )}
            </div>

            <h2 className="text-2xl font-light mb-2">{selectedModel.name}</h2>
            <p className="text-xs text-[#6e6a63] mb-4">{selectedModel.description}</p>
            
            <a 
              href="#contacto" 
              onClick={() => setSelectedModel(null)}
              className="block w-full bg-[#171717] text-[#fcfbf8] py-3 text-[10px] tracking-[0.15em] uppercase text-center"
            >
              Consultar opción
            </a>
          </div>
        </div>
      )}

      {/* --- MODAL DETALLE DE SERVICIO --- */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#f7f5f0] border border-[#171717] max-w-xl w-full max-h-[90vh] p-6 relative shadow-2xl overflow-y-auto">
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-[#171717] hover:text-[#6e6a63] text-sm font-mono p-2 z-20 bg-[#eee9df] border border-[#171717]/20"
            >
              [✕]
            </button>
            <h2 className="text-2xl font-light mb-2">{selectedService.title}</h2>
            <p className="text-xs text-[#6e6a63] mb-4">{selectedService.description}</p>
            <a 
              href="#contacto" 
              onClick={() => setSelectedService(null)}
              className="block w-full bg-[#171717] text-[#fcfbf8] py-3 text-[10px] tracking-[0.15em] uppercase text-center"
            >
              Cotizar Servicio
            </a>
          </div>
        </div>
      )}

      {/* --- LIGHTBOX --- */}
      {zoomedImage && (
        <div 
          onClick={() => setZoomedImage(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 cursor-zoom-out"
        >
          <img 
            src={zoomedImage} 
            alt="Vista ampliada" 
            className="max-w-full max-h-[90vh] object-contain border border-[#f7f5f0]"
          />
        </div>
      )}
    </div>
  );
}