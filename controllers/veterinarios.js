const Veterinario = require("../models/veterinario");
const {validationResult} = require("express-validator");

const getVeterinarios = async (req, res)=>{
    try {
        const veterinarios = await Veterinario.find()
        res.status(200).json(veterinarios)
    } catch (error) {
    
        res.status(500).json({message: error})
    }
}

const getVeterinario = async (req, res)=>{
    try {
        const veterinario = await Veterinario.findById(req.params.id)
        if(veterinario){
            res.status(200).json(veterinario)
        }else{
            res.status(400).json({message:"Id no encontrado"})
        }

    } catch (error) {
        res.status(500).json({message: error})
    }
}

const addVeterinario = async(req, res)=>{
    const veterinario = req.body;
    const newVeterinario = new Veterinario(veterinario);

    try {
        await newVeterinario.save(); 
        res.status(201).json(newVeterinario);
    } catch (error) {
        res.status(500).json({message: error})
    }
}

const delVeterinario = async(req, res)=>{
    try {
        const veterinario = await Veterinario.findByIdAndDelete(req.params.id)
        if(veterinario){
            res.status(200).json({message: "Eliminado"})

        }else{
            res.status(400).json({message:"Id no existe"})
        }
        
    } catch (error) {
        res.status(500).json({message: error})
    }
}

const editVeterinario = async(req, res)=>{
    const veterinario = req.body;
    try {
        await Veterinario.findByIdAndUpdate(req.params.id, veterinario)
        res.status(201).json({message: "Actualizado"})
    } catch (error) {
        res.status(500).json({message: error})
    }
}

module.exports={getVeterinario, addVeterinario, delVeterinario, getVeterinarios, editVeterinario}