const newError = (error, _req, res, _next) => {
  if (error.name && error.status) {
    return res.status(error.status).send({ message: error.message });
  }
  console.error('Meu middleWare --------->', error);
  return res.status(500).send({ error });
};

module.exports = {
  newError,
};