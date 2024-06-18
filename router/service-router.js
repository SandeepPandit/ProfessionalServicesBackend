const express = require("express");
const services = require("../controllers/service-controller");
const router = express.Router();

router.get("/service", services);

module.exports = router;
