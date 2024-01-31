const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnimalSchema = new Schema({
    name: String,
    age: Number,
    especie: String,
})

module.exports = mongoose.model("Animal", AnimalSchema);