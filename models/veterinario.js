const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VeterinarioSchema = new Schema({
    name: String,
    age: Number,
    telefono: {
        type:Number,
        unique:true
    }
})

module.exports = mongoose.model("Veterinario", VeterinarioSchema);