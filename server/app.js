const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const passwordResetRoutes = require("./routes/passwordResetRoutes");

const app = express();

// CORS Configuration
const corsOptions = {
  origin: "*", // Allow all origins
  methods: "*", // Allow all HTTP methods
  allowedHeaders: ["Authorization", "Content-Type"], // Allowed headers
};

app.use(cors(corsOptions)); // Apply CORS with custom options
app.use(express.json()); // To parse incoming JSON data

app.use("/api/auth", authRoutes);
app.use("/api/password", passwordResetRoutes);


// Error handling middleware (must be after all routes)
app.use((err, req, res, next) => {
  console.error('Internal Error:', err.stack);
  res.status(500).json({ message: 'Internal Server Error', error: err.message });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));
