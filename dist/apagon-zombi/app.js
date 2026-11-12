const sharedContext = [
  'Un brote zombi paralizó la ciudad. Somos cinco amigos recién egresados de distintas ingenierías del Tecnológico de Monterrey y estamos en una biblioteca. No hay electricidad ni internet. Debemos llegar juntos al refugio del gimnasio municipal antes de las 18:25. Podemos salir a las 17:10 y oscurece a las 18:05.',
  'Tenemos tres rutas. El puente toma 35 minutos, pero hay reportes contradictorios sobre si está abierto. La avenida toma 65 minutos. El paso peatonal toma 50 minutos y requiere iluminación propia si sus luces fallan.',
  'Tenemos agua sellada, alimentos, una linterna, una radio, pilas y cinco celulares. Uno tiene 18 % de batería. Hay una app local que puede comunicar celulares cercanos por Bluetooth. En el refugio hay un tanque de agua de origen desconocido. Podemos proponer prototipos con materiales recuperados.'
];

const sharedInstruction = 'Presenta exactamente tres estrategias diferentes, numeradas del 1 al 3, en un máximo de 250 palabras. Para cada una explica qué diseñaríamos o haríamos como egresados, cómo funcionaría, qué necesitaríamos y cómo se conectaría con otra carrera. Haz visible una habilidad de nuestra ingeniería y una decisión que tomaríamos nosotros. Explica los términos técnicos con palabras que entienda un estudiante de preparatoria. Entrega las tres opciones para que el equipo vote.';

const promptDetails = {
  itc: {
    number: '01',
    code: 'ITC',
    title: 'Ingeniería en Tecnologías Computacionales',
    task: 'Somos el equipo de ITC. Propón tres diseños de un agente de IA que opere en el celular y coordine al grupo mediante la app por Bluetooth. Las opciones deben resolver problemas distintos de información o coordinación. Describe qué datos recibe, cómo decide, qué comparte con otros celulares y cómo responde si pierde contacto. Incluye un ejemplo breve de interacción por diseño.'
  },
  civil: {
    number: '02',
    code: 'IC',
    title: 'Ingeniería Civil',
    task: 'Somos el equipo de Ingeniería Civil. Propón tres estrategias de ingeniería para diseñar un recorrido viable ante fallas de infraestructura. Considera puntos vulnerables, cambios de ruta y el tiempo disponible. En cada opción muestra cómo transformaríamos información incompleta en un mapa de decisiones, qué necesitaríamos comprobar y qué haríamos si un tramo deja de estar disponible.'
  },
  industrial: {
    number: '03',
    code: 'IIS',
    title: 'Ingeniería Industrial',
    task: 'Somos el equipo de Ingeniería Industrial. Propón tres sistemas distintos para coordinar las tareas, los tiempos y los recursos de las cinco personas durante el traslado. Considera actividades simultáneas, cuellos de botella y reasignación de responsabilidades. Muestra cómo respondería cada diseño a un retraso o a la falla de un recurso.'
  },
  mecatronica: {
    number: '04',
    code: 'IMT',
    title: 'Ingeniería Mecatrónica',
    task: 'Somos el equipo de Ingeniería Mecatrónica. Propón tres diseños de sistemas portátiles que ayuden al grupo a detectar cambios del entorno o responder a fallas durante el recorrido. Integra sensores, control y una acción física, como una señal, iluminación o un mecanismo. Describe qué detecta, qué decisión toma y qué activa cada diseño. Indica qué materiales adicionales requeriría.'
  },
  biotec: {
    number: '05',
    code: 'IBT',
    title: 'Ingeniería en Biotecnología',
    task: 'Somos el equipo de Ingeniería en Biotecnología. Propón tres estrategias científicas para gestionar el riesgo de contaminación del agua al llegar al refugio. Considera trazabilidad, muestreo o evaluación de alternativas. Describe qué evidencia buscaríamos, cómo la obtendríamos, qué podríamos concluir y qué decisión comunicaríamos al grupo mientras persiste la incertidumbre.'
  }
};

Object.values(promptDetails).forEach((detail) => {
  detail.prompt = [...sharedContext, detail.task, sharedInstruction].join('\n\n');
});

const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#mission-nav');

const setHeaderState = () => header.classList.toggle('scrolled', window.scrollY > 24);
setHeaderState();
window.addEventListener('scroll', setHeaderState, { passive: true });

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
  document.body.style.overflow = open ? '' : 'hidden';
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
    document.body.style.overflow = '';
  });
});

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible')),
    { threshold: 0.12 }
  );
  document.querySelectorAll('.reveal').forEach((item) => revealObserver.observe(item));
} else {
  document.querySelectorAll('.reveal').forEach((item) => item.classList.add('visible'));
}

const dialog = document.querySelector('[data-prompt-dialog]');
const dialogPrompt = document.querySelector('[data-dialog-prompt]');
const copyCareerButton = document.querySelector('[data-copy-career]');
let activePrompt = '';

document.querySelectorAll('[data-prompt]').forEach((button) => {
  button.addEventListener('click', () => {
    const detail = promptDetails[button.dataset.prompt];
    activePrompt = detail.prompt;
    document.querySelector('[data-dialog-number]').textContent = detail.number;
    document.querySelector('[data-dialog-code]').textContent = detail.code;
    document.querySelector('[data-dialog-title]').textContent = detail.title;
    dialogPrompt.textContent = detail.prompt;
    dialog.showModal();
    dialogPrompt.scrollTop = 0;
  });
});

document.querySelector('[data-dialog-close]').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

const toast = document.querySelector('[data-copy-toast]');
let toastTimer;

const showCopied = (button) => {
  const original = button.dataset.originalLabel || button.textContent.trim();
  button.dataset.originalLabel = original;
  button.classList.add('copied');
  button.firstChild.textContent = 'Copiado ';
  toast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    button.classList.remove('copied');
    button.firstChild.textContent = `${original.replace(/⧉/g, '').trim()} `;
    toast.classList.remove('visible');
  }, 2200);
};

const copyText = async (text, button) => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const helper = document.createElement('textarea');
      helper.value = text;
      helper.setAttribute('readonly', '');
      helper.style.position = 'fixed';
      helper.style.opacity = '0';
      document.body.appendChild(helper);
      helper.select();
      document.execCommand('copy');
      helper.remove();
    }
    showCopied(button);
  } catch (error) {
    toast.textContent = 'No se pudo copiar automáticamente. Selecciona el texto y cópialo manualmente.';
    toast.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove('visible'), 3500);
  }
};

copyCareerButton.addEventListener('click', () => copyText(activePrompt, copyCareerButton));

const careerOrder = [
  { key: 'itc', label: 'ITC' },
  { key: 'civil', label: 'Ingeniería Civil' },
  { key: 'industrial', label: 'Ingeniería Industrial' },
  { key: 'mecatronica', label: 'Ingeniería Mecatrónica' },
  { key: 'biotec', label: 'Ingeniería en Biotecnología' }
];

const storageKey = 'apagonZombiTeamV1';
const teamForm = document.querySelector('[data-team-form]');
const finalOutput = document.querySelector('#final-prompt-output');
const statusText = document.querySelector('[data-prompt-status]');
const countText = document.querySelector('[data-complete-count]');
const progressBar = document.querySelector('[data-progress-bar]');

const loadTeam = () => {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || {};
  } catch (error) {
    return {};
  }
};

const readForm = () => Object.fromEntries(
  careerOrder.map(({ key }) => [key, {
    name: teamForm.elements[`${key}-name`].value.trim(),
    strategy: teamForm.elements[`${key}-strategy`].value.trim()
  }])
);

const buildFinalPrompt = (team) => {
  const teamBlocks = careerOrder.map(({ key, label }) => {
    const entry = team[key] || {};
    return `${label}\nNombre del personaje: ${entry.name || '[escribir nombre]'}\nEstrategia elegida: ${entry.strategy || '[pegar estrategia]'}`;
  }).join('\n\n');

  return [
    'Genera una infografía ilustrada de nuestra estrategia para llegar juntos a un refugio durante un apagón zombi. Somos cinco recién egresados del Tecnológico de Monterrey, uno de cada carrera. Estas son las cinco estrategias que elegimos y los nombres de nuestros personajes.',
    teamBlocks,
    'Representa el journey en cuatro etapas conectadas: antes de salir, durante el traslado, ante un imprevisto y al llegar al refugio. Usa las cinco estrategias para mostrar cómo colaboran los personajes y cómo el resultado de uno ayuda al siguiente. Si hay una incompatibilidad que impida que funcionen juntas, pregúntanos cómo ajustarla antes de generar la imagen.',
    'Dibuja a los cinco personajes con apariencia de jóvenes profesionistas. Escribe el nombre exacto y la carrera junto a cada uno. Haz visible su aportación mediante una acción o el sistema que diseñó. Usa flechas, escenas y textos breves en español. Estilo de aventura ilustrada para estudiantes de preparatoria. Formato horizontal y letras grandes. Conserva los nombres y las cinco estrategias elegidas.'
  ].join('\n\n');
};

const updateTeam = () => {
  const team = readForm();
  try {
    localStorage.setItem(storageKey, JSON.stringify(team));
  } catch (error) {
    // The activity still works when browser storage is unavailable.
  }
  finalOutput.textContent = buildFinalPrompt(team);
  const complete = careerOrder.filter(({ key }) => team[key].name && team[key].strategy).length;
  countText.textContent = complete;
  progressBar.style.width = `${complete * 20}%`;
  statusText.textContent = complete === 5 ? 'Prompt listo para copiar' : `Faltan ${5 - complete} estrategias`;
};

const savedTeam = loadTeam();
careerOrder.forEach(({ key }) => {
  teamForm.elements[`${key}-name`].value = savedTeam[key]?.name || '';
  teamForm.elements[`${key}-strategy`].value = savedTeam[key]?.strategy || '';
});
teamForm.addEventListener('input', updateTeam);
updateTeam();

const copyFinalButton = document.querySelector('[data-copy-final]');
copyFinalButton.addEventListener('click', () => copyText(finalOutput.textContent, copyFinalButton));
