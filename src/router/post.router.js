const express = require('express');

const router = express.Router();

const { authMiddleWare, postMiddleWare } = require('../middlewares');

const { postController } = require('../controller');

router.use(authMiddleWare.tokenCheck);

router.post('/', postMiddleWare.bodyCheck, postController.newPost);

module.exports = router;