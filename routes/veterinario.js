const express = require("express")
const router = express.Router()
const {check} = require("express-validator");
const {addVeterinario,delVeterinario,editVeterinario,getVeterinario,getVeterinarios} = require ("../controllers/veterinarios");
const { validateFields } = require("../middlewares/validate-fields");
const {existTelephoneNumber, existTelephoneNumberPut} = require("../helpers/db-validators")

router
.route("/")
.get(getVeterinarios)
.post([
    check("name", "Name is required").not().isEmpty(),
    check("age", "Ages should be a number").isNumeric(),
    check("telefono").custom(existTelephoneNumber),
    check("telefono", "Telephone should be a number").isNumeric(),
    check("telefono", "Telephone number should be 9 digits").isLength(9,9),
    validateFields
], addVeterinario)

router
.route("/:id")
.delete([
    check("id", "Not valid mongo id").isMongoId(),
    validateFields
], delVeterinario)
.get([
    check("id", "Not valid mongo id").isMongoId(),
    validateFields
], getVeterinario)
.put([
    check("id", "Not valid mongo id").isMongoId(),
    check("name", "Name is required").not().isEmpty(),
    check("age", "Ages should be a number").isNumeric(),
    check("telefono").custom(existTelephoneNumberPut),
    check("telefono", "Telephone number should be a number").isNumeric(),
    check("telefono", "Telephone number should be 9 digits").isLength(9,9),
    validateFields
], editVeterinario)

module.exports = router;