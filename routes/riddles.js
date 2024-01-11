require("dotenv").config();
const express = require("express");
const router = express.Router();
const fs = require("fs");

function readRiddles() {
  const file = fs.readFileSync("./data/riddles.json");
  const data = JSON.parse(file);
  return data;
}

router.get("/", (req, res_) => {
  const data = readRiddles();
  res_.json(data);
});

router.get("/:id", (req, res) => {
  const data = readRiddles();
  const singleRiddle = data.find((riddle) => riddle.id === req.params.id);

  if (!singleRiddle) {
    res
      .status(404)
      .send(
        "This riddle hasn't been sent by the Astari. Please use riddle that has departed Valinor"
      );
    return;
  }
  res.json(singleRiddle);
});

module.exports = router;
