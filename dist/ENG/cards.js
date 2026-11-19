// Vista de revisión de la tarjeta final. Contenido alineado con CONTENT.carreras de TeusGame/index.html.
const programs = {
  ITC: {
    name: 'Ingeniería en Tecnologías Computacionales',
    phrase: 'Creas el software, los datos y las redes que mueven todo.',
    color: '#7B3FE4',
    areas: ['IA y ciencia de datos', 'Ciberseguridad y redes', 'Software', 'Gráficas y videojuegos'],
    companies: ['Meta', 'Google', 'Microsoft', 'Amazon', 'Trivago', 'Oracle', 'AutoZone']
  },
  IBT: {
    name: 'Ingeniería en Biotecnología',
    phrase: 'Usas la biología para resolver retos de salud, alimentos y ambiente.',
    color: '#16955F',
    areas: ['Salud', 'Alimentos', 'Medio ambiente', 'Biología sintética'],
    companies: ['Heineken', 'Bafar', 'Innovak', 'SaveFruit', 'CIMAV']
  },
  IC: {
    name: 'Ingeniería Civil',
    phrase: 'Construyes la ciudad: estructuras, agua y movilidad.',
    color: '#C27C0E',
    areas: ['Estructuras', 'Agua', 'BIM', 'Movilidad urbana'],
    companies: ['GCC', 'Grupo CANO', 'Abitat', 'Crocsa']
  },
  IIS: {
    name: 'Ingeniería Industrial y de Sistemas',
    phrase: 'Haces que personas, recursos y datos funcionen como un reloj.',
    color: '#0B8F9B',
    areas: ['Optimización', 'Logística', 'Cadena de suministro', 'Datos para decidir'],
    companies: ['Nestlé', 'Jabil', 'Textron', 'Essilor Luxottica', 'Resideo', 'GCC']
  },
  IMT: {
    name: 'Ingeniería en Mecatrónica',
    phrase: 'Diseñas máquinas que sienten, piensan y se mueven.',
    color: '#E8611A',
    areas: ['Robots', 'Automatización', 'Drones', 'Industria 4.0'],
    companies: ['Ford', 'NVIDIA', 'Resideo', 'Grupo Bocar', 'Ripipsa']
  }
};

const script = document.querySelector('script[src*="cards.js"]');
const root = new URL('./', script.src);
const game = new URL('../TeusGame/', root);
const code = document.documentElement.dataset.program;
const app = document.querySelector('#app');
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
})[char]);
const list = (values) => values.map((value) => `<li>${escapeHtml(value)}</li>`).join('');
const image = (key) => new URL(`teus-${key.toLowerCase()}.png`, game).href;
const route = (key) => new URL(`${key}/`, root).href;
const nav = (selected) => `<nav class="program-nav" aria-label="Carreras">
  <a href="${root.href}"${selected ? '' : ' aria-current="page"'}>Todas</a>
  ${Object.keys(programs).map((key) => `<a href="${route(key)}"${selected === key ? ' aria-current="page"' : ''}>${key}</a>`).join('')}
</nav>`;
const shell = (content) => `
  <a class="skip-link" href="#contenido">Saltar al contenido</a>
  <header class="site-head wrap">
    <a class="site-brand" href="${root.href}"><span>🚀</span> DESPEGUE</a>
    <p class="review-label">Revisión de tarjetas · EIC Chihuahua</p>
  </header>
  <main class="wrap" id="contenido">${content}</main>
  <footer class="site-foot wrap">Escuela de Ingeniería y Ciencias · Tec de Monterrey, Campus Chihuahua</footer>
`;

if (!code) {
  app.innerHTML = shell(`
    <div class="intro">
      <p class="eyebrow">Misión Despegue · revisión interna</p>
      <h1>Tarjetas finales de las cinco ingenierías</h1>
      <p>Selecciona una carrera para revisar el contenido que aparece cuando un jugador la elige como favorita.</p>
    </div>
    ${nav('')}
    <div class="directory">
      ${Object.entries(programs).map(([key, program]) => `
        <a href="${route(key)}" style="--program:${program.color}" aria-label="Ver tarjeta de ${escapeHtml(program.name)}">
          <span class="badge">${key}</span>
          <h2>${escapeHtml(program.name)}</h2>
          <p>${escapeHtml(program.phrase)}</p>
          <img src="${image(key)}" alt="" width="300" height="300" loading="lazy">
        </a>`).join('')}
    </div>
  `);
} else if (programs[code]) {
  const program = programs[code];
  app.innerHTML = shell(`
    <div class="intro">
      <p class="eyebrow">Misión Despegue · revisión interna</p>
      <h1>Tarjeta final de ${code}</h1>
      <p>Vista de referencia para revisar textos, áreas y empresas de esta carrera.</p>
    </div>
    ${nav(code)}
    <div class="preview-layout">
      <article class="result-card" aria-label="Vista de la tarjeta final de ${escapeHtml(program.name)}" style="--program:${program.color}">
        <div class="card-top"><strong>🚀 DESPEGUE</strong><span>EIC · TEC CHIHUAHUA</span></div>
        <div class="card-hero">
          <img src="${image(code)}" alt="Teus representa ${escapeHtml(program.name)}" width="300" height="300">
          <div><h2>Mi cohete despegó</h2><p>Teus y yo hicimos despegar un cohete</p></div>
        </div>
        <p class="kicker">Mi carta favorita es de</p>
        <section class="win" aria-labelledby="career-title">
          <span class="badge">${code}</span>
          <h3 id="career-title">${escapeHtml(program.name)}</h3>
          <p>${escapeHtml(program.phrase)}</p>
          <h4 class="field-label">En la carrera puedes enfocarte en</h4>
          <ul class="chips">${list(program.areas)}</ul>
          <h4 class="field-label">Egresados de Campus Chihuahua trabajan en</h4>
          <ul class="chips emp">${list(program.companies)}</ul>
        </section>
        <div class="next">
          <img src="${image(code)}" alt="" width="300" height="300" loading="lazy">
          <div><strong>Siguiente paso</strong><span>Pregunta en Admisiones por <b>${code}</b>.</span></div>
        </div>
      </article>
      <aside class="side-note" aria-label="Sobre esta vista">
        <h2>Vista para directores</h2>
        <p>Esta página muestra el resultado de elegir una carrera como favorita. El puntaje y las demás cartas dependen de cada partida y por eso no aparecen en esta vista.</p>
        <p>El micrositio no está enlazado desde la página principal y se solicita a buscadores que no lo indexen. Cualquier persona con la dirección puede abrirlo.</p>
        <a href="${game.href}">Abrir TeusGame</a>
      </aside>
    </div>
  `);
} else {
  app.innerHTML = shell('<div class="intro"><h1>Carrera no encontrada</h1><p>Vuelve al listado de tarjetas.</p></div>');
}
