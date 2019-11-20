const express = require('express');
const router = express.Router();

const users_ctrl = require('../controllers/controller.js')

router.get('/test', users_ctrl.test)
router.post('/create', users_ctrl.user_create);
router.get('/:id', users_ctrl.user_details);
router.put('/:id/update', users_ctrl.user_update);
router.delete('/:id/delete', users_ctrl.user_delete);

module.exports = router;