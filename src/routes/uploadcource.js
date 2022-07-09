const express = require('express');
const router = express.Router();
const UpLoadCource = require('../app/controllers/UpLoadCourceController');

router.get('/',UpLoadCource.index);

router.post('/',UpLoadCource.show);

module.exports  = router;