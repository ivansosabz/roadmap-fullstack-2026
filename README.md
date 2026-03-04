# Fullstack Development Roadmap

Repositorio personal donde documento mi ruta de aprendizaje para convertirme en **desarrollador Fullstack**.  
Aquí organizo teoría, práctica, mini proyectos y un proyecto final aplicando buenas prácticas de desarrollo.

## Objetivo del repositorio

Este repositorio tiene como objetivo:

- Consolidar fundamentos de **JavaScript y TypeScript**
- Desarrollar **APIs profesionales con Node y Express**
- Trabajar con **bases de datos relacionales (PostgreSQL)**
- Implementar **autenticación segura con JWT**
- Construir **interfaces modernas con React**
- Conectar frontend y backend en una aplicación completa
- Realizar **deploy en la nube**
- Mantener un flujo de trabajo profesional con **Git**

---

# Tecnologías utilizadas

Este roadmap está enfocado en el siguiente stack tecnológico:

- JavaScript
- TypeScript
- Node.js
- Express
- PostgreSQL
- React
- JWT Authentication
- REST APIs
- Git
- GitHub
- Deploy en la nube

---

# Roadmap de aprendizaje

| Semana | Tema |
|------|------|
| 1–2 | JavaScript profundo (promesas, async/await, closures) |
| 3–4 | TypeScript y tipado de APIs |
| 5–6 | Node.js + Express y creación de API REST |
| 7 | PostgreSQL y diseño de base de datos |
| 8 | Autenticación profesional con JWT |
| 9 | Desarrollo frontend con React |
| 10 | Integración Fullstack (frontend + backend) |
| 11 | Deploy en la nube |
| 12 | Refactorización, limpieza y documentación |

---

# Estructura del repositorio

```text
roadmap-fullstack/

│
├── 01-js-profundo/
│   ├── scope/
│   ├── closures/
│   ├── asincronia/
│   └── event-loop/
│
├── 02-typescript/
│   ├── fundamentos/
│   ├── interfaces-types/
│   ├── generics/
│   └── tipado-api/
│
├── 03-node-express/
│   └── api-crud/
│
├── 04-postgresql/
│   ├── scripts-sql/
│   └── diagramas/
│
├── 05-autenticacion-jwt/
│   └── backend-auth/
│
├── 06-react/
│   └── dashboard-app/
│
├── 07-integracion-fullstack/
│   ├── backend/
│   └── frontend/
│
├── 08-deploy/
│   ├── frontend-vercel/
│   └── backend-render/
│
├── 09-refactor-cleanup/
│
├── proyecto-final/
│   ├── backend/
│   └── frontend/
│
└── apuntes/
```

Cada carpeta representa una **fase del proceso de aprendizaje**, con ejemplos, ejercicios y mini proyectos.

---

# Metodología de commits

Para mantener el historial del repositorio claro y profesional se utiliza una convención de commits basada en prefijos.

## Tipos de commit

```text
feat: nueva funcionalidad
fix: corrección de errores
docs: cambios en documentación
refactor: mejora de código sin cambiar funcionalidad
test: agregar o modificar tests
chore: tareas de mantenimiento
```

## Ejemplos

```text
feat: implement async/await examples
fix: correct promise error handling
docs: update roadmap section
refactor: improve controller structure
```

Evitar mensajes genéricos como:

```text
update code
fix stuff
changes
```

---

# Flujo de trabajo con Git

El flujo de trabajo recomendado es el siguiente.

## 1. Realizar cambios en el proyecto

Trabajar sobre una mejora o funcionalidad específica.

## 2. Agregar archivos al staging

```bash
git add .
```

## 3. Crear commit descriptivo

```bash
git commit -m "feat: add async await examples"
```

## 4. Subir cambios al repositorio remoto

```bash
git push origin main
```

Si se trabaja con ramas:

```bash
git checkout -b feature/nombre-funcionalidad
```

Luego subir la rama:

```bash
git push origin feature/nombre-funcionalidad
```

---

# Convención de carpetas

Cada carpeta tiene un propósito específico.

| Carpeta | Propósito |
|------|------|
| `01-js-profundo` | Fundamentos avanzados de JavaScript |
| `02-typescript` | Tipado estático y buenas prácticas |
| `03-node-express` | Desarrollo de APIs REST |
| `04-postgresql` | Diseño y consultas de base de datos |
| `05-autenticacion-jwt` | Implementación de autenticación segura |
| `06-react` | Desarrollo frontend |
| `07-integracion-fullstack` | Conexión entre frontend y backend |
| `08-deploy` | Configuración de despliegue |
| `09-refactor-cleanup` | Mejoras finales del proyecto |
| `proyecto-final` | Aplicación completa Fullstack |
| `apuntes` | Notas teóricas y resúmenes |

---

# Reglas personales de desarrollo

Para mantener consistencia durante el proceso de aprendizaje:

- No subir código sin probar
- Mantener funciones pequeñas y claras
- Evitar archivos excesivamente largos
- Hacer commits frecuentes
- Documentar conceptos importantes
- Mantener estructura de carpetas ordenada

---

# Proyectos incluidos

Durante el roadmap se desarrollarán varios proyectos y ejercicios.

- Ejemplos de asincronía con JavaScript
- Simulador de API
- API REST con Node y Express
- Sistema con autenticación JWT
- Dashboard frontend con React
- Integración completa frontend + backend
- Proyecto final Fullstack deployado

---

# Objetivo profesional

Este repositorio documenta mi proceso de preparación para trabajar como **desarrollador Fullstack**, construyendo proyectos reales y aplicando buenas prácticas utilizadas en el desarrollo profesional de software.
