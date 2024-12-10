const express = require("express");
const app = express();
const PORT = 4000;

app.use(express.json());

app.use("/api", require("./routes/app.routes"));

app.listen(PORT, function () {
  console.log("Ready to go");
});