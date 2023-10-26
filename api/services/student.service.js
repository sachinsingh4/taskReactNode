const db = require("../config/db.config");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const postStudent = (req, result) => {
  const name = req.body.name;
  const email = req.body.email;
  const address = req.body.address;
  const DOB = req.body.DOB;

  const salt = bcrypt.genSaltSync(5);
  const password = bcrypt.hashSync(toString(req.body.password), salt);
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
