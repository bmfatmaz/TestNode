var express = require("express");
var router = express.Router();
const Classroom = require("../models/classroom");
const classroomController = require("../controllers/classroom");
router.get("/getAll", classroomController.getAll);
router.get("/get/:id", classroomController.getById);

router.get("/getCapacity/:capacity", classroomController.getByCapacity);

router.put("/update/:id", classroomController.update);
router.delete("/delete/:id", classroomController.deleteclassroom);

router.post("/add", classroomController.add);

module.exports = router;
