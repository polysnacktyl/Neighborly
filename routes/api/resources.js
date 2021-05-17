const router = require("express").Router();
const resourceController = require("../../controllers/resourceController");

router.route("/")
    .get(resourceController.findAll)
    .post(resourceController.create);

router.route("/auth")
    .post(resourceController.findOnCondition);

router.route("/:id")
    .get(resourceController.findById)
    .put(resourceController.update)
    .delete(resourceController.remove);

module.exports = router;