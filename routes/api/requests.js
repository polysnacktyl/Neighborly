const router = require("express").Router();
const requestsController = require("../../controllers/requestsController");

router.route("/")
  .get(requestsController.findAll)
  .post(requestsController.create);

router
  .route("/:id")
  .get(requestsController.findById)
  .put(requestsController.update)
  .delete(requestsController.remove);

module.exports = router;
