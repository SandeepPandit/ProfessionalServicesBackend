const express = require("express");
const router = express.Router();
const contactForm = require("../src/controllers/contact-controller");

router.post("/contact", contactForm);

module.exports = router;
