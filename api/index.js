const { default: axios } = require("axios");
const express = require("express");
const { default: configs } = require("../config");
const app = express();

app.get("/dailysubmition", async (req, res) => {
  const response = await axios.post(configs.leetcode.graphql, configs.leetcode.query.dailysubmition)
  res.send(response.data)
});
app.get("/badge", async (req, res) => {
  const response = await axios.post(configs.leetcode.graphql, configs.leetcode.query.badge)
  res.send(response.data)
});
app.get("/profile", async (req, res) => {
  const response = await axios.post(configs.leetcode.graphql, configs.leetcode.query.profile)
  res.send(response.data)
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;