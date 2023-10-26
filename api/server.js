const express = require("express");
const cors = require("cors");
const router = require("./routers/student.route");
const app = express();
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});
app.use("/api/student", router);
app.listen(5000, () => {
  console.log("Backend is running");
});
