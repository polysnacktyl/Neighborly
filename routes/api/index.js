const router = require("express").Router();
const bookRoutes = require("./books");
const userRoutes = require("./user");
const shiftsRoutes = require("./shifts");
const resourceRoutes = require("./resources");
const requestsRoutes = require("./requests");


// Book routes
router.use("/books", bookRoutes);
router.use("/user", userRoutes);
router.use("/shifts", shiftsRoutes);
router.use("/resources", resourceRoutes);
router.use("/request", requestsRoutes);

module.exports = router;
