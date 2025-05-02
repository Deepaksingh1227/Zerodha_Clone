const { SignupValidation } = require("../Middlewares/Validation");
const { signup, login } = require("../Controllers/AuthControllers");
const { loginValidation } = require("../Middlewares/Validation");
const router = require("express").Router();

// Signup route
router.post("/signup", SignupValidation, signup);

// Login route
router.post("/login", loginValidation, login);

module.exports = router;