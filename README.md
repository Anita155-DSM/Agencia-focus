ESTRUCTURA DE CARPETAS DEL PROYECTO A CONTINUACIÓN:

agencia-focus/
├── node_modules/
├── public/              # Imágenes estáticas y el favicon
│   └── logo-agencia.png
├── src/
│   ├── assets/          # Imágenes que importarás en tus componentes
│   ├── components/      # Componentes pequeños y reutilizables (Botones, Cards)
│   ├── layout/          # Estructura principal (Navbar, Footer)
│   ├── sections/        # Cada sección de tu SPA (Hero, Nosotros, etc.)
│   ├── App.jsx          # Orquestador de las secciones
│   ├── main.jsx         # Punto de entrada (aquí importas Bootstrap)
│   └── index.css        # Estilos personalizados para sobreescribir Bootstrap
├── index.html
├── package.json
└── vite.config.js

