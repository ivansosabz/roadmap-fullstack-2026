const express = require('express');
const app = express();
const estudiantesRoutes = require('./routes/estudiantesRoutes');
const profesorRoutes = require('./routes/profesoresRoutes');

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.use('/estudiantes', estudiantesRoutes);
app.use('/profesores', profesorRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})