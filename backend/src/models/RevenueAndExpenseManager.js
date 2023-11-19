const AbstractManager = require("./AbstractManager");

class RevenueAndExpenseManager extends AbstractManager {
  static table = "revenueAndExpense";

  insert(revenueAndExpense, userId) {
    return this.connection.query(
      `insert into ${RevenueAndExpenseManager.table} (category_name, type_id, date, note, amount, user_id, category_id) values (?, ?, ?, ?, ?, ?, ?)`,
      [
        revenueAndExpense.category_name,
        revenueAndExpense.type_id,
        revenueAndExpense.date,
        revenueAndExpense.note,
        revenueAndExpense.amount,
        userId,
        revenueAndExpense.category_id,
      ]
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
