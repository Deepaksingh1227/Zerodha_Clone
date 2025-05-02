const express = require("express");
const router = express.Router();
const { searchItems } = require("../Controllers/SearchController");

// Define the search route
router.get("/search", searchItems);

module.exports = router;