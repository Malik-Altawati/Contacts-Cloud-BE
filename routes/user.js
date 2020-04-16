const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

// 🆄🅽🅳🅴🆁 🅳🅴🆅🅴🅻🅾🅿🅼🅴🅽🆃

///// get all users
// router.get("/", (req, res) =>
//   User.findAll()
//     .then((users) => {
//       return res.status(200).json({ status: true, message: users });
//     })
//     .catch((err) => {
//       console.log(err);
//     })
// );

///// create a new user
router.post("/save", (req, res) => {
  let { arr } = req.body;
  for (var i = 0; i < arr.length; i++) {
    User.create(arr[i])
      .then((user) => {
        console.log("Fantastic");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return res.status(200).json({ status: true });
});

///// search for a user
router.get("/search", (req, res) => {
  var { name } = req.query;
  // name = JSON.stringify(name);
  name = parseInt(name, 10);

  // console.log(name);
  User.findOne({ where: { phoneNumber: name } })
    .then((users) => {
      return res.status(200).json({ status: true, message: users });
    })
    .catch((err) => {
      console.log(err);
    });
});

///// delete a user
// router.delete("/", (req, res) => {
//   const { identifier } = req.query;
//   User.destroy({ where: { identifier } })
//     .then((data) => {
//       if (data === 1) {
//         return res.status(200).json({ status: true, message: "user deleted!" });
//       } else {
//         return res
//           .status(200)
//           .json({ status: true, message: "user already deleted!" });
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

//// update user

// router.post("/update", (req, res) => {
//   const { identifier } = req.body;
//   User.update(req.body, { where: { identifier } })
//     .then((data) => {
//       return res.status(200).json({ status: true, message: "user updated!" });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

module.exports = router;
