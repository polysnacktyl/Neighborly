const router = require("express").Router();
const bookRoutes = require("./books");
const userRoutes = require("./user");
const requestRoutes = require("./request")

// Book routes
router.use("/books", bookRoutes);
router.use("/user", userRoutes);
router.use("./request", requestRoutes)
module.exports = router;
