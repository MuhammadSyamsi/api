// routes/test.js
import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

router.get('/test-db', async (req, res) => {
    try {
        await prisma.user.findFirst(); // atau tabel lain
        res.json({ success: true, message: 'Database terkoneksi' });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Gagal koneksi DB', detail: error.message });
    }
});

export default router;
