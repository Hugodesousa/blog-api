const bodyCheck = (req, _res, next) => {
  const { email, password } = req.body;
if (!email || !password) {
  const error = new Error('Some required fields are missing');
  error.name = 'parameter not found';
  error.status = 400;
  throw error;
}
next();
};

module.exports = {
  bodyCheck,
};
