const express = require('express');
require('express-async-errors');
// ...
const userRouter = require('./router/user.router');

const app = express();

app.use(express.json());

app.use('/', userRouter);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`

app.use((error, _req, res, _next) => {
  if (error.name && error.status) {
    console.log(error);
    return res.status(error.status).send({ message: error.message });
  }
  return res.status(500).send({ message: 'generic error' });
});
module.exports = app;
