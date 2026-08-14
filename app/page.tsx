'use client';

export default function Home() {
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

      {/* --- HERO SECTION CON FOTO DE FONDO --- */}
      <section className="relative max-w-6xl mx-auto px-6 py-32 md:py-44 flex flex-col items-start justify-center overflow-hidden my-6 border border-neutral-800">
        {/* Imagen de fondo del Hero */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/foto.hero.png" 
            alt="AC Constructora - Arquitectura Modular" 
            className="w-full h-full object-cover object-center"
          />
          {/* Overlay oscuro para que el texto resalte a la perfección */}
          <div className="absolute inset-0 bg-neutral-950/80 backdrop-blur-[2px]"></div>
        </div>

        {/* Contenido de texto superpuesto */}
        <div className="relative z-10 max-w-3xl">
          <span className="text-slate-400 font-mono text-xs tracking-widest uppercase mb-4 inline-block bg-neutral-900/90 px-3 py-1.5 rounded border border-slate-800">
            Arquitectura Modular de Vanguardia
          </span>
          <h1 className="text-4xl md:text-6xl font-extralight tracking-tight leading-tight mb-6 text-neutral-100">
            Espacios industriales, sustentables y de <span className="font-bold text-slate-400">diseño minimalista.</span>
          </h1>
          <p className="text-neutral-300 text-lg max-w-xl mb-10 leading-relaxed font-light">
            Construimos tu hogar o proyecto comercial con un sistema rápido, eficiente y de calidad superior.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="#tipologias" className="bg-slate-200 text-neutral-950 px-8 py-4 font-medium text-xs tracking-widest uppercase text-center hover:bg-white transition shadow-lg">
              Ver Modelos
            </a>
            <a href="#contacto" className="border border-neutral-700 hover:border-slate-400 text-neutral-200 bg-neutral-950/50 backdrop-blur px-8 py-4 font-medium text-xs tracking-widest uppercase text-center transition">
              Contactar Asesor
            </a>
          </div>
        </div>
      </section>

      {/* --- TIPOLOGÍAS --- */}
      <section id="tipologias" className="max-w-6xl mx-auto px-6 py-20 border-t border-neutral-900">
        <h2 className="text-3xl font-light tracking-wide mb-2">Nuestras Tipologías</h2>
        <p className="text-neutral-400 mb-12 max-w-xl font-light">Modelos diseñados para adaptarse a tus necesidades de espacio y confort.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-neutral-900/40 border border-neutral-800/80 rounded-none overflow-hidden group hover:border-slate-500 transition duration-300">
              <div className="h-48 bg-neutral-900 flex items-center justify-center text-neutral-600 font-mono text-sm tracking-wider">
                [ Render Modelo {item} ]
              </div>
              <div className="p-6">
                <h3 className="text-xl font-normal mb-2 text-neutral-200">Modelo Loft {item * 20}m²</h3>
                <p className="text-neutral-400 text-sm mb-6 font-light">Ideal para vivienda unifamiliar o estudio profesional completamente equipado.</p>
                <a href="#contacto" className="text-slate-400 font-medium text-xs tracking-widest uppercase inline-flex items-center gap-1 group-hover:text-white transition-all">
                  Consultar precio &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- PROYECTOS --- */}
      <section id="proyectos" className="max-w-6xl mx-auto px-6 py-20 border-t border-neutral-900">
        <h2 className="text-3xl font-light tracking-wide mb-2">Proyectos Realizados</h2>
        <p className="text-neutral-400 mb-12 max-w-xl font-light">Mirá algunas de nuestras obras entregadas y en proceso.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="h-72 bg-neutral-900/40 border border-neutral-800/80 flex items-center justify-center text-neutral-600 font-mono text-sm tracking-wider">
            [ Proyecto Destacado 1 ]
          </div>
          <div className="h-72 bg-neutral-900/40 border border-neutral-800/80 flex items-center justify-center text-neutral-600 font-mono text-sm tracking-wider">
            [ Proyecto Destacado 2 ]
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