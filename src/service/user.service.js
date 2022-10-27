const { User } = require('../models');
const { validateReq, createError } = require('../utils/joiValidate.util');

const checkLogin = async (user) => {
  const { password, email } = user;
  const result = await User.findOne({ where: { password, email } });
  if (!result) {
    const error = new Error('Invalid fields');
    error.name = 'Invalid fields';
    error.status = 400;
    throw error;
  }
  return result;
};

const createUser = async (newUser) => {
  const { email } = newUser;
  const userExist = await User.findOne({ where: { email } });
  const valid = await validateReq(newUser);
  // console.log('service', result);
  if (userExist !== null) {
    createError('User already registered', 409);
  }
  if (valid) {
    const { dataValues } = await User.create(newUser);
    return dataValues;
  }
  // console.log('create1', dataValues);
};

// const getAll = async () => {
// const result = await User.findAll();
// console.log(result);
// return result;
// };

module.exports = {
  checkLogin,
  createUser,
  // getAll,
};