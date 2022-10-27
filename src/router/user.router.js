const express = require('express');

const router = express.Router();

const { bodyCheck } = require('../middlewares/user.middleWare');

const { userController } = require('../controller');

router.post('/login', bodyCheck, userController.login);

router.post('/user', userController.newUser);

module.exports = router;