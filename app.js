import express from 'express';
import usersRouter from './routes/users.js'; // contoh route

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
