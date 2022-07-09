const express = require('express');
const router = express.Router();
const coursecontroller = require('../app/controllers/CourseController');

router.get('/create', coursecontroller.create);
router.post('/store', coursecontroller.store);
router.post('/handle-form', coursecontroller.handleForm);
router.get('/:id/edit', coursecontroller.edit);
router.put('/:id', coursecontroller.update);
router.patch('/:id/restore', coursecontroller.restore);
router.delete('/:id', coursecontroller.delete);
router.delete('/:id/force', coursecontroller.detroy);
router.get('/:slug', coursecontroller.show);

module.exports = router;