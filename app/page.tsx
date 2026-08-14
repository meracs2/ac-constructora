'use client';

import { useState } from 'react';

interface ModelDetail {
  id: number;
  name: string;
  size: number;
  dimensions: string;
  price: string;
  oldPrice: string;
  condition: string;
  description: string;
  includes: string[];
  features: string[];
}

const modelsData: ModelDetail[] = [
  {
    id: 1,
    name: "Modelo Loft Compacto",
    size: 15,
    dimensions: "6.00m x 2.50m x 2.25m",
    price: "$36.000.000",
    oldPrice: "$42.950.000",
    condition: "Llave en mano",
    description: "Espacio inteligente diseñado para el máximo confort. Ideal como estudio profesional o vivienda unifamiliar compacta.",
    includes: [
      "Baño completo",
      "Cocina equipada",
      "Placard / Guardado",
      "Pisos vinílicos SPC",
      "Aberturas de aluminio",
      "Instalaciones completas",
      "Exterior listo para usar"
    ],
    features: [
      "Aislación térmica y acústica",
      "Materiales premium",
      "Construcción rápida y optimizada",
      "Terminaciones de alta calidad",
      "Apto crédito",
      "Proyecto 100% personalizado"
    ]
  },
  {
    id: 2,
    name: "Modelo Studio Familiar",
    size: 30,
    dimensions: "12.00m x 2.50m x 2.25m",
    price: "$64.000.000",
    oldPrice: "$72.500.000",
    condition: "Llave en mano",
    description: "Mayor amplitud y comodidad con distribución optimizada en dos módulos integrados para un hogar funcional.",
    includes: [
      "Baño completo con ducha",
      "Cocina comedor integrada",
      "Dormitorio principal con placard",
      "Pisos vinílicos SPC",
      "Aberturas de aluminio DVH",
      "Instalaciones completas de agua y luz",
      "Revestimiento interior y exterior"
    ],
    features: [
      "Doble módulo acoplable",
      "Aislación de poliuretano inyectado",
      "Diseño minimalista y moderno",
      "Bajo mantenimiento",
      "Rápida instalación en terreno",
      "Ampliaciones futuras disponibles"
    ]
  },
  {
    id: 3,
    name: "Modelo Premium Duplex",
    size: 45,
    dimensions: "Combinado en L / 2 Niveles",
    price: "$92.000.000",
    oldPrice: "$105.000.000",
    condition: "Llave en mano",
    description: "La máxima expresión de la arquitectura modular industrial, pensada para quienes buscan amplitud, diseño y categoría.",
    includes: [
      "Dos baños completos",
      "Cocina amplia con isla",
      "Dos dormitorios con espacios de guardado",
      "Estar comedor integrado muy luminoso",
      "Pisos de alta gama",
      "Aberturas de aluminio reforzado",
      "Sistema eléctrico y sanitario completo"
    ],
    features: [
      "Estructura de máxima resistencia",
      "Confort térmico superior todo el año",
      "Terminaciones estéticas de vanguardia",
      "Diseño exclusivo personalizado",
      "Trasladable y modular",
      "Ideal para vivienda permanente o renta"
    ]
  }
];

export default function Home() {
  const [selectedModel, setSelectedModel] = useState<ModelDetail | null>(null);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-slate-400 selection:text-neutral-950">
      {/* --- NAVBAR --- */}
      <header className="sticky top-0 z-50 bg-neutral-900/90 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-light tracking-widest uppercase text-slate-200">
            AC <span className="font-bold text-slate-400">Constructora</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
            <a href="#tipologias" className="hover:text-slate-200 transition-colors">Tipologías</a>
            <a href="#proyectos" className="hover:text-slate-200 transition-colors">Proyectos</a>
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
            src="/foto-hero.png" 
            alt="AC Constructora - Arquitectura Modular" 
            className="w-full h-full object-cover object-center brightness-125"
          />
          <div className="absolute inset-0 bg-gradient-to-bl from-neutral-950/60 via-neutral-950/30 to-neutral-950/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 h-full flex flex-col justify-between py-12">
          <div className="self-end text-right max-w-xl">
            <span className="text-slate-300 font-mono text-xs tracking-widest uppercase mb-3 inline-block bg-neutral-950/80 px-3 py-1.5 border border-neutral-700 shadow-lg">
              Arquitectura Modular de Vanguardia
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
              <a href="#tipologias" className="bg-slate-200 text-neutral-950 px-8 py-4 font-medium text-xs tracking-widest uppercase text-center hover:bg-white transition shadow-lg">
                Ver Modelos
              </a>
              <a href="#contacto" className="border border-neutral-400 hover:border-white text-neutral-100 bg-neutral-950/40 backdrop-blur-sm px-8 py-4 font-medium text-xs tracking-widest uppercase text-center transition">
                Contactar Asesor
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- TIPOLOGÍAS --- */}
      <section id="tipologias" className="max-w-6xl mx-auto px-6 py-20 border-t border-neutral-900">
        <h2 className="text-3xl font-light tracking-wide mb-2">Nuestras Tipologías</h2>
        <p className="text-neutral-400 mb-12 max-w-xl font-light">Hacé clic en cualquier modelo para ver su información técnica y detalles.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modelsData.map((model) => (
            <div 
              key={model.id}
              onClick={() => setSelectedModel(model)}
              className="bg-neutral-900/40 border border-neutral-800/80 rounded-none p-6 group hover:border-slate-500 transition duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-mono text-slate-400 bg-neutral-950 px-2.5 py-1 border border-neutral-800">
                    {model.size}m²
                  </span>
                  <span className="text-xs font-mono text-neutral-500">{model.dimensions}</span>
                </div>
                <h3 className="text-xl font-normal mb-2 text-neutral-200">{model.name}</h3>
                <p className="text-neutral-400 text-sm mb-6 font-light line-clamp-2">{model.description}</p>
              </div>

              <div>
                <div className="mb-6 pt-4 border-t border-neutral-800/60">
                  <span className="text-xs text-neutral-500 line-through">Anterior: {model.oldPrice}</span>
                  <span className="block text-2xl text-slate-200 font-light">{model.price}</span>
                  <span className="text-xs text-slate-400 uppercase tracking-wider font-mono">{model.condition}</span>
                </div>
                <span className="text-slate-400 font-medium text-xs tracking-widest uppercase inline-flex items-center gap-1 group-hover:text-white transition-all">
                  Ver especificaciones &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- MODAL ADAPTADO A MÓVIL --- */}
      {selectedModel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/85 backdrop-blur-md">
          <div className="bg-neutral-900 border border-neutral-800 max-w-lg w-full max-h-[85vh] p-6 relative shadow-2xl overflow-y-auto">
            <button 
              onClick={() => setSelectedModel(null)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white text-xl font-mono p-2 z-10"
            >
              [✕]
            </button>

            <div className="mb-5 pr-8 border-b border-neutral-800 pb-4">
              <span className="text-slate-400 font-mono text-xs tracking-widest uppercase mb-1 inline-block">
                {selectedModel.dimensions} • {selectedModel.size}m²
              </span>
              <h2 className="text-xl font-light text-neutral-100">{selectedModel.name}</h2>
              <div className="mt-2 flex items-baseline gap-3">
                <span className="text-xl font-normal text-slate-200">{selectedModel.price}</span>
                <span className="text-xs text-neutral-500 line-through">{selectedModel.oldPrice}</span>
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
              Consultar por este modelo
            </a>
          </div>
        </div>
      )}

      {/* --- PROYECTOS --- */}
      <section id="proyectos" className="max-w-6xl mx-auto px-6 py-20 border-t border-neutral-900">
        <h2 className="text-3xl font-light tracking-wide mb-2">Proyectos Realizados</h2>
        <p className="text-neutral-400 mb-12 max-w-xl font-light">Mirá algunas de nuestras obras entregadas y en proceso en video.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="bg-neutral-900/40 border border-neutral-800/80 p-4 flex flex-col items-center justify-center min-h-[400px]">
            <div className="w-full flex justify-center overflow-hidden">
              <iframe 
                src="https://www.instagram.com/p/TU_URL_DE_INSTAGRAM_AQUÍ/embed" 
                className="w-full max-w-[320px] h-[480px] border-0" 
                scrolling="no" 
                allowTransparency={true}
              ></iframe>
            </div>
            <span className="text-xs font-mono text-neutral-500 mt-4 uppercase tracking-wider">Recorrido de Obra • Instagram</span>
          </div>

          <div className="bg-neutral-900/40 border border-neutral-800/80 p-8 flex flex-col justify-between h-full min-h-[400px]">
            <div>
              <span className="text-xs font-mono text-slate-400 bg-neutral-950 px-2.5 py-1 border border-neutral-800 uppercase tracking-widest">
                Proceso & Calidad
              </span>
              <h3 className="text-2xl font-light text-neutral-100 mt-4 mb-4">Seguinos en redes para ver más entregas</h3>
              <p className="text-neutral-400 text-sm font-light leading-relaxed mb-6">
                Compartimos el paso a paso de cada montaje, detalles de terminaciones y la experiencia de nuestros clientes al recibir su módulo llave en mano.
              </p>
            </div>

            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-neutral-400 hover:border-white text-neutral-100 bg-neutral-950 px-6 py-3 font-medium text-xs tracking-widest uppercase text-center transition block"
            >
              Ver perfil de Instagram &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* --- SISTEMA --- */}
      <section id="sistema" className="max-w-6xl mx-auto px-6 py-20 border-t border-neutral-900">
        <h2 className="text-3xl font-light tracking-wide mb-2">El Sistema</h2>
        <p className="text-neutral-400 mb-12 max-w-xl font-light">Por qué elegir construcción modular en contenedores marítimos.</p>
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
        <p className="text-neutral-400 mb-12 max-w-xl font-light">Todo lo que necesitás saber sobre la construcción modular.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-neutral-900/30 border border-neutral-800/80">
            <h3 className="font-normal text-slate-300 mb-2 tracking-wide">¿Cuánto demora la fabricación y entrega?</h3>
            <p className="text-sm text-neutral-400 font-light">Los plazos varían según la tipología, pero por lo general oscilan entre 45 y 60 días desde la aprobación del proyecto.</p>
          </div>
          <div className="p-6 bg-neutral-900/30 border border-neutral-800/80">
            <h3 className="font-normal text-slate-300 mb-2 tracking-wide">¿Se pueden ampliar o mudar a futuro?</h3>
            <p className="text-sm text-neutral-400 font-light">Sí, al ser estructuras modulares podés acoplar nuevos módulos cuando lo necesites o incluso trasladarlos de terreno.</p>
          </div>
          <div className="p-6 bg-neutral-900/30 border border-neutral-800/80">
            <h3 className="font-normal text-slate-300 mb-2 tracking-wide">¿Cómo es la aislación térmica y acústica?</h3>
            <p className="text-sm text-neutral-400 font-light">Utilizamos paneles de poliuretano inyectado de alta densidad y revestimientos interiores que garantizan el confort todo el año.</p>
          </div>
          <div className="p-6 bg-neutral-900/30 border border-neutral-800/80">
            <h3 className="font-normal text-slate-300 mb-2 tracking-wide">¿Necesitan cimientos especiales?</h3>
            <p className="text-sm text-neutral-400 font-light">Requieren una platea de hormigón básica o pilotes perimetrales, mucho más económica y rápida que una cimentación tradicional.</p>
          </div>
        </div>
      </section>

      {/* --- CONTACTO --- */}
      <section id="contacto" className="max-w-6xl mx-auto px-6 py-20 border-t border-neutral-900">
        <div className="max-w-xl bg-neutral-900/40 border border-neutral-800 p-8">
          <h2 className="text-3xl font-light tracking-wide mb-2">Contacto</h2>
          <p className="text-neutral-400 mb-8 text-sm font-light">Dejanos tu mensaje y nos ponemos en contacto con vos.</p>
          
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
              <textarea rows={4} className="w-full bg-neutral-950 border border-neutral-800 rounded-none px-4 py-3 text-sm text-neutral-200 focus:outline-none focus:border-slate-400" placeholder="Contanos tu proyecto..." />
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