const router = require("express").Router();
const shiftsController = require("../../controllers/shiftsController");

// Matches with "/api/shifts"
router.route("/")
  .get(shiftsController.findAll)
  .post(shiftsController.create);

// Matches with "/api/shifts/:id"
router
  .route("/:id")
  .get(shiftsController.findById)
  .put(shiftsController.update)
  .delete(shiftsController.remove);

module.exports = router;
