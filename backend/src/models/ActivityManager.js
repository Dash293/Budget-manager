const AbstractManager = require("./AbstractManager");

class ActivityManager extends AbstractManager {
  static table = "activity";

  findAll() {
    return this.connection.query(
      `select * from category INNER JOIN revenueAndExpense ON category.id = revenueAndExpense.category_id order by date asc`
    );
  }

  find(id) {
    return this.connection.query(
      `select * from category INNER JOIN revenueAndExpense ON category.id = revenueAndExpense.category_id where revenueAndExpense.id = ?`,
      [id]
    );
  }
}

module.exports = ActivityManager;
