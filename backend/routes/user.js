// const router = require("express").Router();
import express from "express";
const router = express.Router();

router.get("/usertest", (req, res) => {
  res.send("user test is successful");
});

router.post("/userposttest", (req, res) => {
  const username = req.body.username;
  console.log(username);
  res.send(username);
});

export default router;
