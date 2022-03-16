const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const app = express();
const upload = multer({ dest: "public/uploads" });

app.use(cors());
app.use(express.static("public"));

const userList = [];

app.post("/user", upload.single("img"), (req, res) => {
  fs.renameSync(
    req.file.path,
    path.join(req.file.destination, req.file.originalname)
  );
  userList.push(req.body.username);
  res.json(userList);
  //   console.log(req.body.username);
  //   res.send("Image received");
});

// app.get("/user", (req, res) => {
//   res.json(userList);
// });

app.listen(8000, () => {
  console.log("Listening on port 8000");
});
