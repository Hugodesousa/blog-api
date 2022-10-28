const express = require('express');

const router = express.Router();

const { userMiddleWare, authMiddleWare } = require('../middlewares');

const { userController } = require('../controller');

router.post('/login', userMiddleWare.bodyCheck, userController.login);

router.post('/user', userController.newUser);

router.get('/user', authMiddleWare.tokenCheck, userController.getAllUser);

module.exports = router;