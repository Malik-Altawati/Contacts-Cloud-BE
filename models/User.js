const Sequelize = require("sequelize");
const db = require("../config/database");

db.sync()
  .then(() => console.log("users table is up"))
  .catch((err) => console.log(`Error### ${err}`));

const User = db.define("user", {
  givenName: {
    type: Sequelize.STRING,
  },
  familyName: {
    type: Sequelize.STRING,
  },
  phoneNumber: {
    type: Sequelize.BIGINT,
  },
});

module.exports = User;
