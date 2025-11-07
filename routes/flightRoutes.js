const express = require("express");
const {
  createFlight,
  getAllFlights,
} = require("../controllers/flightController");
const { authenticateToken } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authenticateToken, createFlight);
router.get("/", getAllFlights);
module.exports = router;
