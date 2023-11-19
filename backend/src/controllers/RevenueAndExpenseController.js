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
    const { userId } = req;

    models.revenueAndExpense
      .insert(revenueAndExpense, userId)
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
