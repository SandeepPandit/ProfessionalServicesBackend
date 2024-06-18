const express = require("express");
const router = express.Router();
const authControllers = require("../src/controllers/auth-controller");
const { signupSchema, loginSchema } = require("../validators/auth-validator");
const validate = require("../src/middlewares/validate-middleware");
const authMiddleware = require("../src/middlewares/auth-middleware");

router.get("/", authControllers.home);

router.post("/register", validate(signupSchema), authControllers.register);

router.post("/login", validate(loginSchema), authControllers.login);

router.get("/user", authMiddleware, authControllers.user);

module.exports = router;
