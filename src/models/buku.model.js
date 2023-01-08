import mongoose from 'mongoose';

const BukuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ['Fiksi', 'NonFiksi'],
        required: true,
    },
    author: {
        type: String,
        required: true,
    }
}, {
    versionKey: false
})

const BukuModel = mongoose.model('buku', BukuSchema);
export default BukuModel;