const { createError } = require('../utils/joiValidate.util');

const bodyCheck = (req, _res, next) => {
  const { email, password } = req.body;
if (!email || !password) {
  createError('Some required fields are missing', 400);
}
next();
};

module.exports = {
  bodyCheck,
};
