const Gato = require("../models/gato")
const {validationResult} = require("express-validator")

const getGatos = async (req, res)=>{
    try {
        const gatos = await Gato.find()
        res.status(200).json(gatos)
    } catch (error) {
        res.status(500).json({message: error})
    }
}

const getGato = async(req, res)=>{
    try {
        const gato = await Gato.findOne({name: req.params.name})
        res.status(200).json(gato)
    } catch (error) {
        res.status(500).json({message: error})
    }
}

const addGato = async(req, res)=>{
    const gato = req.body;
    const newGato = new Gato(gato);

    try {
        await newGato.save()
        res.status(201).json(newGato);
    } catch (error) {
        res.status(500).json({message: error})
    }
}

const delGato = async(req, res)=>{
    try {
        await Gato.findOneAndDelete({name: req.params.name});
        res.status(200).json({message: "Eliminado"})
    } catch (error) {
        res.status(500).json({message: error})
    }
}

const editGato = async(req, res)=>{
    const gato = req.body;
    try {
        await Gato.findOneAndUpdate(gato)
        res.status(201).json({message: "Actualizado"})
    } catch (error) {
        res.status(500).json({message: error})
    }
}

module.exports={getGatos, addGato, delGato, getGato, editGato};