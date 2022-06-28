const AbstractManager = require("./AbstractManager");

class RevenueAndExpenseManager extends AbstractManager {
  static table = "revenueAndExpense";

  insert(revenueAndExpense) {
    return this.connection.query(
      `insert into ${RevenueAndExpenseManager.table} (title) values (?)`,
      [revenueAndExpense.title]
    );
  }

  update(revenueAndExpense) {
    return this.connection.query(
      `update ${RevenueAndExpenseManager.table} set title = ? where id = ?`,
      [revenueAndExpense.title, revenueAndExpense.id]
    );
  }
}

module.exports = RevenueAndExpenseManager;
