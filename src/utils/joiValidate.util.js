const Joi = require('joi');
// const userSevice = require('../service/user.service');

const smallDysplay = '"displayName" length must be at least 8 characters long';

const invalidEmail = '"email" must be a valid email';

const smallPassword = '"password" length must be at least 6 characters long';

const badStatus = 400;

const parameterIsRequired = Joi.object({
  displayName: Joi.string().min(8).required(),

  email: Joi.string().email({ 
    minDomainSegments: 2, 
    tlds: { allow: ['com', 'net'] } }).required(),

  password: Joi.string().min(6).required(),

  image: Joi.string(),
});

function createError(message, code) {
  const error = new Error(message);
  error.name = message;
  error.status = code;
  throw error;
}

function errorMap(er) {
  const { message } = er.details[0];
  switch (message) {
    case smallDysplay:
      createError(smallDysplay, badStatus);
      break;
    case invalidEmail:
      createError(invalidEmail, badStatus);
      break;
      default:
      createError(smallPassword, badStatus);
      break;
  }
}

// async function userExist(user) {
//   const test = await userSevice.getAll();
//   console.log(test);
//   return true;
// }

async function validateReq(user) {
  const test = parameterIsRequired.validate(user);
  if (test.error) {
    errorMap(test.error);
  }
    return true;
}
// async function validateReq(user) {
//   const test = parameterIsRequired.validate(user);
//   if (test.error) {
//     errorMap(test.error);
//   }
//   if (await userExist(user)) {
//     return true;
//   }
// }

module.exports = {
validateReq,
createError,
};