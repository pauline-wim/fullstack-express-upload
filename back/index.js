const express = require("express");
const multer = require("multer");
const app = express();
const upload = multer({ dest: "public" });

app.use(express.static("public"));

app.listen(8000, () => {
  console.log("Listening on port 8000");
});
