const express = require("express");
const adminController = require("../src/controllers/admin-controller");
const authMiddleware = require("../src/middlewares/auth-middleware");
const adminMiddleware = require("../src/middlewares/admin-middleware");

const router = express.Router();

router.get(
  "/users",
  authMiddleware,
  adminMiddleware,
  adminController.getAllUsers
);

router.get(
  "/users/:id",
  authMiddleware,
  adminMiddleware,
  adminController.getUserById
);

router.patch(
  "/users/update/:id",
  authMiddleware,
  adminMiddleware,
  adminController.updateUserById
);

router.delete(
  "/users/delete/:id",
  authMiddleware,
  adminMiddleware,
  adminController.deleteUserById
);

router.get(
  "/contacts",
  authMiddleware,
  adminMiddleware,
  adminController.getAllContacts
);

router.delete(
  "/contacts/delete/:id",
  authMiddleware,
  adminMiddleware,
  adminController.deleteContactById
);

module.exports = router;
