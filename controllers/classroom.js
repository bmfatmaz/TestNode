var Classroom = require("../models/classroom");
async function getAll(req, res, next) {
  try {
    const data = await Classroom.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send({ error: err });
  }
}
async function add(req, res) {
  try {
    const classroom = new Classroom(req.body);
    await classroom.save();
    res.status(200).send("added");
  } catch (err) {
    res.status(400).send({ error: err });
  }
}
async function update(req, res) {
  try {
    await Classroom.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send("updated");
  } catch (err) {
    res.status(400).send({ error: err });
  }
}
async function deleteclassroom(req, res) {
  try {
    await Classroom.findByIdAndDelete(req.params.id);
    res.status(200).send("deleted");
  } catch (err) {
    res.status(400).send({ error: err });
  }
}
async function getById(req, res) {
  try {
    const classroom = await Classroom.findById(req.params.id);
    res.status(200).json(classroom);
  } catch (err) {
    res.status(400).send({ error: err });
  }
}
async function getByCapacity(req, res) {
  const capacity = req.params.capacity;

  try {
    const classroom = await Classroom.findOne({ capacity });
    res.status(200).json(classroom);
  } catch (err) {
    res.status(400).send({ error: err });
  }
}

module.exports = {
  getAll,
  add,
  update,
  deleteclassroom,
  getById,
  getByCapacity,
};
