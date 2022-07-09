const express = require('express');
const router = express.Router();
const SearchController = require('../app/controllers/SearchController');
 
router.get('/',SearchController.index);

router.post('/',SearchController.show);

module.exports  = router;