const yup = require("yup");
const validate = async (req, res, next) => {
  try {
    const Schema = yup.object().shape({
      name: yup
        .string()
        .min(3)
        .matches(/^[a-zA-Z\s]+$/, "must be letters only")
        .required(),
      email: yup.string().email().required(),
      cin: yup.number().required(),
    });
    await Schema.validate(req.body);
    next();
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ error: err.errors });
  }
};
module.exports = validate;
