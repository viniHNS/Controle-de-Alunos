const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('erro', { version: require('../package.json').version, title: 'erro'})
});

module.exports = router;