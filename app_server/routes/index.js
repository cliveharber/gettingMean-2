const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main');

/* GET home page. */
// const index = (req, res) => res.render('index', { title: 'Express '});
// router.get('/', index);
router.get('/', ctrlMain.index);

module.exports = router;
