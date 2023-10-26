const router = require("express").Router();
const student = require("../controllers/student.controller");
router.post("/postdata", student.postData);
router.get("/getdata", student.getData);
module.exports = router;
