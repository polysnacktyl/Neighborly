const router = require("express").Router();
const requestController = require("../../controllers/requestController");

router.route("/")
  .get(requestController.findAll)
  .post(requestController.create);

router
  .route("/:id")
  .get(requestController.findById)
  .put(requestController.update)
  .delete(requestController.remove);

module.exports = router;
