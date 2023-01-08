import express from 'express';
const router = express.Router();

import {
    getAllBuku,
    createBuku,
    getBukuById,
    updateBuku,
    deleteBuku,
    searchBuku
} from '../controller/bukucontroller.js';


router.get('/', (req, res) => {
    res.status(200).json('Connected');
});
router.get('/search/:key', searchBuku);
router.get('/buku', getAllBuku);
router.get('/buku/:id', getBukuById);
router.post('/buku', createBuku);
router.put('/buku/:id', updateBuku);
router.delete('/buku/:id', deleteBuku);

export default router;