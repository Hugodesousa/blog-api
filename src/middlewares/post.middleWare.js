const { createError } = require('../utils/joiValidate.util');

const bodyCheck = (req, _res, next) => {
  try {
    const { title, content, categoryIds } = req.body;
    if (title.length < 1 || content.length < 1 || categoryIds.length < 1) {
      createError('Some required fields are missing', 400);
    }
  } catch (error) {
    createError('Some required fields are missing', 400);
  }
  next();
};

module.exports = {
  bodyCheck,
};