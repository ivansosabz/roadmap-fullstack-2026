import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';

import estudiantesRoutes from './routes/estudiantesRoutes';
import profesoresRoutes from './routes/profesoresRoutes';
import cursosRoutes from './routes/cursosRoutes';

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/estudiantes', estudiantesRoutes);
app.use('/profesores', profesoresRoutes);
app.use('/cursos', cursosRoutes);

app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Hello, World!' });
});

export default app;