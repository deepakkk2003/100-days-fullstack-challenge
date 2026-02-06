const express = require("express");
const userRoutes = require("./routes/userRoutes");
const logger = require("./middleware/logger");

const app = express();

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.use("/api/users", userRoutes);

// Server start
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
