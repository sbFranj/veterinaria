const express = require("express")
const router = express.Router()
const {check} = require("express-validator");
const {getAnimales, getAnimal, addAnimal, delAnimal, editAnimal} = require ("../controllers/animales");
const { validateFields } = require("../middlewares/validate-fields");

router
.route("/")
.get(getAnimales)
.post([
    check("name", "Name is required").not().isEmpty(),
    check("age", "Ages should be a number").isNumeric(),
    check("especie", "Especie is required").notEmpty(),
    validateFields
], addAnimal)

router
.route("/:id")
.delete([
    check("id", "Not valid mongo id").isMongoId(),
    validateFields
], delAnimal)
.get([
    check("id", "Not valid mongo id").isMongoId(),
    validateFields
], getAnimal)
.put([
    check("id", "Not valid mongo id").isMongoId(),
    check("age", "Ages should be a number").isNumeric(),
    check("name", "Name is required").not().isEmpty(),
    check("especie", "Especie is required").notEmpty(),
    validateFields
], editAnimal)

module.exports = router;