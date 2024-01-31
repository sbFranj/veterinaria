const express = require("express");
const router = express.Router();
const {check} = require("express-validator");
const {getFichas, getFicha, addFicha, delFicha, editFicha} = require("../controllers/fichas");
const {validateFields} = require("../middlewares/validate-fields");

router
.route("/")
.get(getFichas)
.post([
    check("historial", "history is required").notEmpty(),
    check("dolencias", "dolencias is required").notEmpty(),
    check("idAnimal", "Not valid mongo id").isMongoId(),
    check("idVeterinario", "Not valid mongo id").isMongoId(),
    validateFields
], addFicha)

router
.route("/:id")
.delete([
    check("id", "Not valid mongo id").isMongoId(),
    validateFields
], delFicha)
.get([
    check("id", "Not valid mongo id").isMongoId(),
    validateFields
],getFicha)
.put([
    check("id", "Not valid mongo id").isMongoId(),
    check("historial", "history is required").notEmpty(),
    check("dolencias", "dolencias is required").notEmpty(),
    check("idAnimal", "Not valid mongo id").isMongoId(),
    check("idVeterinario", "Not valid mongo id").isMongoId(),
    validateFields
], editFicha)

module.exports = router;