const yup = require("yup");
const validator = async (req, res, next) => {
  try {
    const Schema = yup.object().shape({
      rank: yup.number().oneOf([1, 2, 3],"invalid rank").required(),
    });
    await Schema.validate(req.body);
    next();
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ error: err.errors });
  }
};
module.exports = validator;
