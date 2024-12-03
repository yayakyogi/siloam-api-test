// routes/userRoutes.js
import express from "express";
const router = express.Router();
const {
  createUser,
  getAllUsers,
  login,
} = require("../controllers/userController");
const {
  getAllVendors,
  createVendor,
  updateVendor,
} = require("../controllers/vendorController");
const { getAllUnits, createUnit } = require("../controllers/unitController");

// USER
router.post("/users", createUser);
router.get("/users", getAllUsers);
router.post("/auth/login", login);

// VENDOR
router.get("/vendors", getAllVendors);
router.post("/vendors", createVendor);
router.get("/vendors/:id", updateVendor);

// UNIT
router.get("/units", getAllUnits);
router.post("/units", createUnit);

module.exports = router;
