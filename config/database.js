const { Sequelize } = require("sequelize");

// module.exports = new Sequelize(
//   "postgres://hvxvtipb:HI-BS6Rki45PHccwZ7_aV2yDzaRjwRlM@drona.db.elephantsql.com:5432/hvxvtipb"
// );

module.exports = new Sequelize("th3app", "postgres", "123456", {
  host: "localhost",
  dialect: "postgres",
});
