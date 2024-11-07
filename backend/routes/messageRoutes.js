// routes/messageRoutes.js
const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

router.get('/', messageController.getMessages);

router.get('/:id', messageController.getMessage);

router.post('/', messageController.createMessage);

module.exports = router;
