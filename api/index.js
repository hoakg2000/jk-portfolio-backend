const { default: axios } = require("axios");
const express = require("express");
const { default: configs } = require("../config");
const app = express();
const cors = require('cors');

// const whitelist = [''];

// // 2. Create the CORS options object with a custom origin function
// const corsOptions = {
//   origin: function (origin, callback) {
//     // 3. Create a regex to match any localhost port
//     const localhostRegex = /^http:\/\/localhost:\d+$/;

//     // 4. Check if the origin is in the whitelist, matches the localhost regex, or is undefined (for server-to-server requests)
//     if (whitelist.indexOf(origin) !== -1 || localhostRegex.test(origin) || !origin) {
//       callback(null, true); // Allow the request
//     } else {
//       callback(new Error('Not allowed by CORS')); // Block the request
//     }
//   }
// };
app.use(cors());

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