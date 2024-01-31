const Animal = require("../models/animal");
const {validationResult} = require("express-validator");

const getAnimales = async (req, res)=>{
    try {
        const animales = await Animal.find()
        res.status(200).json(animales)
    } catch (error) {
        res.status(500).json({message: error})
    }
}

const getAnimal = async (req, res)=>{
    try {
        const animal = await Animal.findById(req.params.id)
        res.status(200).json(animal)
    } catch (error) {
        res.status(500).json({message: error})
    }
}

const addAnimal = async(req, res)=>{
    const animal = req.body;
    const newAnimal = new Animal(animal);

    try {
        await newAnimal.save(); 
        res.status(201).json(newAnimal);
    } catch (error) {
        res.status(500).json({message: error})
    }
}

const delAnimal = async(req, res)=>{
    try {
        await Animal.findByIdAndDelete(req.params.id)
        res.status(200).json({message: "Eliminado"})
    } catch (error) {
        res.status(500).json({message: error})
    }
}

const editAnimal = async(req, res)=>{
    const animal = req.body;
    try {
        await Animal.findByIdAndUpdate(req.params.id, animal)
        res.status(201).json({message: "Actualizado"})
    } catch (error) {
        res.status(500).json({message: error})
    }
}

module.exports={getAnimales, addAnimal, delAnimal, getAnimal, editAnimal}