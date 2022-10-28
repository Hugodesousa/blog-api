const newError = (error, _req, res, _next) => {
  if (error.name && error.status) {
    return res.status(error.status).send({ message: error.message });
  }
  return res.status(500).send({ message: 'generic error' });
};

module.exports = {
  newError,
};