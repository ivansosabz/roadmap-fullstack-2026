# Mini Curso: Node.js + Express (Guía básica)

Guía mínima para crear, configurar y ejecutar un proyecto backend con **Express**.

---

# 1. Requisitos

Instalar:

- Node.js
- npm

Verificar instalación:

```bash
node -v
npm -v
```

---

# 2. Crear proyecto

Crear carpeta del proyecto:

```bash
mkdir api-express
cd api-express
```

Inicializar proyecto Node:

```bash
npm init -y
```

Esto creará:

```text
package.json
```

---

# 3. Instalar Express

```bash
npm install express
```

---

# 4. Crear archivo principal

Crear carpeta `src`:

```bash
mkdir src
```

Crear archivo principal:

```bash
src/index.js
```

---

# 5. Crear servidor básico

Contenido de `src/index.js`:

```javascript
const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Servidor funcionando");
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
```

---

# 6. Ejecutar el servidor

```bash
node src/index.js
```

Abrir en el navegador:

```
http://localhost:3000
```

---

# 7. Usar JSON en las peticiones

Agregar middleware para recibir JSON.

```javascript
app.use(express.json());
```

Servidor completo:

```javascript
const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Servidor funcionando");
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
```

---

# 8. Crear rutas

Ejemplo de ruta GET.

```javascript
app.get("/usuarios", (req, res) => {
  res.json([
    { id: 1, nombre: "Carlos" },
    { id: 2, nombre: "Ana" }
  ]);
});
```

---

# 9. Crear ruta POST

```javascript
app.post("/usuarios", (req, res) => {
  const usuario = req.body;

  res.json({
    mensaje: "Usuario creado",
    usuario
  });
});
```

---

# 10. Parámetros en rutas

Ejemplo:

```
GET /usuarios/:id
```

Código:

```javascript
app.get("/usuarios/:id", (req, res) => {
  const id = req.params.id;

  res.json({
    mensaje: `Usuario con id ${id}`
  });
});
```

---

# 11. Organizar rutas en archivos

Crear estructura:

```text
src
│
├── index.js
└── routes
    └── usuarios.js
```

---

# 12. Crear archivo de rutas

`src/routes/usuarios.js`

```javascript
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    { id: 1, nombre: "Carlos" },
    { id: 2, nombre: "Ana" }
  ]);
});

router.post("/", (req, res) => {
  const usuario = req.body;

  res.json({
    mensaje: "Usuario creado",
    usuario
  });
});

module.exports = router;
```

---

# 13. Usar rutas en el servidor

Modificar `src/index.js`.

```javascript
const express = require("express");

const app = express();

const usuariosRoutes = require("./routes/usuarios");

const PORT = 3000;

app.use(express.json());

app.use("/usuarios", usuariosRoutes);

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
```

---

# 14. Ejecutar nuevamente el servidor

```bash
node src/index.js
```

Rutas disponibles:

```
GET    /usuarios
POST   /usuarios
```

---

# 15. Estructura final del proyecto

```text
api-express
│
├── package.json
└── src
    │
    ├── index.js
    │
    └── routes
        └── usuarios.js
```