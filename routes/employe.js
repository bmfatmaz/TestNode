var express = require("express");
var router = express.Router();
var validator = require("../middleware/validator");
const employeController = require("../controllers/employe");
router.post("/AddEmploye", validator, employeController.add);
router.get("/showEmployees", employeController.getAll);
router.get("/showEmploye/:id", employeController.getById);
router.delete("/deleteEmploye/:id", employeController.deleteEmp);
router.get("/searchByName/:fullName", employeController.getByName);
router.put("/increaseSalary/:id", employeController.update);
router.get("/", function (req, res) {
    res.render("alerte");
  });
module.exports = router;
