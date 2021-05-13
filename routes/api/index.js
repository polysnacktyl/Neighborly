const router = require("express").Router();
const bookRoutes = require("./books");
const userRoutes = require("./user");
const shiftsRoutes = require("./shifts");
const resourceRoutes = require("./resources");
// Book routes
router.use("/books", bookRoutes);
router.use("/user", userRoutes);
router.use("/shifts", shiftsRoutes);
router.use("/resources", resourceRoutes);
module.exports = router;