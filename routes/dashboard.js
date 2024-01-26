const express = require('express');
const router = express.Router();
const Aluno = require('../models/Aluno');

router.get('/', async (req, res) => {

    try {
    
        const periodosEstudo = ['Matutino', 'Vespertino'];
        const seriesEscola = ['1º ano', '2º ano', '3º ano', '4º ano', '5º ano'];

        const countAlunosAtivos = await Aluno.countDocuments({ ativo: true });
        const countAlunosInativos = await Aluno.countDocuments({ ativo: false });

        const countAlunosMatutinoAtivos = await Aluno.countDocuments({ periodoEstudoContraTurno: 'Matutino', ativo: true });

        const countAlunosVespertinoAtivos = await Aluno.countDocuments({ periodoEstudoContraTurno: 'Vespertino', ativo: true });

        let counts = {};

        for (let periodo of periodosEstudo) {
            counts[periodo] = await Aluno.countDocuments({ periodoEstudoContraTurno: periodo, ativo: true});

            for (let serie of seriesEscola) {
                counts[`${periodo}_${serie}`] = await Aluno.countDocuments({ periodoEstudoContraTurno: periodo, serieEscola: serie, ativo: true});
            }
        }

        res.render('dashboard', { 
            version: require('../package.json').version, 
            title: 'dashboard',
            countMatutino: counts['Matutino'],
            countVespertino: counts['Vespertino'],
            countAlunosAtivos: countAlunosAtivos,
            countAlunosInativos: countAlunosInativos,
            countAlunosMatutino1Ano: counts['Matutino_1º ano'],
            countAlunosMatutino2Ano: counts['Matutino_2º ano'],
            countAlunosMatutino3Ano: counts['Matutino_3º ano'],
            countAlunosMatutino4Ano: counts['Matutino_4º ano'],
            countAlunosMatutino5Ano: counts['Matutino_5º ano'],
            countAlunosVespertino1Ano: counts['Vespertino_1º ano'],
            countAlunosVespertino2Ano: counts['Vespertino_2º ano'],
            countAlunosVespertino3Ano: counts['Vespertino_3º ano'],
            countAlunosVespertino4Ano: counts['Vespertino_4º ano'],
            countAlunosVespertino5Ano: counts['Vespertino_5º ano'],
            countAlunosMatutinoAtivos: countAlunosMatutinoAtivos,
            countAlunosVespertinoAtivos: countAlunosVespertinoAtivos,
        });
    } catch (err) {
        console.error(err);
        res.status(500).render('erro');
    }
});

module.exports = router;