const AbstractManager = require("./AbstractManager");

class ActivityManager extends AbstractManager {
  static table = "activity";

  findAll() {
    return this.connection.query(
      `select * from category LEFT JOIN revenueAndExpense ON category.id = revenueAndExpense.category_id`
    );
  }
}

module.exports = ActivityManager;
