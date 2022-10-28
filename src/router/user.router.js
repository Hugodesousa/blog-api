const express = require('express');

const router = express.Router();

const { authMiddleWare } = require('../middlewares');

const { userController } = require('../controller');

router.post('/', userController.newUser);

router.use(authMiddleWare.tokenCheck);

router.get('/', userController.getAllUser);

router.get('/:id', userController.getUserByID);

module.exports = router;