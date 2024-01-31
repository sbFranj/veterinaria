const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FichaSchema = new Schema({
    historial: String,
    dolencias: String,
    idAnimal: String,
    idVeterinario: String,
})

module.exports = mongoose.model("Ficha", FichaSchema);