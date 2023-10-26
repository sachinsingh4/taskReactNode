const Student = require("../services/student.service");
exports.postData = (req, res) => {
  console.log("hi");
  Student.postStudent(req, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      // console.log("Student", result);
      res.json(result);
    }
  });
};

exports.getData = (req, res) => {
  console.log("hi");
  Student.getStudent(req, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      // console.log("Student", result);
      res.json(result);
    }
  });
};
