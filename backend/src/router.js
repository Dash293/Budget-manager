const express = require("express");
const authenticateToken = require("./middlewares/authToken");

const {
  ItemController,
  UserController,
  CategoryController,
  RevenueAndExpenseController,
  ActivityController,
} = require("./controllers");

const router = express.Router();

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);
router.get("/users", authenticateToken, UserController.browse);
router.get("/categories", authenticateToken, CategoryController.browse);
router.get(
  "/revenues-expenses",
  authenticateToken,
  RevenueAndExpenseController.browse
);
router.post(
  "/new-activity",
  authenticateToken,
  RevenueAndExpenseController.add
);
router.get("/activity", authenticateToken, ActivityController.browse);
router.get("/activity/:id", authenticateToken, ActivityController.read);
router.delete(
  "/delete-activity/:id",
  authenticateToken,
  ActivityController.delete
);

module.exports = router;
