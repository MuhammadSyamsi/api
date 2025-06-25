import express from 'express';
import cors from 'cors';
import testRoutes from './routes/test.js';
import dotenv from 'dotenv';

// perhatikan susunan urutan coding

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// Izinkan dari port 5173(frontend)
app.use(cors({
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.use(express.json());
app.use('/api', testRoutes);

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});