const express = require("express"),
  app = express();

app.use(express.static(__dirname + "/dist/chain-analysis"));

app.get("/", function (req, res) {
  res.sendFile("index.html", { root: "dist/chain-analysis" });
});

app.listen(process.env.PORT || 8080);

console.log(`Running on port ${process.env.PORT || 8080}`);
