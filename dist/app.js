const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');

const setHeaderState = () => header.classList.toggle('scrolled', window.scrollY > 28);
setHeaderState();
window.addEventListener('scroll', setHeaderState, { passive: true });

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  nav.classList.toggle('open', !isOpen);
  document.body.style.overflow = isOpen ? '' : 'hidden';
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
    document.body.style.overflow = '';
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible')),
  { threshold: 0.12 }
);
document.querySelectorAll('.reveal').forEach((item) => revealObserver.observe(item));

const audienceContent = {
  student: {
    title: 'Tu misión: probar, preguntar y construir.',
    copy: 'Conoce cinco rutas profesionales, escucha experiencias reales y pon a prueba tus ideas en el reto de cohetes.'
  },
  family: {
    title: 'Tu misión: acompañar y llevarte algo útil.',
    copy: 'Conoce el entorno que vivirán las y los estudiantes y participa en un curso práctico de IA para el trabajo.'
  }
};

document.querySelectorAll('[data-audience]').forEach((button) => {
  button.addEventListener('click', () => {
    const key = button.dataset.audience;
    document.querySelectorAll('[data-audience]').forEach((item) => item.setAttribute('aria-selected', String(item === button)));
    document.querySelector('[data-audience-title]').textContent = audienceContent[key].title;
    document.querySelector('[data-audience-copy]').textContent = audienceContent[key].copy;
    const panel = document.querySelector('#audience-panel');
    panel.setAttribute('aria-labelledby', button.id);
  });
});

const careers = {
  biotec: {
    symbol: 'DNA',
    question: '¿Y si pudieras diseñar soluciones usando la vida?',
    title: 'Ingeniería en Biotecnología',
    description: 'Conecta biología, química y tecnología para trabajar en salud, alimentos, ambiente y procesos sostenibles.',
    topics: ['Bioprocesos', 'Innovación sostenible', 'Ciencia de laboratorio']
  },
  civil: {
    symbol: '∆',
    question: '¿Y si tus ideas pudieran sostener ciudades enteras?',
    title: 'Ingeniería Civil',
    description: 'Imagina, diseña y construye infraestructura segura y sostenible para conectar comunidades y mejorar su entorno.',
    topics: ['Estructuras', 'Ciudades sostenibles', 'Gestión de obra']
  },
  industrial: {
    symbol: '↗',
    question: '¿Y si pudieras hacer que todo funcione mejor?',
    title: 'Ingeniería Industrial y de Sistemas',
    description: 'Integra personas, datos y procesos para resolver problemas complejos y transformar organizaciones.',
    topics: ['Optimización', 'Analítica', 'Innovación de procesos']
  },
  mecatronica: {
    symbol: '⚙',
    question: '¿Y si una máquina pudiera ejecutar tu idea?',
    title: 'Ingeniería Mecatrónica',
    description: 'Combina mecánica, electrónica, control y programación para crear sistemas inteligentes y automatizados.',
    topics: ['Robótica', 'Automatización', 'Diseño inteligente']
  },
  computacion: {
    symbol: '</>',
    question: '¿Y si pudieras programar la próxima gran solución?',
    title: 'Ingeniería en Tecnologías Computacionales',
    description: 'Diseña software, sistemas e inteligencia digital capaces de cambiar la forma en que vivimos y trabajamos.',
    topics: ['Software', 'Datos e IA', 'Productos digitales']
  }
};

const careerDetail = document.querySelector('#career-detail');
document.querySelectorAll('[data-career]').forEach((button) => {
  button.addEventListener('click', () => {
    const key = button.dataset.career;
    const career = careers[key];
    document.querySelectorAll('[data-career]').forEach((item) => item.setAttribute('aria-selected', String(item === button)));
    careerDetail.className = `career-detail career-${key}`;
    document.querySelector('[data-career-symbol]').textContent = career.symbol;
    document.querySelector('[data-career-question]').textContent = career.question;
    document.querySelector('[data-career-title]').textContent = career.title;
    document.querySelector('[data-career-description]').textContent = career.description;
    document.querySelector('[data-career-topics]').innerHTML = career.topics.map((topic) => `<li>${topic}</li>`).join('');
  });
});

const eventDate = new Date('2026-12-05T10:00:00-07:00');
const updateCountdown = () => {
  const difference = eventDate.getTime() - Date.now();
  if (difference <= 0) {
    document.querySelector('.countdown > p').textContent = 'La experiencia ya comenzó';
    document.querySelector('.countdown-values').hidden = true;
    return;
  }
  const days = Math.floor(difference / 86400000);
  const hours = Math.floor((difference % 86400000) / 3600000);
  const minutes = Math.floor((difference % 3600000) / 60000);
  document.querySelector('[data-days]').textContent = days;
  document.querySelector('[data-hours]').textContent = hours;
  document.querySelector('[data-minutes]').textContent = minutes;
};
updateCountdown();
setInterval(updateCountdown, 60000);
