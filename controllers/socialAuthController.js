const { socialLoginCallback } = require("../services/socialAuthService");
const { generateToken } = require("../utils/token");

const googleCallback = async (req, res) => {
  try {
    const { code } = req.query;
    const user = await socialLoginCallback("google", code);
    const token = generateToken(user._id);
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const facebookCallback = async (req, res) => {
  try {
    const { code } = req.query;
    const user = await socialLoginCallback("facebook", code);
    const token = generateToken(user._id);
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { googleCallback, facebookCallback };
