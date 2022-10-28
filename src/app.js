const express = require('express');
require('express-async-errors');
// ...

const { errorMiddleWare } = require('./middlewares');

const userRouter = require('./router/user.router');

const app = express();

app.use(express.json());

app.use('/', userRouter);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`

app.use(errorMiddleWare.newError);
module.exports = app;
