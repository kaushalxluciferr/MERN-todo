const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

// Enable CORS
app.use(cors());

// Import and configure database connection and routes
require("./connection/conn");
const auth = require("./routes/auth");
const list = require("./routes/list");

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use("/api/v1", auth);
app.use("/api/v2", list);

// Serve static files from the frontend build directory
const staticPath = path.resolve(__dirname, "frontend", "dist");
app.use(express.static(staticPath));

// Catch-all route to serve index.html for unknown routes
app.get("*", (req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;
