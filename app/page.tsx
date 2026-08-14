'use client';

import { useState } from 'react';
import Image from 'next/image';

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
    dimensions: "Unidades de 1 y 2 dormitorios",
    price: "Consultar",
    oldPrice: "",
    condition: "Pozo / Llave en mano",
    description: "Desarrollo edilicio exclusivo pensado para la vida urbana moderna, con excelente iluminación natural, terminaciones de categoría y ubicaciones estratégicas.",
    includes: [
      "Balcones con excelente vista",
      "Cocheras y espacios comunes",
      "Terminaciones de categoría",
      "Aberturas de aluminio DVH",
      "Instalaciones completas"
    ],
    features: [
      "Diseño de vanguardia",
      "Ubicaciones privilegiadas",
      "Alta rentabilidad y valorización",
      "Espacios comunes equipados"
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
    description: "Sistema industrializado avanzado con estructura metálica y paneles de aislamiento térmico de alta densidad. Montaje rápido y eficiente en destino.",
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
    image: "/contenedor-1.jpg",
    gallery: [
      "/contenedor-1.jpg",
      "/contenedor-2.jpg",
      "/contenedor-3.jpg"
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
        pregunta: "¿Cuánto demora la fabricación y entrega de una casa modular?",
        respuesta: "Los plazos varían según la tipología y complejidad, pero oscilan entre 45 y 60 días desde la aprobación del proyecto ejecutivo y la firma del contrato."
      },
      {
        pregunta: "¿Es posible ampliar una vivienda modular AC a futuro?",
        respuesta: "¡Sí! El sistema modular permite acoplar nuevos módulos habitacionales de forma rápida y sencilla, adaptando la vivienda a las nuevas necesidades de tu familia."
      },
      {
        pregunta: "¿Qué tipo de fundaciones necesitan las construcciones modulares?",
        respuesta: "Generalmente se utilizan pilotes de hormigón o plateas, dependiendo de las características del suelo y el modelo elegido. Realizamos un estudio previo en cada terreno."
      },
      {
        pregunta: "¿Las construcciones modulares son aptas para cualquier clima?",
        respuesta: "Absolutamente. Gracias a nuestros paneles de aislamiento térmico de alta densidad, garantizan un excelente confort interior tanto en climas fríos como calurosos."
      },
      {
        pregunta: "¿Se pueden trasladar las casas modulares a otro terreno?",
        respuesta: "Sí, es una de las grandes ventajas. Si bien implica un costo de logística y montaje, la estructura metálica permite desarmar y reubicar la vivienda en una nueva ubicación."
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
        pregunta: "¿En qué consiste exactamente el sistema constructivo industrializado?",
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
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-slate-400 selection:text-neutral-950">
      {/* --- NAVBAR --- */}
      <header className="sticky top-0 z-50 bg-neutral-900/90 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-light tracking-widest uppercase text-slate-200">
            AC <span className="font-bold text-slate-400">Constructora</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
            <a href="#proyectos" className="hover:text-slate-200 transition-colors">Proyectos</a>
            <a href="#tipologias" className="hover:text-slate-200 transition-colors">Servicios</a>
            <a href="#diseno" className="hover:text-slate-200 transition-colors">Diseño</a>
            <a href="#sistema" className="hover:text-slate-200 transition-colors">Sistema</a>
            <a href="#faq" className="hover:text-slate-200 transition-colors">FAQ</a>
            <a href="#contacto" className="hover:text-slate-200 transition-colors">Contacto</a>
          </nav>

          <a 
            href="#contacto" 
            className="bg-slate-200 hover:bg-white text-neutral-950 px-5 py-2.5 rounded-none text-xs font-semibold tracking-widest uppercase transition-all shadow-md"
          >
            Cotizar
          </a>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[90vh] flex items-center justify-between overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/edificio.jpg" 
            alt="AC Constructora - Edificio de Departamentos" 
            className="w-full h-full object-cover object-center brightness-125"
          />
          <div className="absolute inset-0 bg-gradient-to-bl from-neutral-950/60 via-neutral-950/30 to-neutral-950/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 h-full flex flex-col justify-between py-12">
          <div className="self-end text-right max-w-xl">
            <span className="text-slate-300 font-mono text-xs tracking-widest uppercase mb-3 inline-block bg-neutral-950/80 px-3 py-1.5 border border-neutral-700 shadow-lg">
              Desarrollo, Diseño y Viviendas Modulares
            </span>
            <h1 className="text-3xl md:text-5xl font-extralight tracking-tight leading-tight text-neutral-100">
              Espacios industriales, sustentables y de <span className="font-bold text-slate-300">diseño minimalista.</span>
            </h1>
          </div>

          <div className="self-start text-left max-w-xl">
            <p className="text-neutral-200 text-base md:text-lg mb-6 leading-relaxed font-light">
              Construimos tu hogar o proyecto comercial con un sistema rápido, eficiente y de calidad superior.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#proyectos" className="bg-slate-200 text-neutral-950 px-8 py-4 font-medium text-xs tracking-widest uppercase text-center hover:bg-white transition shadow-lg">
                Ver Proyectos
              </a>
              <a href="#contacto" className="border border-neutral-400 hover:border-white text-neutral-100 bg-neutral-950/40 backdrop-blur-sm px-8 py-4 font-medium text-xs tracking-widest uppercase text-center transition">
                Contactar Asesor
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- 1. PROYECTO DESTACADO --- */}
      <section id="proyectos" className="max-w-6xl mx-auto px-6 py-20 border-t border-neutral-900">
        <span className="text-xs font-mono text-slate-400 bg-neutral-950 px-2.5 py-1 border border-neutral-800 uppercase tracking-widest mb-3 inline-block">
          Casas Modulares
        </span>
        <h2 className="text-3xl font-light tracking-wide mb-2">Proyecto Destacado</h2>
        <p className="text-neutral-400 mb-12 max-w-xl font-light">Innovación en arquitectura industrializada y montaje rápido en destino.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-neutral-900/40 border border-neutral-800/80 p-6 md:p-8">
          <div 
            onClick={() => setZoomedImage("/contenedor-1.jpg")}
            className="overflow-hidden border border-neutral-800 relative h-[350px] cursor-pointer group"
            title="Hacer clic para ampliar imagen"
          >
            <img 
              src="/contenedor-1.jpg" 
              alt="Casas Modulares AC Constructora" 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="bg-neutral-950/80 text-white text-xs font-mono px-3 py-1.5 border border-neutral-700">🔍 Ampliar imagen</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">Sistema Habitacional Avanzado</span>
            <h3 className="text-2xl font-light mb-4 text-neutral-100">Desarrollo de Viviendas Modulares Eficientes</h3>
            <p className="text-neutral-300 text-sm font-light leading-relaxed mb-6">
              Nuestras casas modulares combinan estructura metálica de alta resistencia con paneles de aislamiento térmico de última generación. Diseñadas para garantizar durabilidad, confort absoluto y eficiencia energética en cualquier tipo de terreno.
            </p>
            <ul className="space-y-2 mb-8">
              <li className="text-xs text-neutral-300 flex items-center gap-2 font-light"><span className="text-slate-500 font-mono">✓</span> Estructura sismorresistente certificada</li>
              <li className="text-xs text-neutral-300 flex items-center gap-2 font-light"><span className="text-slate-500 font-mono">✓</span> Instalaciones embutidas de primera calidad</li>
              <li className="text-xs text-neutral-300 flex items-center gap-2 font-light"><span className="text-slate-500 font-mono">✓</span> Terminaciones listas para habitar en menor tiempo</li>
            </ul>
            <a href="#contacto" className="inline-block bg-slate-200 hover:bg-white text-neutral-950 font-medium px-6 py-3 text-xs tracking-widest uppercase transition">
              Consultar por este Proyecto
            </a>
          </div>
        </div>
      </section>

      {/* --- 2. TARJETAS --- */}
      <section id="tipologias" className="max-w-6xl mx-auto px-6 py-20 border-t border-neutral-900">
        <span className="text-xs font-mono text-slate-400 bg-neutral-950 px-2.5 py-1 border border-neutral-800 uppercase tracking-widest mb-3 inline-block">
          Nuestras Soluciones
        </span>
        <h2 className="text-3xl font-light tracking-wide mb-2">Propuestas Integrales</h2>
        <p className="text-neutral-400 mb-12 max-w-xl font-light">Hacé clic en cualquiera de las opciones para ver el detalle completo y su galería de fotos.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modelsData.map((model) => (
            <div 
              key={model.id}
              className="bg-neutral-900/40 border border-neutral-800/80 rounded-none p-6 group hover:border-slate-500 transition duration-300 flex flex-col justify-between"
            >
              <div>
                <div 
                  onClick={(e) => {
                    e.stopPropagation();
                    setZoomedImage(model.image);
                  }}
                  className="overflow-hidden border border-neutral-800 mb-4 relative h-[200px] cursor-pointer"
                  title="Ampliar foto principal"
                >
                  <img 
                    src={model.image} 
                    alt={model.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-neutral-950/80 text-white text-[10px] font-mono px-2 py-1 border border-neutral-700">🔍 Ampliar</span>
                  </div>
                </div>

                <div onClick={() => handleOpenModal(model)} className="cursor-pointer">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-mono text-slate-400 bg-neutral-950 px-2.5 py-1 border border-neutral-800">
                      {model.size}
                    </span>
                    <span className="text-xs font-mono text-neutral-500">{model.dimensions}</span>
                  </div>
                  <h3 className="text-xl font-normal mb-2 text-neutral-200">{model.name}</h3>
                  <p className="text-neutral-400 text-sm mb-6 font-light line-clamp-2">{model.description}</p>
                </div>
              </div>

              <div onClick={() => handleOpenModal(model)} className="cursor-pointer">
                <div className="mb-6 pt-4 border-t border-neutral-800/60">
                  {model.oldPrice && <span className="text-xs text-neutral-500 line-through">Anterior: {model.oldPrice}</span>}
                  <span className="block text-xl text-slate-200 font-light">{model.price}</span>
                  <span className="text-xs text-slate-400 uppercase tracking-wider font-mono">{model.condition}</span>
                </div>
                <span className="text-slate-400 font-medium text-xs tracking-widest uppercase inline-flex items-center gap-1 group-hover:text-white transition-all">
                  Ver galería y detalles &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- MODAL DE DETALLE --- */}
      {selectedModel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/85 backdrop-blur-md">
          <div className="bg-neutral-900 border border-neutral-800 max-w-xl w-full max-h-[90vh] p-6 relative shadow-2xl overflow-y-auto">
            <button 
              onClick={() => setSelectedModel(null)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white text-xl font-mono p-2 z-20 bg-neutral-950 border border-neutral-800"
            >
              [✕]
            </button>

            <div 
              onClick={() => setZoomedImage(activeModalImage)}
              className="mb-4 overflow-hidden border border-neutral-800 relative h-[240px] sm:h-[280px] cursor-pointer group select-none"
              title="Hacer clic para ampliar imagen en pantalla completa"
            >
              <img 
                src={activeModalImage} 
                alt={selectedModel.name} 
                className="w-full h-full object-cover transition duration-300"
              />

              <button 
                onClick={handlePrevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-neutral-950/80 hover:bg-neutral-900 text-white p-2 rounded-full border border-neutral-700 opacity-80 group-hover:opacity-100 transition z-10"
                title="Foto anterior"
              >
                &#10094;
              </button>

              <button 
                onClick={handleNextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-neutral-950/80 hover:bg-neutral-900 text-white p-2 rounded-full border border-neutral-700 opacity-80 group-hover:opacity-100 transition z-10"
                title="Foto siguiente"
              >
                &#10095;
              </button>

              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-neutral-950/80 text-white text-xs font-mono px-3 py-1 border border-neutral-700">🔍 Ampliar en pantalla completa</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-1.5 flex-wrap mb-5 px-2">
              {selectedModel.gallery.map((imgSrc, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveModalImage(imgSrc)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    activeModalImage === imgSrc 
                      ? 'bg-slate-200 scale-125 ring-2 ring-neutral-700' 
                      : 'bg-neutral-700 hover:bg-neutral-500'
                  }`}
                  title={`Ver foto ${idx + 1}`}
                />
              ))}
            </div>

            <div className="mb-4 pr-8 border-b border-neutral-800 pb-3">
              <span className="text-slate-400 font-mono text-xs tracking-widest uppercase mb-1 inline-block">
                {selectedModel.dimensions} • {selectedModel.size}
              </span>
              <h2 className="text-xl font-light text-neutral-100">{selectedModel.name}</h2>
              <div className="mt-2 flex items-baseline gap-3">
                <span className="text-xl font-normal text-slate-200">{selectedModel.price}</span>
                {selectedModel.oldPrice && <span className="text-xs text-neutral-500 line-through">{selectedModel.oldPrice}</span>}
                <span className="text-xs tracking-widest uppercase text-slate-400 font-mono ml-auto">{selectedModel.condition}</span>
              </div>
            </div>

            <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed mb-5 font-light">
              {selectedModel.description}
            </p>

            <div className="grid grid-cols-1 gap-5 mb-6">
              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2 border-b border-neutral-800 pb-1.5">
                  Incluye:
                </h3>
                <ul className="space-y-1.5">
                  {selectedModel.includes.map((item, idx) => (
                    <li key={idx} className="text-xs text-neutral-300 flex items-start gap-2 font-light">
                      <span className="text-slate-500 font-mono">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2 border-b border-neutral-800 pb-1.5">
                  Ventajas:
                </h3>
                <ul className="space-y-1.5">
                  {selectedModel.features.map((feature, idx) => (
                    <li key={idx} className="text-xs text-neutral-300 flex items-start gap-2 font-light">
                      <span className="text-slate-500 font-mono">+</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a 
              href="#contacto" 
              onClick={() => setSelectedModel(null)}
              className="block w-full bg-slate-200 hover:bg-white text-neutral-950 font-medium py-3 text-xs tracking-widest uppercase text-center transition shadow-lg"
            >
              Consultar por esta opción
            </a>
          </div>
        </div>
      )}

      {/* --- MODAL DE SERVICIO --- */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/85 backdrop-blur-md">
          <div className="bg-neutral-900 border border-neutral-800 max-w-2xl w-full max-h-[90vh] p-6 sm:p-8 relative shadow-2xl overflow-y-auto">
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white text-xl font-mono p-2 z-20 bg-neutral-950 border border-neutral-800"
            >
              [✕]
            </button>

            <div 
              onClick={() => setZoomedImage(selectedService.image)}
              className="mb-5 overflow-hidden border border-neutral-800 relative h-[220px] sm:h-[260px] cursor-pointer group"
              title="Ampliar imagen"
            >
              <img 
                src={selectedService.image} 
                alt={selectedService.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-neutral-950/80 text-white text-xs font-mono px-3 py-1 border border-neutral-700">🔍 Ampliar foto</span>
              </div>
            </div>

            <div className="mb-6 border-b border-neutral-800 pb-4">
              <span className="text-slate-400 font-mono text-xs tracking-widest uppercase mb-1.5 inline-block bg-neutral-950 px-2.5 py-1 border border-neutral-800">
                {selectedService.badge}
              </span>
              <h2 className="text-2xl font-light text-neutral-100">{selectedService.title}</h2>
              <p className="text-xs text-neutral-400 font-mono mt-1">{selectedService.subtitle}</p>
            </div>

            <p className="text-neutral-300 text-sm leading-relaxed mb-6 font-light">
              {selectedService.description}
            </p>

            <div className="space-y-6 mb-8">
              {selectedService.fullDetails.map((detail, idx) => (
                <div key={idx} className="bg-neutral-950/50 border border-neutral-800 p-4">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-slate-300 mb-3 border-b border-neutral-800 pb-2">
                    {detail.heading}
                  </h3>
                  <ul className="space-y-2">
                    {detail.items.map((item, iIdx) => (
                      <li key={iIdx} className="text-xs text-neutral-300 flex items-start gap-2 font-light">
                        <span className="text-slate-500 font-mono">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="bg-neutral-950/50 border border-neutral-800 p-4">
                <h3 className="text-xs font-mono uppercase tracking-widest text-slate-300 mb-3 border-b border-neutral-800 pb-2">
                  Etapas del Proyecto
                </h3>
                <ul className="space-y-2">
                  {selectedService.phases.map((phase, pIdx) => (
                    <li key={pIdx} className="text-xs text-neutral-300 flex items-start gap-2 font-light">
                      <span className="text-slate-500 font-mono">•</span> {phase}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a 
              href="#contacto" 
              onClick={() => setSelectedService(null)}
              className="block w-full bg-slate-200 hover:bg-white text-neutral-950 font-medium py-3.5 text-xs tracking-widest uppercase text-center transition shadow-lg"
            >
              Cotizar este Servicio Profesional
            </a>
          </div>
        </div>
      )}

      {/* --- LIGHTBOX --- */}
      {zoomedImage && (
        <div 
          onClick={() => setZoomedImage(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-neutral-950/95 backdrop-blur-lg cursor-zoom-out"
        >
          <button 
            onClick={() => setZoomedImage(null)}
            className="absolute top-6 right-6 text-neutral-400 hover:text-white text-2xl font-mono p-2 z-10 bg-neutral-900 border border-neutral-800"
          >
            [✕]
          </button>
          
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img 
              src={zoomedImage} 
              alt="Imagen ampliada" 
              className="max-w-full max-h-[85vh] object-contain border border-neutral-800 shadow-2xl"
            />
          </div>
        </div>
      )}

      {/* --- SECCIÓN DISEÑO INTERIOR Y EXTERIOR --- */}
      <section id="diseno" className="max-w-6xl mx-auto px-6 py-20 border-t border-neutral-900">
        <span className="text-xs font-mono text-slate-400 bg-neutral-950 px-2.5 py-1 border border-neutral-800 uppercase tracking-widest mb-3 inline-block">
          Servicios Profesionales
        </span>
        <h2 className="text-3xl font-light tracking-wide mb-2">Diseño Interior y Exterior</h2>
        <p className="text-neutral-400 mb-12 max-w-xl font-light">Espacios funcionales y estéticos integrados: livings, cocinas completas, habitaciones, jardines y galerías.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-neutral-900/40 border border-neutral-800/80 p-6 flex flex-col justify-between group hover:border-slate-500 transition duration-300">
            <div>
              <div 
                onClick={() => setZoomedImage("/interior-1.jpg")}
                className="overflow-hidden border border-neutral-800 mb-6 relative h-[240px] cursor-pointer"
                title="Ampliar foto"
              >
                <img 
                  src="/interior-1.jpg" 
                  alt="Diseño de Interiores" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-neutral-950/80 text-white text-[10px] font-mono px-2 py-1 border border-neutral-700">🔍 Ampliar Living/Interior</span>
                </div>
              </div>
              <h3 className="text-xl font-normal text-neutral-200 mb-3">Diseño de Interiores (Livings, Cocinas y Dormitorios)</h3>
              <p className="text-neutral-400 text-sm font-light leading-relaxed mb-6">
                Creación de ambientes armónicos optimizando la distribución de livings, cocinas integradas completas, comedores y habitaciones con mobiliario a medida.
              </p>
            </div>
            
            <button 
              onClick={() => setSelectedService(professionalServicesData[0])}
              className="w-full bg-neutral-950 hover:bg-neutral-900 text-slate-200 border border-neutral-700 font-medium py-3 text-xs tracking-widest uppercase transition flex items-center justify-center gap-2"
            >
              Ver detalle completo y fases &rarr;
            </button>
          </div>

          <div className="bg-neutral-900/40 border border-neutral-800/80 p-6 flex flex-col justify-between group hover:border-slate-500 transition duration-300">
            <div>
              <div 
                onClick={() => setZoomedImage("/exterior.jpg")}
                className="overflow-hidden border border-neutral-800 mb-6 relative h-[240px] cursor-pointer"
                title="Ampliar foto"
              >
                <img 
                  src="/exterior.jpg" 
                  alt="Diseño de Jardín y Exteriores" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-neutral-950/80 text-white text-[10px] font-mono px-2 py-1 border border-neutral-700">🔍 Ampliar Jardines y Patios</span>
                </div>
              </div>
              <h3 className="text-xl font-normal text-neutral-200 mb-3">Diseño de Exteriores, Patios y Jardines</h3>
              <p className="text-neutral-400 text-sm font-light leading-relaxed mb-6">
                Paisajismo integral, diseño de galerías, iluminación exterior, senderos y espacios verdes conectados de forma fluida con la arquitectura de la casa.
              </p>
            </div>
            
            <button 
              onClick={() => setSelectedService(professionalServicesData[1])}
              className="w-full bg-neutral-950 hover:bg-neutral-900 text-slate-200 border border-neutral-700 font-medium py-3 text-xs tracking-widest uppercase transition flex items-center justify-center gap-2"
            >
              Ver detalle completo y fases &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* --- SISTEMA --- */}
      <section id="sistema" className="max-w-6xl mx-auto px-6 py-20 border-t border-neutral-900">
        <h2 className="text-3xl font-light tracking-wide mb-2">El Sistema Constructivo</h2>
        <p className="text-neutral-400 mb-12 max-w-xl font-light">Por qué elegir construcción modular y industrializada de vanguardia.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-neutral-900/30 border border-neutral-800/80">
            <h3 className="font-normal text-slate-300 mb-2 tracking-wide">Velocidad de obra</h3>
            <p className="text-sm text-neutral-400 font-light">Reducción drástica de tiempos en comparación con la construcción tradicional.</p>
          </div>
          <div className="p-6 bg-neutral-900/30 border border-neutral-800/80">
            <h3 className="font-normal text-slate-300 mb-2 tracking-wide">Aislación Térmica</h3>
            <p className="text-sm text-neutral-400 font-light">Paneles de alta densidad que garantizan confort térmico todo el año.</p>
          </div>
          <div className="p-6 bg-neutral-900/30 border border-neutral-800/80">
            <h3 className="font-normal text-slate-300 mb-2 tracking-wide">Sustentabilidad</h3>
            <p className="text-sm text-neutral-400 font-light">Reutilización de estructuras metálicas de gran resistencia y durabilidad.</p>
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section id="faq" className="max-w-6xl mx-auto px-6 py-20 border-t border-neutral-900">
        <h2 className="text-3xl font-light tracking-wide mb-2">Preguntas Frecuentes</h2>
        <p className="text-neutral-400 mb-8 max-w-xl font-light">Resolvé dudas sobre los servicios de construcción, diseño y nuestro sistema.</p>
        
        <div className="flex gap-4 mb-8 border-b border-neutral-800 pb-4 flex-wrap">
          <button
            onClick={() => setActiveFaqTab('construccion')}
            className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition ${
              activeFaqTab === 'construccion'
                ? 'bg-slate-200 text-neutral-950 font-medium'
                : 'bg-neutral-900 text-neutral-400 hover:text-neutral-200'
            }`}
          >
            Construcción (Módulos y Edificios)
          </button>
          <button
            onClick={() => setActiveFaqTab('diseno')}
            className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition ${
              activeFaqTab === 'diseno'
                ? 'bg-slate-200 text-neutral-950 font-medium'
                : 'bg-neutral-900 text-neutral-400 hover:text-neutral-200'
            }`}
          >
            Diseño Interior y Exterior
          </button>
          <button
            onClick={() => setActiveFaqTab('sistema')}
            className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition ${
              activeFaqTab === 'sistema'
                ? 'bg-slate-200 text-neutral-950 font-medium'
                : 'bg-neutral-900 text-neutral-400 hover:text-neutral-200'
            }`}
          >
            Sistema Constructivo
          </button>
        </div>

        {activeFaqTab === 'construccion' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqData.construccion.map((faq, idx) => (
              <div key={idx} className="p-6 bg-neutral-900/30 border border-neutral-800/80">
                <h3 className="font-normal text-slate-300 mb-2 tracking-wide">{faq.pregunta}</h3>
                <p className="text-sm text-neutral-400 font-light">{faq.respuesta}</p>
              </div>
            ))}
          </div>
        )}

        {activeFaqTab === 'diseno' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqData.diseno.map((faq, idx) => (
              <div key={idx} className="p-6 bg-neutral-900/30 border border-neutral-800/80">
                <h3 className="font-normal text-slate-300 mb-2 tracking-wide">{faq.pregunta}</h3>
                <p className="text-sm text-neutral-400 font-light">{faq.respuesta}</p>
              </div>
            ))}
          </div>
        )}

        {activeFaqTab === 'sistema' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqData.sistema.map((faq, idx) => (
              <div key={idx} className="p-6 bg-neutral-900/30 border border-neutral-800/80">
                <h3 className="font-normal text-slate-300 mb-2 tracking-wide">{faq.pregunta}</h3>
                <p className="text-sm text-neutral-400 font-light">{faq.respuesta}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* --- CONTACTO --- */}
      <section id="contacto" className="max-w-6xl mx-auto px-6 py-20 border-t border-neutral-900">
        <div className="max-w-xl bg-neutral-900/40 border border-neutral-800 p-8">
          <h2 className="text-3xl font-light tracking-wide mb-2">Contacto</h2>
          <p className="text-neutral-400 mb-8 text-sm font-light">Dejanos tu mensaje y nos ponemos en contacto con vos para cotizar tu proyecto.</p>
          
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-2 font-mono">Nombre</label>
              <input type="text" className="w-full bg-neutral-950 border border-neutral-800 rounded-none px-4 py-3 text-sm text-neutral-200 focus:outline-none focus:border-slate-400" placeholder="Tu nombre" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-2 font-mono">Teléfono / WhatsApp</label>
              <input type="text" className="w-full bg-neutral-950 border border-neutral-800 rounded-none px-4 py-3 text-sm text-neutral-200 focus:outline-none focus:border-slate-400" placeholder="Ej: 351..." />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-2 font-mono">Mensaje</label>
              <textarea rows={4} className="w-full bg-neutral-950 border border-neutral-800 rounded-none px-4 py-3 text-sm text-neutral-200 focus:outline-none focus:border-slate-400" placeholder="Contanos si te interesa un departamento, un módulo o diseño de interiores..." />
            </div>
            <button type="submit" className="w-full bg-slate-200 hover:bg-white text-neutral-950 font-medium py-3 text-xs tracking-widest uppercase transition">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="border-t border-neutral-900 py-8 text-center text-xs text-neutral-500 font-light">
        <p>© {new Date().getFullYear()} AC Constructora. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}