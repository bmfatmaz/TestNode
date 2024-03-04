var User = require("../models/user");
async function getAll(req, res, next) {
  try {
    const data = await User.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send({ error: err });
  }
}
async function add(req, res) {
  try {
    console.log("rrrr");
    const user = new User(req.body);
    await user.save();
    res.status(200).send("added");
  } catch (err) {
    res.status(400).send({ error: err });
  }
}
async function update(req, res) {
  try {
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send("updated");
  } catch (err) {
    res.status(400).send({ error: err });
  }
}
async function deleteUser(req, res) {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).send("deleted");
  } catch (err) {
    res.status(400).send({ error: err });
  }
}
async function getById(req, res) {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).send({ error: err });
  }
}
async function getByName(req, res) {
  const name = req.params.name;

  try {
    const user = await User.findOne({ name });
    res.status(200).json(user);
  } catch (err) {
    res.status(400).send({ error: err });
  }
}
function getByNameCinEmail(req, res, next) {
  new User({
    name: req.params.name,
    email: req.params.email,
    cin: req.params.cin,
  }).save();
}
module.exports = {
  getAll,
  add,
  update,
  deleteUser,
  getById,
  getByName,
  getByNameCinEmail,
};
