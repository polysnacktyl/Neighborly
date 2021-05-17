const router = require("express").Router();
const shiftsController = require("../../controllers/shiftsController");

router.route("/")
  .get(shiftsController.findAll)
  .post(shiftsController.create);

router.route("/auth")
  .post(shiftsController.findOnCondition);

router
  .route("/:id")
  .get(shiftsController.findById)
  .put(shiftsController.update)
  .delete(shiftsController.remove);

module.exports = router;
