const express = require("express");

const {
  ItemController,
  UserController,
  CategoryController,
  RevenueAndExpenseController,
  ActivityController,
} = require("./controllers");

const router = express.Router();

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);
router.get("/users", UserController.browse);
router.get("/categories", CategoryController.browse);
router.get("/revenues-expenses", RevenueAndExpenseController.browse);
router.get("/activity", ActivityController.browse);

module.exports = router;
