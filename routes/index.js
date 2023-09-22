const express = require('express');
const router = express.Router();
const apiCont = require('../controllers/apiCont');

router.get("/greet", apiCont.greet)

router.post("/product/new",apiCont.newpro)

module.exports= router;