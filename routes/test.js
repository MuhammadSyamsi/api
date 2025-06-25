// routes/test.js
import express from 'express';
import pkg from '@prisma/client';
const { PrismaClient } = pkg;

const router = express.Router();
const prisma = new PrismaClient();

router.get('/test-db', async (req, res) => {
    try {
        const users = await prisma.users.findMany(); // ganti sesuai model schema
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Terjadi kesalahan saat ambil data alumni' });
    }
});

export default router;
