const router = require("express").Router();
const userRoutes = require("./user");
const shiftsRoutes = require("./shifts");
const resourceRoutes = require("./resources");
const requestsRoutes = require("./requests");

router.use("/user", userRoutes);
router.use("/shifts", shiftsRoutes);
router.use("/resources", resourceRoutes);
router.use("/requests", requestsRoutes);

module.exports = router;
