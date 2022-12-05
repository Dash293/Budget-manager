const AbstractManager = require("./AbstractManager");

class RevenueAndExpenseManager extends AbstractManager {
  static table = "revenueAndExpense";

  insert(revenueAndExpense) {
    return this.connection.query(
      `insert into ${RevenueAndExpenseManager.table} (category_name, type_id, date, note, amount, user_id, category_id, category_user_id) values (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        revenueAndExpense.category_name,
        revenueAndExpense.type_id,
        revenueAndExpense.date,
        revenueAndExpense.note,
        revenueAndExpense.amount,
        revenueAndExpense.user_id,
        revenueAndExpense.category_id,
        revenueAndExpense.category_user_id,
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
