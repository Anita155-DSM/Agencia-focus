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

Agencia Focus es una **Single Page Application (SPA)** de alto impacto visual diseñada para representar a una agencia boutique de marketing y desarrollo digital. El proyecto destaca por su estética futurista, el uso de efectos de **Glassmorphism** y una experiencia de usuario fluida mediante animaciones modernas.



---

##  Tecnologías y Herramientas

### Lenguajes y Core
* **JavaScript (ES6+):** Lógica funcional y manejo de estados.
* **HTML5 & CSS3:** Estructura semántica y estilos personalizados avanzados.
* **React.js:** Biblioteca principal para la construcción de la interfaz basada en componentes.

### Librerías y Frameworks
* **Vite.js:** Herramienta de construcción (build tool) para un entorno de desarrollo ultra rápido.
* **Bootstrap 5:** Framework de diseño para el sistema de grillas y componentes base.
* **Framer Motion:** Biblioteca para animaciones complejas y transiciones de entrada.
* **tsparticles:** Motor de partículas para el fondo dinámico e interactivo.
* **Bootstrap Icons:** Set de iconos vectoriales integrados.

### Servicios Externos
* **Formspree:** Integración de API para el manejo de formularios de contacto sin backend propio.
* **Netlify:** Hosting y despliegue continuo (CI/CD).

---

##  Descripción del Proyecto

**Tipo de Empresa:** Agencia Tecnológica / Software House / Branding Digital.  
**Tipo de Web:** **Página Web (SPA - Single Page Application)**. A diferencia de un sitio multi-página tradicional, esta web carga una sola vez y navega mediante anclas lógicas, proporcionando una experiencia veloz y sin recargas de navegador.

### Características Principales:
1. **Diseño Futurista:** Implementación de "Dark Mode" premium con acentos en neón y fuentes tecnológicas.
2. **Glassmorphism:** Uso de `backdrop-filter` para crear tarjetas con efecto de vidrio esmerilado.
3. **Interactividad:** Fondo de partículas que reacciona al movimiento del mouse.
4. **Formulario Inteligente:** Envío de datos mediante **Fetch API (AJAX)** para evitar recargas de página innecesarias.
5. **Responsive Design:** Optimización completa para dispositivos móviles, tablets y desktop.

---

##  Instalación y Ejecución

Sigue estos pasos para correr el proyecto localmente:

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/tu-usuario/agencia-focus.git](https://github.com/tu-usuario/agencia-focus.git)
Ingresar a la carpeta del proyecto:

Bash

cd agencia-focus
Instalar dependencias:

Bash

npm install
Ejecutar el servidor de desarrollo:

Bash

npm run dev
La aplicación estará disponible en http://localhost:5173

Construir para producción:

Bash

npm run build

👤 Autor Original
Pérez Anahí Estudiante de último año en Tec. Superior en Desarrollo de Software Multiplataforma.