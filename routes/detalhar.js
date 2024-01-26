const express = require('express');
const router = express.Router();
const Aluno = require('../models/Aluno');

router.get('/:id', (req, res) => {
    Aluno.findOne({ _id: req.params.id }).lean().then((aluno) => {
        res.render('detalhar', { aluno: aluno, version: require('../package.json').version  });
    }).catch((err) => {
        console.log(err);
        res.redirect('/erro');
    });
});

module.exports = router;