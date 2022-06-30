const data = require("../mockData.json");
const poolConfig = require("../config/poolConfig");

module.exports = {
  //getting all users
  users: async (req, res) => {
    let pool = await poolConfig();

    pool.query(`SELECT * FROM UserDetails`).then((result) => {
      res.json({
        Status: 200,
        Success: true,
        Message: "Success",
        Data: result.recordset,
      });
    });
  },
  //getting a single user
  user: async (req, res) => {
    const { email } = req.params;
    let pool = await poolConfig();

    pool
      .query(`SELECT *FROM UserDetails WHERE email = ${email}`)
      .then((result) => {
        if (result) {
          res.status(200).json({
            Status: 200,
            Success: true,
            Message: "Success",
            Data: result.recordset,
          });
        } else {
          res.status(404).json({
            Status: 400,
            Success: false,
            Message: "Failed",
            Data: [],
          });
        }
      });
  },
  //a user logging in
  login: async (req, res) => {
    const { email, Password } = req.body;
    let pool = await poolConfig();

    pool
      .query(
        `SELECT * FROM UserDetails WHERE email = ${email} AND Password = ${Password}`
      )
      .then((result) => {
        if (result) {
          res.json({
            Status: 200,
            Success: true,
            Message: "Successful login",
            Data: result.recordset,
          });
        } else {
          res.status(404).json({
            Status: 400,
            Success: false,
            Message: "Failed, Try Again",
            Data: [],
          });
        }
      });
  },
  //creating a user
  create: async (req, res) => {
    let { Id, first_name, last_name, email, gender, Password } = req.body;
    let pool = await poolConfig();

    pool
      .query(
        `INSERT INTO UserDetails VALUES ('${Id}','${first_name}','${last_name}','${email}','${gender}','${Password}')`
      )
      .then((result) => {
        if (result.rowsAffected) {
          res.send("User Added successfully");
          console.log("User Added successfully");
        }
      });
  },
};
