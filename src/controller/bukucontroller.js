import BukuModel from "../models/buku.model.js";
import {
    fetchAllBukuService, fetchBukuByIdService,
    createBukuServices, updateBukuService, deleteBuuService, searchbukuService
} from "../services/bukuservices.js";


export const searchBuku = async (req, res) => {
    var data = await searchbukuService(req.params.key);
    return res.status(200).json(data);
}

export const getAllBuku = async (req, res) => {
    try {
        const buku = await fetchAllBukuService();
        return res.status(200).json(buku);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

export const createBuku = async (req, res) => {
    try {
        const data = await createBukuServices(req.body);
        return res.status(201).json(data);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getBukuById = async (req, res) => {
    try {
        const buku = await fetchBukuByIdService(req.params.id);
        if (buku) {
            return res.status(200).json(buku);
        } else {
            return res.status(400).json('Buku tidak ditemukan');
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const updateBuku = async (req, res) => {
    try {
        const buku = await fetchBukuByIdService(req.params.id);
        if (buku) {
            await updateBukuService(req.body, req.params.id);
            return res.status(201).json('Successfully update');
        } else {
            return res.status(400).json('Buku tidak ditemukan');
        }

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const deleteBuku = async (req, res) => {
    try {
        const buku = await fetchBukuByIdService(req.params.id);
        if (buku) {
            await deleteBuuService(req.params.id);
            return res.status(200).json('Successfully deleted');
        } else {
            return res.status(400).json('Buku tidak ditemukan');
        }

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
