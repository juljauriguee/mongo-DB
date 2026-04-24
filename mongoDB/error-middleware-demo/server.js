const express = require("express");
const app = express();

const demoRoutes = require("./routes/demoRoutes");
const errorMiddleware = require("./middleware/errorMiddleware");

app.use(express.json());

app.use("/api", demoRoutes);

app.use(errorMiddleware);

app.use((req, res, next) => {
  const err = new Error("Route not found");
  err.statusCode = 404;
  next(err);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});