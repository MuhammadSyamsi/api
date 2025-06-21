// routes/users.js
import express from 'express';
import prisma from '../lib/prisma.js';

const router = express.Router();

router.get('/', async (req, res) => {
    const users = await prisma.users.findMany(); // Sesuaikan dengan nama tabel
    res.json(users);
});

export default router;
