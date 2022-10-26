const { User } = require('../models');

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
module.exports = {
  checkLogin,
};