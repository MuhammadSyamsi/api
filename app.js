import express from 'express';
import cors from 'cors';
import testRoutes from './routes/test.js'; // HARUS tambahkan .js jika pakai ESM
import dotenv from 'dotenv';


dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', testRoutes);

// Izinkan dari port 5173(frontend)
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

// app.listen(3000, () => {
//     console.log('Server running on http://localhost:3000');
// });

// const app = express();
// app.listen(3000, () => console.log('Server running'));
// const app = express();
// const port = process.env.PORT || 3000;

// app.use(express.json());

// // Routes
// app.use('/users', usersRouter);

// app.listen(port, () => {
//     console.log(`Server running on http://localhost:${port}`);
// });

