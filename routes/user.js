var express = require("express");
var router = express.Router();
var validator = require("../middleware/validate");
const User = require("../models/user");
const userController = require("../controllers/user");
router.get("/getAll", userController.getAll);
router.get("/", function (req, res) {
  res.render("chat");
});
router.get("/get/:name", userController.getByName);
router.get("/get/:id", userController.getById);

router.put("/update/:id", userController.update);
router.delete("/delete/:id", userController.deleteUser);
router.get("/:name/:email/:cin", userController.getByNameCinEmail);
router.post("/add", validator, userController.add);

module.exports = router;
