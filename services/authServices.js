const bcrypt = require("bcrypt");
const User = require("../models/user");
const nodemailer = require("nodemailer");
const PasswordResetToken = require("../models/passwordResetToken");
const myemail = process.env.EMAIL;
const mypassword = process.env.PASSWORD;

async function sendPasswordResetEmail(email) {
  // Generate a unique token or link for password reset
  const resetToken = generateResetToken(email);

  // Save the resetToken to the database for validation
  const passwordResetToken = new PasswordResetToken({
    email,
    token: resetToken,
  });
  await passwordResetToken.save();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: myemail,
      pass: mypassword,
    },
  });

  // Send the password reset email
  await transporter.sendMail({
    from: myemail,
    to: email,
    subject: "Password Reset",
    text: `To reset your password, click on the following link: http://peerblend.com/reset/${resetToken}`,
  });
}
async function resetPassword(token, newPassword) {
  try {
    // Find user by reset token
    const user = await User.findOne({ resetToken: token });

    // If user not found or token expired
    if (!user || Date.now() > user.resetTokenExpiration) {
      throw new Error("Invalid or expired reset token");
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update user's password and clear reset token
    user.password = hashedPassword;
    user.resetToken = undefined;
    user.resetTokenExpiration = undefined;
    await user.save();

    return true; // Password reset successfully
  } catch (error) {
    throw new Error("Failed to reset password: " + error.message);
  }
}

module.exports = { sendPasswordResetEmail, resetPassword };
