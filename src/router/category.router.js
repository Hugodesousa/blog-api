const express = require('express');

const router = express.Router();

const { authMiddleWare } = require('../middlewares');

const { categoryController } = require('../controller');

router.use(authMiddleWare.tokenCheck);

router.post('/', categoryController.newCategory);

module.exports = router;