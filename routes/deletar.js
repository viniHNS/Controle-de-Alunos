const express = require('express');
const router = express.Router();
const Aluno = require('../models/Aluno');

router.delete('/:id', async (req, res) => {
    let id = req.params.id;
    try {
        await Aluno.deleteOne({ _id: id });
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.json({ success: false });
    }
});

module.exports = router;