const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GatoSchema = new Schema({
    name: String,
    age: Number
})

module.exports = mongoose.model("Gato", GatoSchema);