const STORAGE_KEY = 'apagonZombiAdventureV1';
const SOUND_KEY = 'apagonZombiSoundV1';

const scenes = {
  library: { x: '0%', y: '0%' },
  city: { x: '50%', y: '0%' },
  bridge: { x: '100%', y: '0%' },
  avenue: { x: '0%', y: '100%' },
  passage: { x: '50%', y: '100%' },
  refuge: { x: '100%', y: '100%' }
};

const plainOptionTitles = {
  trace: 'Ordenar qué información sí es confiable',
  mesh: 'Hacer que los celulares se pasen mensajes',
  scenarios: 'Preparar un plan para cada posibilidad',
  relay: 'Guardar mensajes hasta recuperar contacto',
  quorum: 'Esperar tres confirmaciones antes de cambiar la ruta',
  autonomy: 'Dar reglas para actuar aunque no haya señal',
  consistency: 'Cambiar a todos al mismo plan',
  adaptation: 'Dejar que cada pareja se adapte',
  explain: 'Comparar las opciones antes de decidir',
  network: 'Preparar dos lugares para cambiar de ruta',
  bridge: 'Intentar el puente con un punto de regreso',
  segments: 'Avanzar sólo por tramos comprobados',
  scope: 'Averiguar cuánto bloquea la barrera',
  detour: 'Tomar de inmediato el desvío',
  temporary: 'Marcar un paso temporal y cancelarlo si falla',
  'critical-light': 'Iluminar sólo los puntos peligrosos',
  exterior: 'Salir al recorrido exterior',
  test: 'Probar únicamente el primer tramo',
  lean: 'Salir antes con sólo lo indispensable',
  backup: 'Dar un suplente a cada tarea',
  flow: 'Preparar todo en estaciones',
  'protect-arrival': 'Pausar tareas para proteger la llegada',
  balance: 'Repartir de nuevo peso y responsabilidades',
  buffer: 'Gastar reservas para no cambiar todavía',
  streams: 'Separar la entrada en dos filas',
  priority: 'Atender primero los casos más urgentes',
  cells: 'Que cada equipo atienda de principio a fin',
  beacons: 'Repartir señales de luz y vibración',
  power: 'Guardar energía para las funciones críticas',
  rover: 'Enviar un pequeño explorador',
  manual: 'Pasar el sistema a control manual',
  diagnose: 'Probar cada parte hasta encontrar la falla',
  degraded: 'Seguir funcionando con menos capacidades',
  islands: 'Encender luz sólo cuando el grupo se acerca',
  'redundant-signals': 'Enviar cada aviso de dos maneras',
  probe: 'Explorar un tramo antes de avanzar',
  chain: 'Rastrear de dónde vino cada muestra',
  comparison: 'Comparar el tanque con dos referencias',
  screening: 'Buscar una señal rápida de alerta',
  identity: 'Comprobar que cada resultado sea de la muestra correcta',
  decisive: 'Hacer la comparación que separa dos causas',
  method: 'Comprobar si la prueba funcionó bien',
  isolate: 'Mantener el tanque fuera del consumo',
  source: 'Conseguir agua de origen comprobable',
  threshold: 'Definir qué evidencia falta para autorizarlo',
  'd1-itc': 'Separar lo confirmado de los rumores',
  'd1-civil': 'Marcar dónde cambiar de ruta',
  'd1-industrial': 'Organizar tareas, tiempos y responsables',
  'd1-mecatronica': 'Crear señales que funcionen sin internet',
  'd1-biotec': 'Registrar el origen y estado del agua',
  'd2-itc': 'Comparar versiones y explicar qué cambia',
  'd2-civil': 'Revisar si existe otra ruta',
  'd2-industrial': 'Detectar qué tarea atrasa al equipo',
  'd2-mecatronica': 'Probar el prototipo para encontrar la falla',
  'd2-biotec': 'Investigar por qué dos datos se contradicen',
  'd3-itc': 'Guardar mensajes hasta recuperar contacto',
  'd3-civil': 'Conservar dos posibles desvíos',
  'd3-industrial': 'Reforzar la tarea que define la llegada',
  'd3-mecatronica': 'Mantener sólo la función esencial',
  'd3-biotec': 'Separar lo seguro de lo que sigue en duda',
  'd4-itc': 'Actualizar el mapa sin ocultar contradicciones',
  'd4-civil': 'Usar los puntos peligrosos para decidir dónde actuar',
  'd4-industrial': 'Cambiar el plan cuando cambien los recursos',
  'd4-mecatronica': 'Convertir una instrucción en luz o vibración',
  'd4-biotec': 'Asignar recursos según la evidencia disponible',
  'd5-itc': 'Crear un sistema de avisos confiables',
  'd5-civil': 'Reorganizar accesos cuando una zona cierre',
  'd5-industrial': 'Coordinar personas, capacidad y suministros',
  'd5-mecatronica': 'Construir una estación que responda al entorno',
  'd5-biotec': 'Rastrear riesgos invisibles con evidencia'
};

const avatars = [
  { id: 0, name: 'Avatar 1', x: '0%', y: '0%' },
  { id: 1, name: 'Avatar 2', x: '33.333%', y: '0%' },
  { id: 2, name: 'Avatar 3', x: '66.666%', y: '0%' },
  { id: 3, name: 'Avatar 4', x: '100%', y: '0%' },
  { id: 4, name: 'Avatar 5', x: '0%', y: '100%' },
  { id: 5, name: 'Avatar 6', x: '33.333%', y: '100%' },
  { id: 6, name: 'Avatar 7', x: '66.666%', y: '100%' },
  { id: 7, name: 'Avatar 8', x: '100%', y: '100%' }
];

const careers = {
  itc: {
    code: 'ITC',
    short: 'Tecnologías Computacionales',
    name: 'Ingeniería en Tecnologías Computacionales',
    hook: 'Diseña las reglas invisibles que permiten confiar, coordinarse y seguir actuando cuando la red falla.',
    result: 'Exploraste cómo representar información, diseñar comunicación tolerante a desconexiones y convertir incertidumbre en decisiones compartidas.',
    applications: 'movilidad, salud digital, videojuegos, ciberseguridad, sistemas financieros y plataformas inteligentes',
    metrics: [
      { key: 'time', label: 'Margen', initial: 72 },
      { key: 'confidence', label: 'Confianza', initial: 34 },
      { key: 'battery', label: 'Batería', initial: 68 }
    ],
    challenges: [
      {
        id: 'itc-1',
        scene: 'library',
        kicker: '17:10 · Biblioteca',
        title: 'Tres versiones del puente',
        story: 'El mapa guardado dice “abierto”. Un audio reciente dice “bloqueado”. Una captura sin fecha muestra el paso libre. Sólo puedes dedicar unos minutos a construir una ventaja antes de salir.',
        question: '¿Qué núcleo diseñarías primero?',
        options: [
          {
            id: 'trace',
            title: 'Bitácora de evidencia',
            action: 'Convertir cada reporte en una ficha con hora, origen, ubicación y evidencia, sin obligar al sistema a decidir todavía.',
            protects: 'Las contradicciones quedan visibles y un rumor ya no parece un hecho.',
            cost: 'Consumes tiempo y todavía no eliges una ruta.',
            active: 'La procedencia acompañará cada mensaje posterior.',
            concept: 'Modelado de datos, trazabilidad y diseño de interfaces para comunicar incertidumbre.',
            state: 'TRAZA',
            effect: { time: -10, confidence: 28, battery: -2 }
          },
          {
            id: 'mesh',
            title: 'Red de relevos',
            action: 'Hacer que los cinco celulares intercambien observaciones al acercarse y conserven identificadores para evitar duplicados.',
            protects: 'Aumentas el alcance aun sin internet y pueden aparecer datos recientes.',
            cost: 'La batería cae y un reporte equivocado también puede viajar rápido.',
            active: 'Habrá más caminos de entrega, pero deberás resolver versiones.',
            concept: 'Sistemas distribuidos, protocolos de intercambio y tolerancia a desconexiones.',
            state: 'MALLA',
            effect: { time: -5, confidence: 8, battery: -18 }
          },
          {
            id: 'scenarios',
            title: 'Simulador de escenarios',
            action: 'Preparar tres futuros —puente abierto, cerrado o incierto— con una hora límite, batería necesaria y punto de reunión.',
            protects: 'El equipo puede avanzar sin fingir que conoce la respuesta.',
            cost: 'Un modelo ordenado no corrige datos falsos ni supuestos equivocados.',
            active: 'Tendrás rutas preparadas que deberán compararse con lo que ocurra.',
            concept: 'Modelado de escenarios, reglas de decisión y evaluación de supuestos.',
            state: 'ESCENARIOS',
            effect: { time: -7, confidence: 12, battery: -6 }
          }
        ]
      },
      {
        id: 'itc-2',
        scene: 'city',
        kicker: '17:36 · Ciudad sin red',
        title: 'El mapa se parte en dos',
        story: 'Al rodear una calle, dos integrantes quedan fuera del alcance. Los teléfonos muestran versiones distintas del plan y el dispositivo más débil tiene poca batería.',
        question: '¿Qué regla de comunicación aplicarías?',
        options: [
          {
            id: 'relay',
            title: 'Guardar, transportar y sincronizar',
            action: 'Cada teléfono conserva mensajes pendientes y los entrega al encontrar otro dispositivo; las versiones se combinan sin repetir avisos.',
            protects: 'La información termina llegando aunque la conexión sea intermitente.',
            cost: 'Una instrucción urgente puede llegar cuando ya dejó de ser válida.',
            active: 'La interfaz deberá distinguir entre “recibido” y “vigente”.',
            concept: 'Sincronización eventual, control de versiones y diseño offline-first.',
            state: 'RELEVO',
            effect: { time: -3, confidence: 10, battery: -10 },
            links: { TRAZA: 'Cada paquete conserva su procedencia.', MALLA: 'La red cubre más distancia, pero usa más energía.', ESCENARIOS: 'Los paquetes pueden activar una rama ya preparada.' }
          },
          {
            id: 'quorum',
            title: 'Confirmación mínima de tres',
            action: 'Ningún cambio de ruta se vuelve oficial hasta que tres teléfonos lo confirmen; si faltan respuestas, todos vuelven al último punto seguro.',
            protects: 'Una persona aislada no puede reemplazar el plan del equipo.',
            cost: 'Esperar confirmaciones consume un margen que quizá no regrese.',
            active: 'Tres señales deberán coincidir antes de cambiar el mapa.',
            concept: 'Consenso distribuido, estados compartidos y manejo de fallas.',
            state: 'QUORUM',
            effect: { time: -12, confidence: 25, battery: -4 },
            links: { TRAZA: 'Las confirmaciones llegan con evidencia verificable.', MALLA: 'Tienes más nodos para alcanzar el mínimo.', ESCENARIOS: 'La espera sirve para comparar el margen de cada ruta.' }
          },
          {
            id: 'autonomy',
            title: 'Reglas autónomas con caducidad',
            action: 'Cada pareja recibe reglas breves: qué hacer si pierde contacto, dónde reunirse y cuándo dejar de obedecer una instrucción vieja.',
            protects: 'El equipo sigue moviéndose y reduce el uso de la red.',
            cost: 'Dos parejas pueden interpretar señales distintas y separarse más.',
            active: 'Las decisiones locales vencerán después de cuatro minutos.',
            concept: 'Máquinas de estado, reglas verificables y autonomía limitada.',
            state: 'AUTONOMIA',
            effect: { time: 2, confidence: -8, battery: 8 },
            links: { TRAZA: 'Cada pareja sabe qué señales merecen activar una regla.', MALLA: 'Una observación dudosa puede propagarse antes de caducar.', ESCENARIOS: 'Las reglas ya incluyen puntos de cambio y reencuentro.' }
          }
        ]
      },
      {
        id: 'itc-3',
        scene: 'passage',
        kicker: '18:01 · Cambio urgente',
        title: 'Un dato válido obliga a decidir',
        story: 'Llega una fotografía reciente de la barrera. El paso peatonal cabe en el tiempo sólo si cambian ahora; dos personas siguen a distancia y la batería está bajando.',
        question: '¿Cómo convertirías el dato en una decisión compartida?',
        options: [
          {
            id: 'consistency',
            title: 'Una versión confirmada',
            action: 'Publicar una ruta numerada y no activarla hasta recibir las confirmaciones previstas por el sistema.',
            protects: 'Nadie continúa siguiendo una versión antigua.',
            cost: 'La consistencia consume minutos cuando el equipo está separado.',
            active: 'El equipo llegará unido, con menor margen.',
            concept: 'Consistencia de estado y coordinación confiable.',
            state: 'CONSISTENCIA',
            effect: { time: -10, confidence: 22, battery: -5 },
            links: { QUORUM: 'El protocolo ya sabe qué confirmaciones necesita.', RELEVO: 'Una confirmación puede llegar tarde.', AUTONOMIA: 'Las parejas deben suspender temporalmente sus reglas locales.' }
          },
          {
            id: 'adaptation',
            title: 'Cambio local con límites',
            action: 'Permitir que cada pareja elija el siguiente tramo usando la misma hora límite, punto final y reglas de seguridad.',
            protects: 'Nadie necesita esperar una orden central para avanzar.',
            cost: 'El grupo puede seguir rutas diferentes y reunirse con poco margen.',
            active: 'Las decisiones locales se compararán al llegar.',
            concept: 'Arquitecturas descentralizadas y políticas de adaptación.',
            state: 'ADAPTACION',
            effect: { time: 3, confidence: -12, battery: 2 },
            links: { QUORUM: 'El cambio contradice la espera prevista por el quórum.', RELEVO: 'Los mensajes permiten reconstruir después qué decidió cada pareja.', AUTONOMIA: 'Las reglas locales ya tienen caducidad y punto de reencuentro.' }
          },
          {
            id: 'explain',
            title: 'Comparación explicada',
            action: 'El sistema compara tiempo, batería, luz y calidad de los reportes; presenta dos rutas y señala qué dato podría cambiar la recomendación.',
            protects: 'Los supuestos quedan visibles antes de confirmar la decisión.',
            cost: 'Necesita datos compatibles y unos minutos para recalcular.',
            active: 'Tú confirmarás la ruta conociendo sus límites.',
            concept: 'Sistemas de apoyo a decisiones, explicabilidad y supervisión humana.',
            state: 'CRITERIO',
            effect: { time: -6, confidence: 16, battery: -8 },
            links: { TRAZA: 'Las fuentes elevan la calidad de la comparación.', ESCENARIOS: 'Las alternativas ya tienen supuestos y límites.', MALLA: 'Llegan más datos, pero algunos todavía se contradicen.' }
          }
        ]
      }
    ]
  },
  civil: {
    code: 'IC',
    short: 'Ingeniería Civil',
    name: 'Ingeniería Civil',
    hook: 'Lee la ciudad como una red y conserva alternativas cuando una conexión deja de funcionar.',
    result: 'Exploraste cómo interpretar infraestructura, localizar vulnerabilidades y mantener continuidad espacial sin convertir una observación breve en una certeza.',
    applications: 'movilidad, estructuras, agua, ciudades, construcción, resiliencia y planeación urbana',
    metrics: [
      { key: 'time', label: 'Margen', initial: 72 },
      { key: 'alternatives', label: 'Alternativas', initial: 36 },
      { key: 'verified', label: 'Verificado', initial: 24 }
    ],
    challenges: [
      {
        id: 'civil-1', scene: 'library', kicker: '17:10 · Biblioteca', title: 'El mapa ya no basta',
        story: 'El puente es rápido pero incierto, la avenida consume demasiado tiempo y el paso peatonal depende de su iluminación. Debes proponer una lógica de recorrido con información incompleta.',
        question: '¿Qué estructura darías al plan?',
        options: [
          { id: 'network', title: 'Red con dos puntos de cambio', action: 'Marcar dónde abandonar cada ruta y cómo conectar con la siguiente antes de llegar al bloqueo.', protects: 'Conservas flexibilidad y evitas improvisar conexiones.', cost: 'El recorrido base es más largo y exige vigilar varios puntos.', active: 'Dos desvíos quedan disponibles.', concept: 'Análisis de redes, redundancia y continuidad de recorrido.', state: 'RED', effect: { time: -5, alternatives: 28, verified: 5 } },
          { id: 'bridge', title: 'Puente con verificación limitada', action: 'Comparar hora, fotografías, accesos visibles y un punto seguro de regreso antes de priorizar la ruta corta.', protects: 'Conservas el mayor margen si el acceso sigue disponible.', cost: 'Una observación del acceso no confirma todo el recorrido.', active: 'Tendrás un punto claro para regresar.', concept: 'Evaluación de restricciones y toma de decisiones con información parcial.', state: 'PUENTE', effect: { time: 12, alternatives: -18, verified: 12 } },
          { id: 'segments', title: 'Paso dividido en segmentos', action: 'Definir tres tramos, un punto de reunión y una condición concreta para avanzar o regresar.', protects: 'Cada avance produce información antes de comprometer todo el recorrido.', cost: 'Las comprobaciones consumen margen.', active: 'El paso queda dividido en tres puntos de control.', concept: 'Planeación por etapas y criterios de continuidad.', state: 'SEGMENTOS', effect: { time: -10, alternatives: 8, verified: 26 } }
        ]
      },
      {
        id: 'civil-2', scene: 'bridge', kicker: '17:41 · Acceso cerrado', title: 'La conexión crítica se cierra',
        story: 'Una barrera impide continuar por el acceso previsto. Desde donde están no pueden saber si el bloqueo afecta sólo la entrada o todo el tramo.',
        question: '¿Cómo conservarías la continuidad?',
        options: [
          { id: 'scope', title: 'Delimitar el bloqueo', action: 'Observar desde puntos seguros sus extremos y volver al punto de reunión antes de rediseñar.', protects: 'Evitas descartar una ruta completa por un problema local.', cost: 'La comprobación consume minutos y no garantiza un paso.', active: 'El alcance del bloqueo quedará documentado.', concept: 'Lectura del sitio, alcance de una afectación y evidencia espacial.', state: 'ALCANCE', effect: { time: -12, alternatives: 5, verified: 24 }, links: { PUENTE: 'El punto seguro de regreso limita la exploración.', SEGMENTOS: 'La comprobación usa los mismos criterios por tramo.', RED: 'La red conserva un desvío mientras verificas.' } },
          { id: 'detour', title: 'Activar el desvío preparado', action: 'Cambiar inmediatamente por la conexión secundaria y recalcular la llegada.', protects: 'Evitas acercarte al bloqueo y reduces la reorganización.', cost: 'Consumes la alternativa que protegía al equipo ante una segunda falla.', active: 'Queda una opción menos para el resto del camino.', concept: 'Gestión de contingencias y actualización de recorridos.', state: 'DESVIO', effect: { time: -7, alternatives: -20, verified: 8 }, links: { RED: 'El punto de cambio ya estaba señalado.', PUENTE: 'Renuncias al margen ganado por la ruta corta.', SEGMENTOS: 'Abandonas la comprobación progresiva.' } },
          { id: 'temporary', title: 'Enlace temporal con cancelación', action: 'Delimitar un corredor corto sólo sobre superficie visible y estable; si no cumple criterios, se cancela sin cruzarlo.', protects: 'Podrías recuperar la conexión sin asumir que toda la zona es transitable.', cost: 'Consume materiales y puede terminar cancelado.', active: 'El corredor existe únicamente mientras cumpla los criterios.', concept: 'Accesibilidad temporal, delimitación y criterios de cancelación.', state: 'ENLACE', effect: { time: -9, alternatives: 6, verified: 10 } }
        ]
      },
      {
        id: 'civil-3', scene: 'passage', kicker: '18:02 · Paso sin iluminación', title: 'El recorrido pierde visibilidad',
        story: 'El paso peatonal queda a oscuras. Todavía existe una alternativa exterior, pero el margen se ha reducido y el equipo debe decidir sin declarar seguro lo que no ha comprobado.',
        question: '¿Cómo continuarías?',
        options: [
          { id: 'critical-light', title: 'Iluminar puntos críticos', action: 'Seleccionar giros, desniveles y cruces para que Mecatrónica concentre allí la luz.', protects: 'La energía se usa donde una interrupción afectaría más el recorrido.', cost: 'Los espacios entre puntos quedan con menor visibilidad.', active: 'El grupo avanza de punto confirmado en punto confirmado.', concept: 'Coordinación espacial y priorización de puntos vulnerables.', state: 'PUNTOS', effect: { time: -5, alternatives: 2, verified: 18 } },
          { id: 'exterior', title: 'Migrar a la conexión exterior', action: 'Recalcular la llegada y cambiar sólo si todavía queda una reserva mínima de tiempo.', protects: 'Evitas depender del paso sin luz.', cost: 'Te expones a un recorrido más largo y consumes la última alternativa.', active: 'El margen decidirá si el cambio sigue abierto.', concept: 'Análisis de factibilidad y margen de contingencia.', state: 'EXTERIOR', effect: { time: -18, alternatives: -16, verified: 8 } },
          { id: 'test', title: 'Probar un segmento y regresar', action: 'Recorrer sólo el primer tramo iluminado, comprobar continuidad visible y decidir desde el punto de control.', protects: 'Obtienes información nueva sin comprometer a todo el equipo.', cost: 'La prueba consume tiempo y puede terminar en regreso.', active: 'La decisión final dependerá del primer segmento.', concept: 'Prueba controlada, observación y decisión por etapas.', state: 'PRUEBA', effect: { time: -11, alternatives: 4, verified: 25 } }
        ]
      }
    ]
  },
  industrial: {
    code: 'IIS', short: 'Ingeniería Industrial', name: 'Ingeniería Industrial',
    hook: 'Convierte un grupo improvisado en un sistema que se adapta cuando cambian el tiempo, la capacidad y las personas.',
    result: 'Exploraste cómo diseñar flujo, capacidad, respaldo y reglas de prioridad para que un sistema humano continúe bajo presión.',
    applications: 'operaciones, manufactura, hospitales, logística, calidad, servicios y cadenas de suministro',
    metrics: [
      { key: 'time', label: 'Margen', initial: 66 },
      { key: 'capacity', label: 'Capacidad', initial: 72 },
      { key: 'reserves', label: 'Reservas', initial: 70 }
    ],
    challenges: [
      {
        id: 'industrial-1', scene: 'library', kicker: '17:10 · Preparación', title: 'Dieciocho minutos para salir',
        story: 'Faltan revisar la ruta, repartir suministros y preparar la comunicación. Una linterna y el celular con 18 % de batería son recursos compartidos.',
        question: '¿Cómo diseñarías la salida?',
        options: [
          { id: 'lean', title: 'Salida mínima viable', action: 'Elegir sólo lo indispensable para caminar, comunicarse y responder a una emergencia.', protects: 'Salen antes y cargan menos.', cost: 'No llevan repuestos para una segunda falla.', active: 'El equipo conserva margen, pero pierde redundancia.', concept: 'Priorización de alcance y diseño de una operación mínima.', state: 'LIGERA', effect: { time: 16, capacity: 5, reserves: -24 } },
          { id: 'backup', title: 'Células con respaldo', action: 'Asignar responsable y suplente a cada tarea crítica, con una verificación compartida.', protects: 'El plan resiste si alguien se separa o se cansa.', cost: 'La doble verificación retrasa la salida.', active: 'Cada función crítica tiene reemplazo.', concept: 'Redundancia operativa y diseño resiliente del trabajo.', state: 'RESPALDOS', effect: { time: -10, capacity: 18, reserves: 10 } },
          { id: 'flow', title: 'Flujo por estaciones', action: 'Preparar ruta, recursos y comunicación en estaciones; nadie inicia trabajo nuevo si la siguiente está saturada.', protects: 'El cuello de botella se vuelve visible.', cost: 'El equipo debe permanecer junto hasta terminar.', active: 'La pantalla mostrará dónde se acumula el trabajo.', concept: 'Diseño de flujo, trabajo en proceso y gestión visual.', state: 'FLUJO', effect: { time: -4, capacity: 12, reserves: 4 } }
        ]
      },
      {
        id: 'industrial-2', scene: 'avenue', kicker: '17:43 · Capacidad reducida', title: 'El plan pierde dos manos',
        story: 'Una persona se lastima un tobillo y otra debe ayudarla. Los recursos siguen allí, pero el grupo ya no tiene la misma velocidad ni la misma capacidad de trabajo.',
        question: '¿Qué rediseñarías primero?',
        options: [
          { id: 'protect-arrival', title: 'Proteger la llegada', action: 'Pausar funciones no esenciales y concentrar la capacidad disponible en movimiento, comunicación y luz.', protects: 'Mantienes la hora estimada.', cost: 'Algunos suministros dejan de verificarse.', active: 'Aumentan los pendientes que llegarán al refugio.', concept: 'Priorización del flujo crítico y reducción de alcance.', state: 'ALCANCE', effect: { time: 8, capacity: -10, reserves: -8 }, links: { LIGERA: 'La falta de repuestos vuelve más frágil la reducción de alcance.', RESPALDOS: 'Los suplentes absorben funciones críticas.', FLUJO: 'La estación saturada indica qué pausar.' } },
          { id: 'balance', title: 'Balancear carga y ritmo', action: 'Redistribuir peso y tareas según la capacidad actual y adoptar un ritmo sostenible.', protects: 'Conservas todas las funciones y reduces agotamiento.', cost: 'Consumes parte del margen.', active: 'La carga queda más equilibrada entre las cinco personas.', concept: 'Balanceo de carga, ergonomía y capacidad del sistema.', state: 'BALANCE', effect: { time: -12, capacity: 16, reserves: 4 } },
          { id: 'buffer', title: 'Gastar el amortiguador', action: 'Mantener el plan durante un tramo usando pilas y agua de reserva, con un punto exacto para cambiar si no recuperan velocidad.', protects: 'Conservas opciones abiertas durante un tramo.', cost: 'Las reservas caen y el cambio posterior será más costoso.', active: 'Un contador decidirá cuándo abandonar el plan.', concept: 'Buffers, puntos de control y gestión de contingencias.', state: 'BUFFER', effect: { time: 2, capacity: 4, reserves: -24 } }
        ]
      },
      {
        id: 'industrial-3', scene: 'refuge', kicker: '18:18 · Refugio', title: 'Una entrada saturada',
        story: 'Registro, revisión de suministros y atención urgente comparten una sola fila. La espera crece y todavía llegan más personas.',
        question: '¿Cómo reorganizarías el acceso?',
        options: [
          { id: 'streams', title: 'Separar por tipo de servicio', action: 'Crear un acceso rápido para registro simple y otro para casos que requieren revisión.', protects: 'Reduce el tiempo promedio de entrada.', cost: 'La fila compleja puede crecer y necesitar apoyo.', active: 'Dos flujos sustituyen a una sola fila.', concept: 'Segmentación de demanda y diseño de capacidad.', state: 'FLUJOS', effect: { time: 12, capacity: 8, reserves: -4 } },
          { id: 'priority', title: 'Regla de prioridad visible', action: 'Ordenar casos por urgencia, vulnerabilidad y tiempo de atención, actualizando la regla con la demanda.', protects: 'Atiendes primero el impacto más grave.', cost: 'Algunas personas que llegaron antes esperan más.', active: 'La prioridad puede explicarse y revisarse.', concept: 'Criterios de decisión, equidad operativa y sistemas dinámicos.', state: 'PRIORIDAD', effect: { time: 4, capacity: 12, reserves: 2 } },
          { id: 'cells', title: 'Células completas de atención', action: 'Cada equipo registra, recibe y ubica a una persona de principio a fin.', protects: 'Disminuyen transferencias y extravíos.', cost: 'Si una célula se detiene, su fila también.', active: 'Cada persona tiene un recorrido de atención completo.', concept: 'Células de trabajo, propiedad del proceso y reducción de transferencias.', state: 'CELULAS', effect: { time: 2, capacity: 18, reserves: -8 } }
        ]
      }
    ]
  },
  mecatronica: {
    code: 'IMT', short: 'Ingeniería Mecatrónica', name: 'Ingeniería Mecatrónica',
    hook: 'Integra percepción, control y acción física para que un prototipo responda incluso cuando una parte falla.',
    result: 'Exploraste cómo integrar sensores, energía, control y respuestas físicas, además de diseñar respaldos y modos degradados.',
    applications: 'robótica, automatización, dispositivos médicos, vehículos, energía, manufactura y sistemas autónomos',
    metrics: [
      { key: 'energy', label: 'Energía', initial: 72 },
      { key: 'integrity', label: 'Integridad', initial: 76 },
      { key: 'coverage', label: 'Cobertura', initial: 34 }
    ],
    challenges: [
      {
        id: 'meca-1', scene: 'library', kicker: '17:10 · Prototipos', title: 'Sólo puedes activar uno',
        story: 'Tienes módulos, baterías y materiales recuperados, pero no hay tiempo ni energía para desplegar todos los prototipos durante el traslado.',
        question: '¿Qué capacidad física priorizarías?',
        options: [
          { id: 'beacons', title: 'Balizas modulares', action: 'Cuatro módulos producen luz, vibración o un patrón cuando reciben una señal cercana.', protects: 'El equipo conserva un canal físico de avisos.', cost: 'Cada módulo necesita energía y alcance cercano.', active: 'Las señales podrán repetirse entre puntos.', concept: 'Integración de actuadores, comunicación y señalización redundante.', state: 'BALIZAS', effect: { energy: -16, integrity: 4, coverage: 28 } },
          { id: 'power', title: 'Controlador de energía', action: 'Supervisar el consumo y desconectar funciones secundarias cuando aparece un patrón anormal.', protects: 'Anticipas una falla y reservas energía crítica.', cost: 'Tienes menos respuestas físicas disponibles al inicio.', active: 'Las funciones se apagarán por niveles.', concept: 'Control, monitoreo energético y priorización automática.', state: 'ENERGIA', effect: { energy: 18, integrity: 12, coverage: -8 } },
          { id: 'rover', title: 'Explorador de corto alcance', action: 'Usar un vehículo pequeño con cámara local, luz e inclinación, operado siempre desde un punto cercano.', protects: 'Observas un tramo antes de exponer al grupo.', cost: 'Concentras materiales y energía en un solo equipo.', active: 'El explorador puede regresar datos, pero no decide la ruta.', concept: 'Robótica móvil, teleoperación y adquisición de datos.', state: 'EXPLORADOR', effect: { energy: -24, integrity: -6, coverage: 30 } }
        ]
      },
      {
        id: 'meca-2', scene: 'city', kicker: '17:46 · Señal errática', title: 'Una lectura deja de ser confiable',
        story: 'El prototipo empieza a reportar cambios imposibles. Puede ser alimentación, comunicación o el componente que produce la respuesta.',
        question: '¿Cómo conservarías la función?',
        options: [
          { id: 'manual', title: 'Control manual con límites', action: 'Una persona opera la función esencial mediante un respaldo y registra cada activación.', protects: 'Recuperas la función sin confiar en la lectura dudosa.', cost: 'Una persona queda dedicada al sistema.', active: 'El respaldo depende de atención humana.', concept: 'Diseño seguro, interacción humano-máquina y respaldo manual.', state: 'MANUAL', effect: { energy: 4, integrity: 8, coverage: -10 }, links: { BALIZAS: 'Las balizas pueden activarse una por una.', ENERGIA: 'El controlador reserva el canal manual.', EXPLORADOR: 'El vehículo vuelve a operación directa.' } },
          { id: 'diagnose', title: 'Diagnóstico por bloques', action: 'Probar alimentación, comunicación y salida en orden para aislar el módulo que provoca la falla.', protects: 'Identificas la causa en lugar de esconder el síntoma.', cost: 'El sistema queda detenido mientras pruebas.', active: 'Un bloque quedará marcado como no confiable.', concept: 'Diagnóstico sistemático, pruebas y aislamiento de fallas.', state: 'DIAGNOSTICO', effect: { energy: -8, integrity: 24, coverage: -4 } },
          { id: 'degraded', title: 'Modo degradado', action: 'Desconectar el bloque dudoso y reasignar energía y señales a los componentes restantes.', protects: 'La función esencial continúa sin esperar la reparación.', cost: 'Pierdes precisión, alcance o comodidad.', active: 'El prototipo operará con menos prestaciones.', concept: 'Tolerancia a fallas, reconfiguración y operación degradada.', state: 'DEGRADADO', effect: { energy: 6, integrity: -12, coverage: 8 } }
        ]
      },
      {
        id: 'meca-3', scene: 'passage', kicker: '18:03 · Oscuridad total', title: 'El paso deja de responder',
        story: 'Las luces del paso fallan. Civil ya marcó puntos críticos y el equipo necesita una respuesta que no consuma toda la energía restante.',
        question: '¿Qué sistema desplegarías?',
        options: [
          { id: 'islands', title: 'Islas de luz adaptativa', action: 'Encender sólo giros, desniveles y puntos de cambio cuando el grupo se aproxima.', protects: 'La energía se concentra en las zonas decisivas.', cost: 'Las zonas intermedias permanecen oscuras.', active: 'La luz acompañará al grupo por segmentos.', concept: 'Control por eventos, sensores y administración de energía.', state: 'ISLAS', effect: { energy: -14, integrity: 8, coverage: 18 } },
          { id: 'redundant-signals', title: 'Señales físicas redundantes', action: 'Convertir cada orden importante en dos salidas, por ejemplo luz y vibración, con confirmación física.', protects: 'Una falla de canal no elimina el aviso.', cost: 'Cada mensaje usa más energía y requiere disciplina.', active: 'Las órdenes tendrán dos formas de percibirse.', concept: 'Redundancia sensorial, actuadores y confirmación física.', state: 'REDUNDANCIA', effect: { energy: -20, integrity: 18, coverage: 10 } },
          { id: 'probe', title: 'Explorar, regresar y decidir', action: 'Enviar un módulo hasta el siguiente punto, recuperar datos de oscuridad e inclinación y regresarlo antes de avanzar.', protects: 'Obtienes información sin mover al grupo completo.', cost: 'El despliegue consume tiempo y puede agotar el equipo.', active: 'La ruta se decidirá con los datos recuperados.', concept: 'Sensado remoto, teleoperación y ciclo percepción-decisión-acción.', state: 'SONDEO', effect: { energy: -24, integrity: -4, coverage: 26 } }
        ]
      }
    ]
  },
  biotec: {
    code: 'IBT', short: 'Biotecnología', name: 'Ingeniería en Biotecnología',
    hook: 'Convierte señales invisibles en evidencia interpretable y define qué puede decidirse sin inventar certeza.',
    result: 'Exploraste trazabilidad, comparación, controles y comunicación de incertidumbre para orientar decisiones responsables sobre riesgos invisibles.',
    applications: 'salud, alimentos, ambiente, bioprocesos, diagnóstico, agricultura y desarrollo de materiales biológicos',
    metrics: [
      { key: 'materials', label: 'Materiales', initial: 72 },
      { key: 'confidence', label: 'Confianza', initial: 24 },
      { key: 'reserves', label: 'Reservas', initial: 56 }
    ],
    challenges: [
      {
        id: 'bio-1', scene: 'library', kicker: '17:10 · Reporte del refugio', title: 'Preparar evidencia antes de salir',
        story: 'El refugio reporta un tanque de origen incierto. Sólo hay etiquetas, recipientes limpios y un kit de lectura rápida con reactivos limitados.',
        question: '¿Qué investigación prepararías?',
        options: [
          { id: 'chain', title: 'Reconstruir la ruta del agua', action: 'Registrar origen, transporte, recipiente, hora y persona que manipuló cada muestra.', protects: 'Podrás localizar dónde cambió el recurso.', cost: 'No produce una lectura inmediata.', active: 'Cada muestra conservará su historia.', concept: 'Trazabilidad, cadena de custodia y calidad de información.', state: 'CADENA', effect: { materials: 6, confidence: 14, reserves: 2 } },
          { id: 'comparison', title: 'Diseñar una comparación', action: 'Reservar materiales para observar tanque, entrada y agua sellada, incluyendo un control.', protects: 'Podrás distinguir entre origen, almacenamiento y procedimiento.', cost: 'Consumes más recipientes y reactivos.', active: 'Tres referencias competirán entre sí.', concept: 'Diseño experimental, controles y comparación de hipótesis.', state: 'COMPARACION', effect: { materials: -24, confidence: 24, reserves: 0 } },
          { id: 'screening', title: 'Preparar una señal rápida', action: 'Configurar una lectura de campo y definir desde ahora que cualquier resultado será preliminar.', protects: 'Obtienes una alerta temprana al llegar.', cost: 'Una lectura favorable no autoriza el consumo.', active: 'La pantalla separará señal y certeza.', concept: 'Tamizaje, alcance de una medición y comunicación de límites.', state: 'SENAL', effect: { materials: -12, confidence: 8, reserves: 4 } }
        ]
      },
      {
        id: 'bio-2', scene: 'refuge', kicker: '18:12 · Evidencia contradictoria', title: 'Dos resultados no coinciden',
        story: 'Una lectura rápida no muestra alerta, pero una libreta indica que el tanque estuvo abierto. Hay pocos materiales para resolver la contradicción.',
        question: '¿Qué incertidumbre atacarías?',
        options: [
          { id: 'identity', title: 'Auditar la identidad de la evidencia', action: 'Revisar etiquetas, horarios y quién tomó cada muestra antes de interpretar resultados.', protects: 'Puedes detectar que una lectura pertenece a otro recipiente.', cost: 'Usas tiempo sin producir una medición nueva.', active: 'Una etiqueta puede pasar a estado dudoso.', concept: 'Integridad de datos, trazabilidad y revisión de evidencia.', state: 'IDENTIDAD', effect: { materials: 4, confidence: 18, reserves: -6 }, links: { CADENA: 'La historia de cada muestra reduce el tiempo de búsqueda.', COMPARACION: 'Las referencias conservan identidades separadas.', SENAL: 'La lectura rápida no puede interpretarse sin identidad.' } },
          { id: 'decisive', title: 'Probar la diferencia decisiva', action: 'Comparar tanque, entrada y control para separar “llegó alterada” de “se alteró al almacenarse”.', protects: 'Una sola comparación puede distinguir dos explicaciones.', cost: 'Consumes casi todos los reactivos.', active: 'Una hipótesis ganará apoyo, no certeza absoluta.', concept: 'Hipótesis rivales, controles y poder explicativo.', state: 'ORIGEN', effect: { materials: -28, confidence: 30, reserves: -4 } },
          { id: 'method', title: 'Desafiar el método', action: 'Repetir la lectura con control y comprobar si el kit funcionó durante el apagón.', protects: 'Evitas tratar una falla del procedimiento como un resultado real.', cost: 'El origen del problema puede seguir sin resolverse.', active: 'El método quedará validado o pendiente.', concept: 'Validación de método, controles y reproducibilidad.', state: 'METODO', effect: { materials: -18, confidence: 22, reserves: -8 } }
        ]
      },
      {
        id: 'bio-3', scene: 'refuge', kicker: '18:21 · Decisión operativa', title: 'La evidencia sigue incompleta',
        story: 'Quedan reservas selladas para las necesidades inmediatas. El tanque no puede liberarse todavía y el refugio necesita una decisión que pueda comunicar.',
        question: '¿Qué regla propondrías?',
        options: [
          { id: 'isolate', title: 'Aislar por uso', action: 'Mantener el tanque fuera del consumo y asignar reservas selladas a necesidades críticas.', protects: 'Reduces la exposición mientras continúa la evaluación.', cost: 'Las reservas disminuyen con rapidez.', active: 'Un semáforo indicará qué usos están autorizados.', concept: 'Gestión de riesgo, segregación y comunicación de estado.', state: 'AISLAMIENTO', effect: { materials: 0, confidence: 8, reserves: -28 } },
          { id: 'source', title: 'Buscar una fuente verificable', action: 'Solicitar una alternativa cuyo origen y manejo puedan documentarse desde la entrega.', protects: 'Abres una salida independiente del tanque.', cost: 'La nueva fuente requiere coordinación y puede llegar tarde.', active: 'La alternativa deberá integrarse al registro.', concept: 'Trazabilidad aplicada y gestión de alternativas.', state: 'FUENTE', effect: { materials: -4, confidence: 14, reserves: -12 } },
          { id: 'threshold', title: 'Definir un umbral de liberación', action: 'Comunicar qué controles y comparaciones faltan para cambiar el estado del tanque.', protects: 'La siguiente decisión no dependerá de intuición ni presión.', cost: 'No resuelve la necesidad inmediata.', active: 'La pantalla mostrará “sabemos / falta / próxima decisión”.', concept: 'Criterios de aceptación, incertidumbre y toma de decisiones basada en evidencia.', state: 'UMBRAL', effect: { materials: -6, confidence: 24, reserves: -16 } }
        ]
      }
    ]
  }
};

const discoveryRounds = [
  {
    id: 'discover-1', scene: 'library', kicker: 'Reto 1 · Construir una ventaja',
    title: 'Sólo alcanzan a preparar una cosa',
    story: 'El tiempo avanza. Antes de salir pueden construir una sola ventaja para el equipo.',
    question: '¿Qué te gustaría dejar funcionando?',
    options: [
      { id: 'd1-itc', career: 'itc', secondary: 'civil', action: 'Separar avisos confiables, dudosos y pendientes, mostrando qué dato falta para decidir.', motivation: 'dar sentido a información cambiante' },
      { id: 'd1-civil', career: 'civil', secondary: 'mecatronica', action: 'Representar el recorrido como conexiones y señalar dónde un bloqueo dejaría al equipo sin alternativa.', motivation: 'anticipar cómo puede fallar el espacio' },
      { id: 'd1-industrial', career: 'industrial', secondary: 'itc', action: 'Hacer que varias preparaciones avancen al mismo tiempo sin olvidar la que detiene la salida.', motivation: 'hacer funcionar personas y recursos como sistema' },
      { id: 'd1-mecatronica', career: 'mecatronica', secondary: 'itc', action: 'Crear un módulo portátil que perciba un cambio y responda sin esperar una instrucción.', motivation: 'convertir información en una respuesta física' },
      { id: 'd1-biotec', career: 'biotec', secondary: 'industrial', action: 'Reconstruir el origen y manejo de un recurso para localizar dónde pudo alterarse.', motivation: 'obtener evidencia de lo que no se ve' }
    ]
  },
  {
    id: 'discover-2', scene: 'bridge', kicker: 'Reto 2 · Investigar una incertidumbre',
    title: 'La primera señal no alcanza',
    story: 'Tienen diez minutos para reducir una incertidumbre antes de comprometer la ruta y los recursos.',
    question: '¿Qué problema te daría más curiosidad investigar?',
    options: [
      { id: 'd2-itc', career: 'itc', secondary: 'biotec', action: 'Comparar versiones contradictorias y señalar qué decisión cambiaría con cada una.', motivation: 'explicar cómo cambia una conclusión' },
      { id: 'd2-civil', career: 'civil', secondary: 'mecatronica', action: 'Comprobar si el punto más frágil del recorrido conserva una conexión alternativa.', motivation: 'leer vulnerabilidades y continuidad' },
      { id: 'd2-industrial', career: 'industrial', secondary: 'itc', action: 'Descubrir qué actividad consume el margen y ensayar una distribución diferente.', motivation: 'mejorar el desempeño del sistema completo' },
      { id: 'd2-mecatronica', career: 'mecatronica', secondary: 'itc', action: 'Provocar una prueba controlada para localizar qué parte del prototipo está fallando.', motivation: 'diagnosticar sistemas físicos' },
      { id: 'd2-biotec', career: 'biotec', secondary: 'industrial', action: 'Distinguir si una contradicción proviene del origen, de la muestra o del registro.', motivation: 'separar explicaciones con evidencia' }
    ]
  },
  {
    id: 'discover-3', scene: 'avenue', kicker: 'Reto 3 · Aceptar una limitación',
    title: 'No pueden conservarlo todo',
    story: 'Una falla obliga al equipo a continuar con menos tiempo, capacidad o información.',
    question: '¿Qué solución te interesaría diseñar?',
    options: [
      { id: 'd3-itc', career: 'itc', secondary: 'industrial', action: 'Conservar mensajes pendientes y entregarlos después, aunque algunos lleguen tarde.', motivation: 'mantener sistemas útiles durante una desconexión' },
      { id: 'd3-civil', career: 'civil', secondary: 'industrial', action: 'Abandonar el tramo más corto para conservar dos posibilidades de desvío.', motivation: 'proteger alternativas espaciales' },
      { id: 'd3-industrial', career: 'industrial', secondary: 'civil', action: 'Pausar una tarea secundaria para reforzar la actividad que marca la hora de llegada.', motivation: 'proteger el flujo crítico' },
      { id: 'd3-mecatronica', career: 'mecatronica', secondary: 'itc', action: 'Mantener la función esencial del prototipo, aunque pierda precisión y comodidades.', motivation: 'hacer que un sistema tolere fallas' },
      { id: 'd3-biotec', career: 'biotec', secondary: 'industrial', action: 'Separar lo utilizable de lo que seguirá pendiente hasta contar con evidencia suficiente.', motivation: 'decidir responsablemente con incertidumbre' }
    ]
  },
  {
    id: 'discover-4', scene: 'passage', kicker: 'Reto 4 · Conectar especialidades',
    title: 'Dos aportaciones deben colaborar',
    story: 'Ninguna idea basta por sí sola. Debes diseñar un puente entre dos formas de resolver el problema.',
    question: '¿Qué conexión te gustaría construir?',
    options: [
      { id: 'd4-itc', career: 'itc', secondary: 'civil', action: 'Lograr que las observaciones actualicen una vista compartida sin borrar sus contradicciones.', motivation: 'crear una fuente compartida y explicable' },
      { id: 'd4-civil', career: 'civil', secondary: 'mecatronica', action: 'Usar los puntos frágiles del recorrido para decidir dónde desplegar respuestas físicas.', motivation: 'conectar espacio y sistemas de respuesta' },
      { id: 'd4-industrial', career: 'industrial', secondary: 'biotec', action: 'Hacer que el estado de los recursos cambie prioridades, responsables y tiempos.', motivation: 'integrar información con operaciones' },
      { id: 'd4-mecatronica', career: 'mecatronica', secondary: 'itc', action: 'Transformar una instrucción del equipo en señales visibles o táctiles aun sin conexión.', motivation: 'conectar decisiones digitales y acción física' },
      { id: 'd4-biotec', career: 'biotec', secondary: 'industrial', action: 'Hacer que la calidad de la evidencia determine qué reservas pueden asignarse.', motivation: 'conectar evidencia con decisiones de recursos' }
    ]
  },
  {
    id: 'discover-5', scene: 'refuge', kicker: 'Reto 5 · Dejar algo funcionando',
    title: 'El refugio seguirá operando mañana',
    story: 'Llegar no termina la misión. Puedes dejar un sistema que ayude a otras personas después del cierre.',
    question: '¿Qué te entusiasmaría construir?',
    options: [
      { id: 'd5-itc', career: 'itc', secondary: 'civil', action: 'Un sistema que reúna avisos, conserve sus fuentes y muestre qué sigue sin confirmarse.', motivation: 'diseñar información confiable a escala' },
      { id: 'd5-civil', career: 'civil', secondary: 'industrial', action: 'Un sistema que reorganice accesos y recorridos cuando una zona quede fuera de servicio.', motivation: 'hacer resiliente el espacio compartido' },
      { id: 'd5-industrial', career: 'industrial', secondary: 'biotec', action: 'Un sistema que coordine demanda, capacidad, suministros y responsabilidades conforme cambien.', motivation: 'diseñar operaciones adaptables' },
      { id: 'd5-mecatronica', career: 'mecatronica', secondary: 'itc', action: 'Una estación que supervise el entorno y active respuestas físicas con respaldo manual.', motivation: 'construir sistemas autónomos y verificables' },
      { id: 'd5-biotec', career: 'biotec', secondary: 'industrial', action: 'Un sistema que conecte procedencia, manejo y resultados para sostener decisiones sobre riesgos invisibles.', motivation: 'mantener evidencia interpretable en el tiempo' }
    ]
  }
];

const defaultState = () => ({
  version: 1,
  screen: 'home',
  resumeScreen: null,
  profile: { name: '', avatar: 0 },
  mode: null,
  career: null,
  step: 0,
  phase: 'choice',
  choices: [],
  stats: {},
  shuffledOrders: {}
});

const app = document.querySelector('#app');
const toast = document.querySelector('[data-toast]');
const soundToggle = document.querySelector('[data-sound-toggle]');
let toastTimer;
let state = loadState();
let soundEnabled = localStorage.getItem(SOUND_KEY) === 'on';
let audioContext;

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved?.version === 1 ? { ...defaultState(), ...saved } : defaultState();
  } catch (error) {
    return defaultState();
  }
}

function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (error) { /* The game remains usable without storage. */ }
}

function announce(message) {
  toast.textContent = message;
  toast.classList.add('visible');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove('visible'), 2400);
}

function displayOptionTitle(option = {}) {
  return plainOptionTitles[option.id] || option.title || capitalizeFirst(option.motivation) || 'Tu acción';
}

function updateSoundToggle() {
  if (!soundToggle) return;
  soundToggle.classList.toggle('active', soundEnabled);
  soundToggle.setAttribute('aria-pressed', String(soundEnabled));
  soundToggle.setAttribute('aria-label', soundEnabled ? 'Silenciar efectos de sonido' : 'Activar efectos de sonido');
  const status = soundToggle.querySelector('small');
  if (status) status.textContent = soundEnabled ? 'ON' : 'OFF';
}

function ensureAudioContext() {
  if (!audioContext) audioContext = new (window.AudioContext || window.webkitAudioContext)();
  if (audioContext.state === 'suspended') audioContext.resume();
  return audioContext;
}

function playSound(cue) {
  if (!soundEnabled) return;
  const context = ensureAudioContext();
  const now = context.currentTime;
  const gain = context.createGain();
  const oscillator = context.createOscillator();
  const settings = {
    activate: [520, 760, 0.14, 'sine'],
    choice: [150, 68, 0.48, 'sawtooth'],
    next: [230, 520, 0.22, 'triangle']
  }[cue] || [420, 520, 0.08, 'sine'];
  oscillator.type = settings[3];
  oscillator.frequency.setValueAtTime(settings[0], now);
  oscillator.frequency.exponentialRampToValueAtTime(settings[1], now + settings[2]);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(cue === 'choice' ? 0.16 : 0.1, now + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + settings[2]);
  oscillator.connect(gain).connect(context.destination);
  oscillator.start(now);
  oscillator.stop(now + settings[2] + 0.03);
}

function toggleSound() {
  soundEnabled = !soundEnabled;
  localStorage.setItem(SOUND_KEY, soundEnabled ? 'on' : 'off');
  updateSoundToggle();
  if (soundEnabled) {
    playSound('activate');
    announce('Efectos de sonido activados.');
  } else {
    announce('Efectos de sonido silenciados.');
  }
}

function clamp(value) { return Math.max(0, Math.min(100, value)); }

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swap]] = [copy[swap], copy[index]];
  }
  return copy;
}

function sceneStyle(sceneName) {
  const scene = scenes[sceneName] || scenes.library;
  return `--scene-x:${scene.x};--scene-y:${scene.y}`;
}

function avatarStyle(id) {
  const avatar = avatars.find((item) => item.id === Number(id)) || avatars[0];
  return `--avatar-x:${avatar.x};--avatar-y:${avatar.y}`;
}

function avatarMarkup(id, extraClass = '') {
  return `<span class="avatar-sprite ${extraClass}" style="${avatarStyle(id)}" aria-hidden="true"></span>`;
}

function getOption(challenge, optionId) {
  return challenge.options.find((option) => option.id === optionId);
}

function currentChallenge() {
  return state.mode === 'career'
    ? careers[state.career].challenges[state.step]
    : discoveryRounds[state.step];
}

function activeStates() {
  return state.choices.map((choice) => choice.state).filter(Boolean);
}

function linkText(option) {
  if (!option.links) return '';
  const match = activeStates().find((flag) => option.links[flag]);
  return match ? option.links[match] : '';
}

function resetGame({ keepProfile = true } = {}) {
  const profile = keepProfile ? state.profile : { name: '', avatar: 0 };
  state = { ...defaultState(), profile };
  saveState();
}

function startNewMission() {
  const profile = state.profile;
  state = { ...defaultState(), profile, screen: 'profile' };
  saveState();
  render();
}

function startCareer(key) {
  const career = careers[key];
  state.mode = 'career';
  state.career = key;
  state.step = 0;
  state.phase = 'choice';
  state.choices = [];
  state.stats = Object.fromEntries(career.metrics.map((metric) => [metric.key, metric.initial]));
  state.screen = 'play';
  state.resumeScreen = 'play';
  saveState();
  render();
}

function startDiscovery() {
  state.mode = 'discover';
  state.career = null;
  state.step = 0;
  state.phase = 'choice';
  state.choices = [];
  state.stats = { time: 72, clarity: 42, resources: 68 };
  state.shuffledOrders = Object.fromEntries(discoveryRounds.map((round) => [round.id, shuffle(round.options.map((option) => option.id))]));
  state.screen = 'play';
  state.resumeScreen = 'play';
  saveState();
  render();
}

function chooseOption(optionId) {
  const challenge = currentChallenge();
  if (!challenge || state.phase !== 'choice') return;
  const option = getOption(challenge, optionId);
  if (!option) return;

  const choice = {
    challengeId: challenge.id,
    optionId: option.id,
    title: displayOptionTitle(option),
    action: option.action,
    state: option.state || null,
    career: option.career || state.career,
    secondary: option.secondary || null,
    motivation: option.motivation || null
  };

  state.choices = state.choices.filter((item) => item.challengeId !== challenge.id);
  state.choices.push(choice);

  if (state.mode === 'career' && option.effect) {
    Object.entries(option.effect).forEach(([key, delta]) => {
      state.stats[key] = clamp((state.stats[key] ?? 50) + delta);
    });
  } else if (state.mode === 'discover') {
    state.stats.time = clamp(state.stats.time - 8);
    state.stats.clarity = clamp(state.stats.clarity + 10);
    state.stats.resources = clamp(state.stats.resources - 4);
  }

  state.phase = 'consequence';
  saveState();
  playSound('choice');
  render();
}

function continueGame() {
  const total = state.mode === 'career' ? 3 : 5;
  if (state.step >= total - 1) {
    state.screen = state.mode === 'career' ? 'careerResult' : 'discoveryResult';
    state.resumeScreen = null;
  } else {
    state.step += 1;
    state.phase = 'choice';
  }
  saveState();
  playSound('next');
  render();
}

function goHome() {
  if (['play', 'careerResult', 'discoveryResult'].includes(state.screen)) state.resumeScreen = state.screen;
  state.screen = 'home';
  saveState();
  render();
}

function resumeMission() {
  state.screen = state.resumeScreen || 'play';
  saveState();
  render();
}

function render() {
  const screens = {
    home: renderHome,
    profile: renderProfile,
    mode: renderMode,
    career: renderCareerSelect,
    play: renderPlay,
    careerResult: renderCareerResult,
    discoveryResult: renderDiscoveryResult
  };
  (screens[state.screen] || renderHome)();
  bindCommonActions();
  app.focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: 'instant' });
  if (state.screen === 'play' && state.phase === 'consequence') {
    window.requestAnimationFrame(() => {
      const consequence = document.querySelector('.consequence-panel');
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      consequence?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'center' });
      consequence?.focus({ preventScroll: true });
    });
  }
}

function renderHome() {
  const hasProgress = Boolean(state.resumeScreen && (state.choices.length || state.mode));
  app.innerHTML = `
    <section class="screen hero-screen" id="inicio">
      <div class="scene-backdrop" style="${sceneStyle('city')}" aria-hidden="true"></div>
      <div class="hero-motion" aria-hidden="true">
        <span class="signal-wave wave-a"></span>
        <span class="signal-wave wave-b"></span>
        <span class="route-light"></span>
        <span class="emergency-flare"></span>
      </div>
      <div class="hero-content">
        <p class="eyebrow">Transmisión interrumpida · 17:10</p>
        <h1 class="hero-title">Apagón <span>zombi</span></h1>
        <div class="story-copy">
          <p>La ciudad se apagó. Sus celulares perdieron la señal. El último aviso confirmó que el gimnasio municipal abrió como refugio.</p>
          <p>Son cinco amigos recién egresados de ingeniería. Tienen conocimientos distintos, recursos limitados y una decisión que tomar juntos.</p>
          <p>El refugio cierra a las 18:25. <strong>¿Cómo van a llegar?</strong></p>
        </div>
        <div class="scenario-strip" aria-label="Datos del escenario">
          <div><span>Salida prevista</span><strong>17:10</strong></div>
          <div><span>Oscurece</span><strong>18:05</strong></div>
          <div class="critical"><span>Cierre</span><strong>18:25</strong></div>
          <div><span>Red</span><strong>Sin conexión</strong></div>
        </div>
        <button class="primary-button" type="button" data-action="new">Entrar a la misión <span aria-hidden="true">→</span></button>
        ${hasProgress ? `
          <div class="resume-card">
            <p><strong>${escapeHtml(state.profile.name || 'Tu misión')}</strong> tiene una partida guardada.</p>
            <div class="resume-actions">
              <button class="ghost-button" type="button" data-action="resume">Continuar partida</button>
              <button class="ghost-button" type="button" data-action="new">Comenzar otra</button>
            </div>
          </div>` : ''}
      </div>
    </section>`;
}

function renderProfile() {
  app.innerHTML = `
    <section class="screen">
      <div class="setup-shell">
        <div class="section-heading">
          <p class="eyebrow">Paso 1 de 2 · Tu protagonista</p>
          <h1>¿Quién entra a la misión?</h1>
          <p>Tu nombre y avatar aparecerán durante toda la aventura. Cualquier personaje puede explorar cualquier ingeniería.</p>
        </div>
        <form class="setup-panel" data-profile-form>
          <div class="name-row">
            <label class="field-label" for="player-name">Tu nombre</label>
            <input id="player-name" name="playerName" type="text" maxlength="30" autocomplete="given-name" value="${escapeHtml(state.profile.name)}" placeholder="Escribe tu nombre" required />
            <button class="primary-button" type="submit">Continuar <span aria-hidden="true">→</span></button>
          </div>
          <span class="field-label">Elige un avatar</span>
          <div class="avatar-grid" role="radiogroup" aria-label="Avatares disponibles">
            ${avatars.map((avatar) => `
              <button class="avatar-button ${state.profile.avatar === avatar.id ? 'selected' : ''}" type="button" role="radio" aria-checked="${state.profile.avatar === avatar.id}" data-avatar="${avatar.id}">
                ${avatarMarkup(avatar.id)}
                <span>Personaje ${avatar.id + 1}</span>
              </button>`).join('')}
          </div>
        </form>
      </div>
    </section>`;
}

function renderMode() {
  app.innerHTML = `
    <section class="screen">
      <div class="setup-shell">
        <div class="section-heading">
          <p class="eyebrow">Paso 2 de 2 · Elige la experiencia</p>
          <h1>${escapeHtml(state.profile.name)}, ¿cómo quieres explorar?</h1>
          <p>Una escena. Una decisión. Una consecuencia. Elige cómo quieres entrar a la historia.</p>
        </div>
        <div class="mode-grid">
          <button class="mode-card" type="button" data-mode="career">
            <span class="mode-number">Modo 01 · 3 retos</span>
            <h3>Vive una ingeniería</h3>
            <p>Tres decisiones conectadas. Lo que construyas al inicio regresará cuando algo falle.</p>
          </button>
          <button class="mode-card" type="button" data-mode="discover">
            <span class="mode-number">Modo 02 · 5 retos</span>
            <h3>Descubre tu enfoque</h3>
            <p>Cinco decisiones rápidas. Las carreras relacionadas se revelan sólo al final.</p>
          </button>
        </div>
      </div>
    </section>`;
}

function renderCareerSelect() {
  app.innerHTML = `
    <section class="screen">
      <div class="setup-shell">
        <div class="section-heading">
          <p class="eyebrow">Vive una ingeniería</p>
          <h1>Elige desde dónde tomarás las decisiones</h1>
          <p>No necesitas saber ingeniería. Elige lo que harías y descubre el concepto después.</p>
        </div>
        <div class="career-grid">
          ${Object.entries(careers).map(([key, career]) => `
            <button class="career-card" type="button" data-career="${key}">
              <span class="career-code">${career.code}</span>
              <h3>${career.name}</h3>
              <p>${career.hook}</p>
              <span class="card-go">Entrar <b aria-hidden="true">→</b></span>
            </button>`).join('')}
        </div>
      </div>
    </section>`;
}

function metricsForCurrentMode() {
  if (state.mode === 'career') return careers[state.career].metrics;
  return [
    { key: 'time', label: 'Margen' },
    { key: 'clarity', label: 'Pistas' },
    { key: 'resources', label: 'Recursos' }
  ];
}

function renderProgress(total) {
  return Array.from({ length: total }, (_, index) => `
    ${index ? `<span class="progress-line ${index <= state.step ? 'done' : ''}"></span>` : ''}
    <span class="progress-node ${index < state.step ? 'done' : ''} ${index === state.step ? 'current' : ''}" aria-label="Reto ${index + 1}${index === state.step ? ', actual' : ''}"></span>
  `).join('');
}

function orderedDiscoveryOptions(challenge) {
  const order = state.shuffledOrders[challenge.id] || challenge.options.map((option) => option.id);
  return order.map((id) => getOption(challenge, id)).filter(Boolean);
}

function renderPlay() {
  const challenge = currentChallenge();
  if (!challenge) { goHome(); return; }
  const total = state.mode === 'career' ? 3 : 5;
  const career = state.mode === 'career' ? careers[state.career] : null;
  const metrics = metricsForCurrentMode();
  const options = state.mode === 'discover' ? orderedDiscoveryOptions(challenge) : challenge.options;
  const choice = state.choices.find((item) => item.challengeId === challenge.id);
  const selected = choice ? getOption(challenge, choice.optionId) : null;
  const prior = state.choices.filter((item) => item.challengeId !== challenge.id);
  const memory = prior.length ? prior[prior.length - 1].title : '';

  app.innerHTML = `
    <section class="screen game-screen phase-${state.phase}">
      <div class="game-bg" style="${sceneStyle(challenge.scene)}" aria-hidden="true"></div>
      <div class="cinematic-fx" aria-hidden="true">
        <span class="fx-fog"></span>
        <span class="fx-scan"></span>
        <span class="fx-spark spark-one"></span>
        <span class="fx-spark spark-two"></span>
        <span class="fx-spark spark-three"></span>
      </div>
      <div class="scene-avatar" aria-hidden="true">${avatarMarkup(state.profile.avatar)}</div>
      <div class="game-hud">
        <div class="player-chip">
          <div class="mini-avatar">${avatarMarkup(state.profile.avatar)}</div>
          <div><span class="player-name">${escapeHtml(state.profile.name)}</span><span class="player-role">${career ? career.short : 'Explorando enfoques'}</span></div>
        </div>
        <div class="progress-map" aria-label="Progreso de la misión">${renderProgress(total)}</div>
        <div class="hud-stats">
          ${metrics.map((metric) => `<div class="hud-stat"><span>${metric.label}</span><strong>${Math.round(state.stats[metric.key] ?? 50)}%</strong></div>`).join('')}
        </div>
      </div>

      <div class="challenge-shell">
        <div class="scene-copy">
          <div class="beat-strip"><span>Reto ${state.step + 1} / ${total}</span><i></i><b>${state.phase === 'choice' ? 'Decide' : 'Consecuencia'}</b></div>
          <p class="eyebrow">${challenge.kicker}</p>
          <h1>${challenge.title}</h1>
          <p>${challenge.story}</p>
          ${memory && state.phase === 'choice' ? `<div class="memory-chip"><span aria-hidden="true">↻</span><strong>Sigue activo:</strong> ${escapeHtml(memory)}</div>` : ''}
          <p class="question">${challenge.question}</p>
        </div>

        ${state.phase === 'choice' ? `
          <div class="options-panel">
            <div class="decision-header"><span>¿Qué haces ahora?</span><small>El reloj no se detiene. Tu decisión cambia lo que ocurre.</small></div>
            <div class="options-grid ${options.length === 5 ? 'five' : ''}">
              ${options.map((option, index) => `
                <button class="option-card" type="button" data-option="${option.id}">
                  <span class="option-letter">${String.fromCharCode(65 + index)}</span>
                  <span class="option-copy"><strong>${displayOptionTitle(option)}</strong><p>${option.action}</p></span>
                  <span class="option-arrow" aria-hidden="true">→</span>
                </button>`).join('')}
            </div>
          </div>` : renderConsequence(selected, challenge, total)}
      </div>
    </section>`;
}

function transitionScene() {
  const challenges = state.mode === 'career' ? careers[state.career].challenges : discoveryRounds;
  return challenges[state.step + 1]?.scene || 'refuge';
}

function transitionVideo() {
  const scene = transitionScene();
  const autoplay = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finalMoment = (state.mode === 'career' ? state.step === 2 : state.step === 4);
  return `
    <figure class="transition-film">
      <video ${autoplay ? 'autoplay' : ''} muted playsinline loop preload="metadata" aria-label="Transición hacia la siguiente escena">
        <source src="assets/clips/${scene}.mp4" type="video/mp4" />
      </video>
      <figcaption><span>${finalMoment ? 'Última transmisión' : 'La ciudad cambia'}</span><strong>${finalMoment ? 'El refugio está por cerrar' : 'El equipo avanza, pero el peligro también'}</strong></figcaption>
      <i aria-hidden="true"></i>
    </figure>`;
}

function renderConsequence(option, challenge, total) {
  if (!option) return '';
  const memory = linkText(option);
  if (state.mode === 'discover') {
    return `
      <div class="options-panel consequence-panel" tabindex="-1">
        <div class="impact-banner"><span>Decisión registrada</span><strong>La historia cambió</strong></div>
        <div class="choice-echo">${option.action}</div>
        <div class="impact-line">
          <span aria-hidden="true">✦</span>
          <p>El equipo incorpora tu aportación. La relación con las ingenierías se revelará al final.</p>
        </div>
        ${transitionVideo()}
        <div class="continue-row"><button class="primary-button" type="button" data-action="continue">${state.step === total - 1 ? 'Ver mi resultado' : 'Siguiente reto'} <span aria-hidden="true">→</span></button></div>
      </div>`;
  }
  return `
    <div class="options-panel consequence-panel" tabindex="-1">
      <div class="impact-banner"><span>El escenario respondió</span><strong>${displayOptionTitle(option)}</strong></div>
      <div class="consequence-grid">
        <div class="consequence-item"><span>Protegiste</span><strong>${option.protects}</strong></div>
        <div class="consequence-item"><span>A cambio</span><strong>${option.cost}</strong></div>
        <div class="consequence-item"><span>Queda activo</span><strong>${option.active}</strong></div>
      </div>
      ${memory ? `<div class="memory-impact"><span aria-hidden="true">↻</span><p><strong>Tu decisión anterior intervino:</strong> ${memory}</p></div>` : ''}
      <details class="concept-details"><summary>¿Qué habilidad acabas de usar?</summary><p>${option.concept}</p></details>
      ${transitionVideo()}
      <div class="continue-row"><button class="primary-button" type="button" data-action="continue">${state.step === total - 1 ? 'Ver mi recorrido' : 'Siguiente reto'} <span aria-hidden="true">→</span></button></div>
    </div>`;
}

function renderCareerResult() {
  const career = careers[state.career];
  const chosen = state.choices.map((choice) => {
    const challenge = career.challenges.find((item) => item.id === choice.challengeId);
    return { challenge, option: getOption(challenge, choice.optionId) };
  });
  const concepts = chosen.map(({ option }) => option.concept.split(',')[0].replace('.', ''));

  app.innerHTML = `
    <section class="screen results-screen">
      <div class="results-shell">
        <div class="result-hero">
          <div>
            <p class="eyebrow">Misión completada · ${career.code}</p>
            <h1>${escapeHtml(state.profile.name)}, diseñaste una forma de llegar.</h1>
            <p>${career.result}</p>
            <p>Esta aventura muestra una parte de la carrera. También puede aplicarse en ${career.applications}.</p>
          </div>
          <div class="result-avatar">${avatarMarkup(state.profile.avatar)}</div>
        </div>

        <div class="result-grid">
          ${concepts.map((concept, index) => `<article class="result-card"><span class="career-code">Habilidad ${index + 1}</span><h3>${concept}</h3><p>Nació de tu decisión en el reto ${index + 1} y modificó el resto del recorrido.</p></article>`).join('')}
        </div>

        <h2>Tu recorrido de decisiones</h2>
        <div class="journey-list">
          ${chosen.map(({ challenge, option }, index) => `
            <article class="journey-item">
              <span class="journey-number">${index + 1}</span>
              <div><h3>${displayOptionTitle(option)}</h3><p>${challenge.title}: ${option.protects} ${option.cost}</p></div>
            </article>`).join('')}
        </div>

        <div class="result-actions">
          <button class="primary-button" type="button" data-action="other-career">Vivir otra ingeniería</button>
          <button class="ghost-button" type="button" data-action="discover">Descubrir mi enfoque</button>
          <button class="ghost-button" type="button" data-action="home">Volver al inicio</button>
        </div>
      </div>
    </section>`;
}

function discoveryScores() {
  return Object.fromEntries(Object.keys(careers).map((key) => [key, state.choices.filter((choice) => choice.career === key).length]));
}

function relatedCareerKeys(scores) {
  const entries = Object.entries(scores).filter(([, score]) => score > 0);
  if (entries.length === 5 && entries.every(([, score]) => score === 1)) return entries.map(([key]) => key);
  const levels = [...new Set(entries.map(([, score]) => score))].sort((a, b) => b - a);
  const threshold = levels[Math.min(1, levels.length - 1)];
  return entries.filter(([, score]) => score >= threshold).map(([key]) => key);
}

function renderDiscoveryResult() {
  const scores = discoveryScores();
  const related = relatedCareerKeys(scores);
  const allEqual = Object.values(scores).every((score) => score === 1);
  const motivations = [...new Set(state.choices.map((choice) => choice.motivation))];

  app.innerHTML = `
    <section class="screen results-screen">
      <div class="results-shell">
        <div class="result-hero">
          <div>
            <p class="eyebrow">Exploración completada</p>
            <h1>${escapeHtml(state.profile.name)}, en esta misión te atrajo…</h1>
            <p>${allEqual ? 'probar cinco maneras distintas de resolver la crisis y conectar perspectivas.' : motivations.slice(0, 3).join(', ') + '.'}</p>
            <p>Esto describe tus cinco elecciones dentro de la aventura. No es una prueba vocacional ni determina una carrera.</p>
          </div>
          <div class="result-avatar">${avatarMarkup(state.profile.avatar)}</div>
        </div>

        <h2>Distribución de tus cinco elecciones</h2>
        <div class="score-list">
          ${Object.entries(scores).map(([key, score]) => `
            <div class="score-row">
              <span class="score-label">${careers[key].code}</span>
              <span class="score-track"><i class="score-fill" style="--score:${score * 20}%"></i></span>
              <span class="score-value">${score} de 5</span>
            </div>`).join('')}
        </div>

        <h2>${allEqual ? 'Cinco perspectivas presentes' : 'Enfoques con mayor presencia'}</h2>
        <div class="result-grid">
          ${related.map((key) => {
            const career = careers[key];
            const evidence = state.choices.filter((choice) => choice.career === key).map((choice) => choice.action);
            return `<article class="result-card"><span class="career-code">${career.code}</span><h3>${career.name}</h3><p>Apareció cuando elegiste ${evidence.map(asSentenceFragment).join(' y ')}.</p><p>Podrías explorar este enfoque en ${career.applications}.</p><button class="ghost-button" type="button" data-career-result="${key}">Vivir esta ingeniería</button></article>`;
          }).join('')}
        </div>

        <details class="disclosure">
          <summary>Así se relacionan tus elecciones</summary>
          <div class="disclosure-body">
            ${state.choices.map((choice, index) => `<p><strong>Reto ${index + 1}:</strong> ${choice.action}<br />Relación principal: ${careers[choice.career].name}. Conexión secundaria: ${careers[choice.secondary].name}.</p>`).join('')}
          </div>
        </details>

        <div class="result-actions">
          <button class="primary-button" type="button" data-action="repeat-discovery">Repetir con otras decisiones</button>
          <button class="ghost-button" type="button" data-action="other-career">Elegir una ingeniería</button>
          <button class="ghost-button" type="button" data-action="home">Volver al inicio</button>
        </div>
      </div>
    </section>`;
}

function bindCommonActions() {
  if (soundToggle) soundToggle.onclick = toggleSound;
  updateSoundToggle();
  document.querySelectorAll('[data-home-link]').forEach((link) => link.addEventListener('click', (event) => { event.preventDefault(); goHome(); }));
  document.querySelectorAll('[data-action]').forEach((button) => button.addEventListener('click', () => {
    const action = button.dataset.action;
    if (action === 'new') startNewMission();
    if (action === 'resume') resumeMission();
    if (action === 'continue') continueGame();
    if (action === 'home') goHome();
    if (action === 'discover') startDiscovery();
    if (action === 'repeat-discovery') startDiscovery();
    if (action === 'other-career') {
      state.screen = 'career'; state.mode = null; state.career = null; state.choices = []; state.resumeScreen = null; saveState(); render();
    }
  }));

  const profileForm = document.querySelector('[data-profile-form]');
  if (profileForm) {
    profileForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = new FormData(profileForm).get('playerName').trim();
      if (!name) { announce('Escribe tu nombre para continuar.'); document.querySelector('#player-name').focus(); return; }
      state.profile.name = name;
      state.screen = 'mode';
      saveState();
      render();
    });
  }

  document.querySelectorAll('[data-avatar]').forEach((button) => button.addEventListener('click', () => {
    state.profile.avatar = Number(button.dataset.avatar);
    saveState();
    document.querySelectorAll('[data-avatar]').forEach((item) => {
      const selected = item === button;
      item.classList.toggle('selected', selected);
      item.setAttribute('aria-checked', String(selected));
    });
  }));

  document.querySelectorAll('[data-mode]').forEach((button) => button.addEventListener('click', () => {
    if (button.dataset.mode === 'career') { state.screen = 'career'; state.mode = null; saveState(); render(); }
    else startDiscovery();
  }));

  document.querySelectorAll('[data-career]').forEach((button) => button.addEventListener('click', () => startCareer(button.dataset.career)));
  document.querySelectorAll('[data-career-result]').forEach((button) => button.addEventListener('click', () => startCareer(button.dataset.careerResult)));
  document.querySelectorAll('[data-option]').forEach((button) => button.addEventListener('click', () => chooseOption(button.dataset.option)));
}

function escapeHtml(value = '') {
  return String(value).replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character]));
}

function asSentenceFragment(value = '') {
  const text = String(value).trim().replace(/[.!?]+$/, '');
  return text.charAt(0).toLowerCase() + text.slice(1);
}

function capitalizeFirst(value = '') {
  const text = String(value).trim();
  return text.charAt(0).toUpperCase() + text.slice(1);
}

render();
