const Veterinario = require("../models/veterinario")

const existTelephoneNumber = async (telefono)=>{
    const numberDB = await Veterinario.findOne({telefono})
    if(numberDB){
        throw new Error (`Telephone number ${telefono} already exist on database`)
    }
}

const existTelephoneNumberPut = async (telefono, {req})=>{
    const numberDB = await Veterinario.findOne({telefono})
    if(numberDB && numberDB.id!=req.params.id){
        throw new Error (`Telephone number ${telefono} already exist on database`)
    }
}

module.exports = {existTelephoneNumber , existTelephoneNumberPut}