const express = require('express');
const cors = require('cors');
const app = express();
const estudiantesRoutes = require('./routes/estudiantesRoutes');
const profesorRoutes = require('./routes/profesoresRoutes');
const cursosRoutes = require('./routes/cursosRoutes');

app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.use('/estudiantes', estudiantesRoutes);
app.use('/profesores', profesorRoutes);
app.use('/cursos', cursosRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})