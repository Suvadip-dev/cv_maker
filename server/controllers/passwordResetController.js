const db = require("../config/db");
const crypto = require("crypto");
const bcrypt = require("bcrypt");
const nodemailer = require("../config/nodemailer");

exports.requestReset = async (req, res) => {
  const { email } = req.body;
  const [users] = await db.execute("SELECT * FROM users WHERE email = ?", [email]);
  if (users.length === 0) return res.status(404).json({ message: "User not found" });

  const token = crypto.randomBytes(32).toString("hex");
  const expires = new Date(Date.now() + 3600000); // 1 hour

  await db.execute(
    "INSERT INTO password_resets (email, token, expires_at) VALUES (?, ?, ?)",
    [email, token, expires]
  );

  const resetLink = `${process.env.FRONTEND_URL}/reset-password/${token}`;

  await nodemailer.sendMail({
    to: email,
    subject: "Password Reset Request",
    html: `<p>Click <a href="${resetLink}">here</a> to reset your password.</p>`,
  });

  res.json({ message: "Reset email sent" });
};

exports.resetPassword = async (req, res) => {
  const { token, password } = req.body;
  const [resets] = await db.execute(
    "SELECT * FROM password_resets WHERE token = ? AND expires_at > NOW()",
    [token]
  );
  if (resets.length === 0) return res.status(400).json({ message: "Invalid or expired token" });

  const hashed = await bcrypt.hash(password, 10);
  await db.execute("UPDATE users SET password = ? WHERE email = ?", [hashed, resets[0].email]);
  await db.execute("DELETE FROM password_resets WHERE email = ?", [resets[0].email]);

  res.json({ message: "Password reset successful" });
};
