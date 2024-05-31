const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const socialAuthController = require("../controllers/socialAuthController");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/reset-password", authController.resetPassword);
router.get("/oauth/google/callback", socialAuthController.googleCallback);
router.get("/oauth/facebook/callback", socialAuthController.facebookCallback);

module.exports = router;
