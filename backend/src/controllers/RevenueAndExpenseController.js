const models = require("../models");

class RevenueAndExpenseController {
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

  static add = (req, res) => {
    const revenueAndExpense = req.body;

    // TODO validations (length, format...)

    models.revenueAndExpense
      .insert(revenueAndExpense)
      .then(() => {
        res.status(201).send({ ...revenueAndExpense });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = RevenueAndExpenseController;
