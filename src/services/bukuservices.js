import BukuModel from "../models/buku.model.js";

export const searchbukuService = (key) => {
    return BukuModel.find(
        {
            "$or": [
                { name: { $regex: key } },
                { description: { $regex: key } }
            ]
        }
    );
}

export const fetchAllBukuService = () => {
    return BukuModel.find();
}

export const fetchBukuByIdService = (id) => {
    return BukuModel.findById(id);
}

export const createBukuServices = (data) => {
    const newBuku = new BukuModel({ ...data });
    return newBuku.save();
}

export const updateBukuService = (data, id) => {
    return BukuModel.updateOne({ _id: id }, {
        $set: {
            'name': data.name,
            'description': data.description
        }
    });
}

export const deleteBuuService = (id) => {
    return BukuModel.deleteOne({ _id: id });
}

