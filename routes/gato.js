const express = require("express");
const router = express.Router();
const {check} = require("express-validator");
const{getGatos, addGato, delGato, getGato, editGato} = require("../controllers/gatos")
const { validateFields } = require("../middlewares/validate-fields")

router
.route("/")
.get(getGatos)
.post([
    check("name", "Name is required").not().isEmpty(),
    check("age", "Ages should be a number").isNumeric(),
    validateFields
], addGato)

router
.route("/:name")
.delete(delGato)
.get(getGato)
.put(editGato)

module.exports = router;