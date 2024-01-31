const Ficha = require("../models/ficha");
const {validationResult} = require("express-validator");

const getFichas = async (req, res)=>{
    try {
        const fichas = await Ficha.find()
        res.status(200).json(fichas)
    } catch (error) {
        res.status(500).json({message: error})
    }
}

const getFicha = async (req, res)=>{//modificar para que no de null cuando no encuentra a 1
    try {
        const ficha = await Ficha.findById(req.params.id)
        if(ficha){
            //res.status(200).json(ficha)
            res.status(400).json({message:"Id no encontrado"})
        }else{
        }
    } catch (error) {
        res.status(500).json({message: error})
    }
}

const addFicha = async(req, res)=>{
    const ficha = req.body;
    const newFicha = new Ficha(ficha);

    try {
        await newFicha.save(); 
        res.status(201).json(newFicha);
    } catch (error) {
        res.status(500).json({message: error})
    }
}

const delFicha = async(req, res)=>{
    try {
        await Ficha.findByIdAndDelete(req.params.id)
        res.status(200).json({message: "Eliminado"})
    } catch (error) {
        res.status(500).json({message: error})
    }
}

const editFicha = async(req, res)=>{
    const ficha = req.body;
    try {
        await Ficha.findByIdAndUpdate(req.params.id, ficha)
        res.status(201).json({message: "Actualizado"})
    } catch (error) {
        res.status(500).json({message: error})
    }
}

module.exports={getFichas, addFicha, delFicha, getFicha, editFicha}