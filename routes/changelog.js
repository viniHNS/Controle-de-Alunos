const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('changelog', { version: require('../package.json').version, title: 'changelog' })
});

module.exports = router;