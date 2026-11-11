# Beyond Engineering

Sitio oficial del evento **Beyond Engineering**, una experiencia vocacional para estudiantes de preparatoria y sus familias.

## Contenido

- Panel de estudiantes y egresados.
- Concurso de cohetes para estudiantes.
- Curso de inteligencia artificial aplicada a procesos empresariales para familias.
- Explorador interactivo de cinco carreras de ingeniería.
- Agenda, cuenta regresiva y diseño adaptable a dispositivos móviles.

## Ejecutar localmente

No requiere instalación ni proceso de compilación.

```bash
python3 -m http.server 4173 --directory dist
```

Después abre `http://localhost:4173`.

## Publicar

El sitio completo está dentro de `dist/`. El flujo de GitHub Actions incluido publica esa carpeta en GitHub Pages cuando Pages está habilitado con **GitHub Actions** como origen.

También puede desplegarse directamente en cualquier servicio de alojamiento estático.

## Estructura

```text
dist/
├── assets/
│   └── beyond-engineering-poster.jpeg
├── app.js
├── index.html
└── styles.css
```

