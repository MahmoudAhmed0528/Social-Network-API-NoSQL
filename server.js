const express = require("express");
const cors = require("cors");
const db = require("./config/connection");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
});
