const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('sobre', { version: require('../package.json').version, title: 'sobre'})
});

module.exports = router;
