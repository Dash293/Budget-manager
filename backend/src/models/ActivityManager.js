const AbstractManager = require("./AbstractManager");

class ActivityManager extends AbstractManager {
  static table = "activity";

  findAll() {
    return this.connection.query(
      `select * from category INNER JOIN revenueAndExpense ON category.id = revenueAndExpense.category_id order by date asc`
    );
  }
}

module.exports = ActivityManager;
