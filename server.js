require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const cors = require("cors");
const riddleRoutes = require("./routes/riddles");

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log("processing request...");
  next();
});

app.use("/riddles", riddleRoutes);

app.listen(port, () => {
  console.log("Server running on " + port);
});
