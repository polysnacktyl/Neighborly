const router = require("express").Router();
const bookRoutes = require("./books");
const userRoutes = require("./user");
const shiftsRoutes = require("./shifts");

// Book routes
router.use("/books", bookRoutes);
router.use("/user", userRoutes);
router.use("/shifts", shiftsRoutes);

module.exports = router;
