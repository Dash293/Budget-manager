const models = require("../models");

class RevenueAndExpenceController {
  static browse = (req, res) => {
    models.revenueAndExpense
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = RevenueAndExpenceController;
