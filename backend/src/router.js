const express = require("express");

const {
  ItemController,
  UserController,
  CategoryController,
  RevenueAndExpenseController,
} = require("./controllers");

const router = express.Router();

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);
router.get("/users", UserController.browse);
router.get("/categories", CategoryController.browse);
router.get("/revenuesAndExpenses", RevenueAndExpenseController.browse);

module.exports = router;
