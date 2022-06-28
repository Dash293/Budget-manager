const AbstractManager = require("./AbstractManager");

class CategoryManager extends AbstractManager {
  static table = "category";

  insert(category) {
    return this.connection.query(
      `insert into ${CategoryManager.table} (title) values (?)`,
      [category.title]
    );
  }

  update(category) {
    return this.connection.query(
      `update ${CategoryManager.table} set title = ? where id = ?`,
      [category.title, category.id]
    );
  }
}

module.exports = CategoryManager;
