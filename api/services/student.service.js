const db = require("../config/db.config");
const bcrypt = require("bcrypt");
const postStudent = (req, result) => {
  // console.log("req", req.body);
  const name = req.body.data.name;
  const email = req.body.data.email;
  const address = req.body.data.address;
  const DOB = req.body.data.DOB;
  // console.log("data", name, email);

  const salt = bcrypt.genSaltSync(5);
  const password = bcrypt.hashSync(toString(req.body.data.password), salt);
  const sql =
    "INSERT INTO `student`(`name`,`email`,`address`,`DOB`,`password`) VALUES(?,?,?,?,?)";
  db.query(sql, [name, email, address, DOB, password], (err, data) => {
    result(err, data);
  });
};

const getStudent = (req, result) => {
  const sql = "select * from `student`";
  db.query(sql, (err, data) => {
    result(err, data);
  });
};
module.exports = { postStudent, getStudent };
