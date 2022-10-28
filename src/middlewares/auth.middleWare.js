const jwt = require('jsonwebtoken');
const { createError } = require('../utils/joiValidate.util');

const tokenCheck = (req, _res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    createError('Token not found', 401);
  }

  try {
    jwt.verify(authorization, process.env.JWT_SECRET);
  } catch (_error) {
    createError('Expired or invalid token', 401);
  }
  console.log('aqui');
  next();
};

module.exports = {
  tokenCheck,
};