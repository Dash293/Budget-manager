const AbstractManager = require("./AbstractManager");

class ActivityManager extends AbstractManager {
  static table = "activity";

  findAll(userId) {
    return this.connection.query(
      `select * from category
      INNER JOIN revenueAndExpense ON category.id = revenueAndExpense.category_id
      where revenueAndExpense.user_id = ?
      order by date asc`,
      [userId]
    );
  }

  find(id, userId) {
    return this.connection.query(
      `select * from category
      INNER JOIN revenueAndExpense ON category.id = revenueAndExpense.category_id
      where revenueAndExpense.id = ? AND revenueAndExpense.user_id = ?`,
      [id, userId]
    );
  }

  delete(id, userId) {
    return this.connection.query(
      `DELETE FROM revenueAndExpense WHERE id = ? AND user_id = ?`,
      [id, userId]
    );
  }
}

module.exports = ActivityManager;
