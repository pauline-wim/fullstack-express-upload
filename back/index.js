const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const app = express();
const upload = multer({ dest: "public/uploads" });

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.static("public"));

app.post("/user", upload.single("img"), (req, res) => {
  fs.renameSync(
    req.file.path,
    path.join(req.file.destination, req.file.originalname)
  );

  res.send("Image received");
});

app.listen(8000, () => {
  console.log("Listening on port 8000");
});
