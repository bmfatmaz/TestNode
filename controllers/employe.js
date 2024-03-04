var Employe = require("../models/employe");
async function add(req, res) {
    try {
      
      const emp = new Employe(req.body);
      await emp.save();
      res.status(200).send("added");
    } catch (err) {
      res.status(400).send({ error: err });
    }
  }
  async function getAll(req, res, next) {
    try {
      const data = await Employe.find();
      res.status(200).json(data);
    } catch (err) {
      res.status(400).send({ error: err });
    }
  }
  async function getById(req, res) {
    try {
      const user = await Employe.findById(req.params.id);
      res.status(200).json(user);
    } catch (err) {
      res.status(400).send({ error: err });
    }
  }
  async function deleteEmp(req, res) {
    try {
      await Employe.findByIdAndDelete(req.params.id);
      res.status(200).send("deleted");
    } catch (err) {
      res.status(400).send({ error: err });
    }
  }
  async function getByName(req, res) {
    const fullName = req.params.fullName;
  
    try {
      const emp = await Employe.findOne({ fullName });
      res.status(200).json(emp);
    } catch (err) {
      res.status(400).send({ error: err });
    }
  }
  async function update(req, res) {
    try {
     let emp= await Employe.findById(req.params.id);
     const pourc=req.body.pourcentage
     emp.salary=emp.salary+((emp.salary*pourc)/100)
     await Employe.findByIdAndUpdate(req.params.id,emp)
      res.status(200).send("updated");
    } catch (err) {
      res.status(400).send({ error: err });
    }
  }
  
  module.exports = {
   
    add,getAll,getById,deleteEmp,getByName,update
    
  };
