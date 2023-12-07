const express = require("express");
const app = express();
const port = 3000;

app.use((req, res, next) => {});

app.get("/", (req, res) => {
  res.send("Obota Ngu from expresss");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
