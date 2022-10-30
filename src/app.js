const express = require('express');
require('express-async-errors');
// ...

const { errorMiddleWare, userMiddleWare } = require('./middlewares');

const { userController } = require('./controller');

// const userRouter = require('./router/user.router');
const { categoryRouter, userRouter, postRouter } = require('./router');

const app = express();

app.use(express.json());

app.post('/login', userMiddleWare.bodyCheck, userController.login);

app.use('/user', userRouter);

app.use('/categories', categoryRouter);
app.use('/post', postRouter);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`

app.use(errorMiddleWare.newError);
module.exports = app;
