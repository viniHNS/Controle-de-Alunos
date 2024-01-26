const express = require('express');
const router = express.Router();
const Aluno = require('../models/Aluno');

router.get('/', (req, res) => {
    res.render('consulta', { version: require('../package.json').version, title: 'consultas', alunos: "Selecione os filtros" })
});

router.post('/', (req, res) => {
    let periodoSelecionado = req.body.periodo;
    let turmaSelecionada = req.body.turmas;

    if (periodoSelecionado == "1") {
        periodoSelecionado = "Matutino";
    } else if (periodoSelecionado == "2") {
        periodoSelecionado = "Vespertino";
    } else if (periodoSelecionado == "3") {
        periodoSelecionado = "Todos";
    } else if (periodoSelecionado == "0") {
        periodoSelecionado = "Nenhum filtro selecionado";
    }

    if (turmaSelecionada == "1") {
        turmaSelecionada = "1º ano";
    } else if (turmaSelecionada == "2") {
        turmaSelecionada = "2º ano";
    } else if (turmaSelecionada == "3") {
        turmaSelecionada = "3º ano";
    } else if (turmaSelecionada == "4") {
        turmaSelecionada = "4º ano";
    } else if (turmaSelecionada == "5") {
        turmaSelecionada = "5º ano";
    } else if (turmaSelecionada == "6") {
        turmaSelecionada = "Todos";
    } else if (turmaSelecionada == "0") {
        turmaSelecionada = "Nenhum filtro selecionado";
    }

    if (periodoSelecionado == "Matutino" && turmaSelecionada == "1º ano") {
        Aluno.find({ periodoEstudoContraTurno: 'Matutino', serieEscola: '1º ano' }).lean()
            .then(alunos => {
                if (alunos == null || alunos == undefined || alunos == "" || alunos == []) {
                    alunos = "Nenhum aluno encontrado";
                }
                res.render('consulta', { alunos: alunos, version: require('../package.json').version  });
            })
            .catch(err => {
                console.log(err);
            });
    } else if (periodoSelecionado == "Matutino" && turmaSelecionada == "2º ano") {
        Aluno.find({ periodoEstudoContraTurno: 'Matutino', serieEscola: '2º ano' }).lean()
            .then(alunos => {
                if (alunos == null || alunos == undefined || alunos == "" || alunos == []) {
                    alunos = "Nenhum aluno encontrado";
                }
                res.render('consulta', { alunos: alunos, version: require('../package.json').version  });
            })
            .catch(err => {
                console.log(err);
            });
    } else if (periodoSelecionado == "Matutino" && turmaSelecionada == "3º ano") {
        Aluno.find({ periodoEstudoContraTurno: 'Matutino', serieEscola: '3º ano' }).lean()
            .then(alunos => {
                if (alunos == null || alunos == undefined || alunos == "" || alunos == []) {
                    alunos = "Nenhum aluno encontrado";
                }
                res.render('consulta', { alunos: alunos, version: require('../package.json').version  });
            })
            .catch(err => {
                console.log(err);
            });
    } else if (periodoSelecionado == "Matutino" && turmaSelecionada == "4º ano") {
        Aluno.find({ periodoEstudoContraTurno: 'Matutino', serieEscola: '4º ano' }).lean()
            .then(alunos => {
                if (alunos == null || alunos == undefined || alunos == "" || alunos == []) {
                    alunos = "Nenhum aluno encontrado";
                }
                res.render('consulta', { alunos: alunos, version: require('../package.json').version  });
            })
            .catch(err => {
                console.log(err);
            });
    } else if (periodoSelecionado == "Matutino" && turmaSelecionada == "5º ano") {
        Aluno.find({ periodoEstudoContraTurno: 'Matutino', serieEscola: '5º ano' }).lean()
            .then(alunos => {
                if (alunos == null || alunos == undefined || alunos == "" || alunos == []) {
                    alunos = "Nenhum aluno encontrado";
                }
                res.render('consulta', { alunos: alunos, version: require('../package.json').version  });
            })
            .catch(err => {
                console.log(err);
            });
    } else if (periodoSelecionado == "Vespertino" && turmaSelecionada == "1º ano") {
        Aluno.find({ periodoEstudoContraTurno: 'Vespertino', serieEscola: '1º ano' }).lean()
            .then(alunos => {
                if (alunos == null || alunos == undefined || alunos == "" || alunos == []) {
                    alunos = "Nenhum aluno encontrado";
                }
                res.render('consulta', { alunos: alunos, version: require('../package.json').version  });
            })
            .catch(err => {
                console.log(err);
            });
    } else if (periodoSelecionado == "Vespertino" && turmaSelecionada == "2º ano") {
        Aluno.find({ periodoEstudoContraTurno: 'Vespertino', serieEscola: '2º ano' }).lean()
            .then(alunos => {
                if (alunos == null || alunos == undefined || alunos == "" || alunos == []) {
                    alunos = "Nenhum aluno encontrado";
                }
                res.render('consulta', { alunos: alunos, version: require('../package.json').version  });
            })
            .catch(err => {
                console.log(err);
            });
    } else if (periodoSelecionado == "Vespertino" && turmaSelecionada == "3º ano") {
        Aluno.find({ periodoEstudoContraTurno: 'Vespertino', serieEscola: '3º ano' }).lean()
            .then(alunos => {
                if (alunos == null || alunos == undefined || alunos == "" || alunos == []) {
                    alunos = "Nenhum aluno encontrado";
                }
                res.render('consulta', { alunos: alunos, version: require('../package.json').version  });
            })
            .catch(err => {
                console.log(err);
            });
    } else if (periodoSelecionado == "Vespertino" && turmaSelecionada == "4º ano") {
        Aluno.find({ periodoEstudoContraTurno: 'Vespertino', serieEscola: '4º ano' }).lean()
            .then(alunos => {
                if (alunos == null || alunos == undefined || alunos == "" || alunos == []) {
                    alunos = "Nenhum aluno encontrado";
                }
                res.render('consulta', { alunos: alunos, version: require('../package.json').version  });
            })
            .catch(err => {
                console.log(err);
            });
    } else if (periodoSelecionado == "Vespertino" && turmaSelecionada == "5º ano") {
        Aluno.find({ periodoEstudoContraTurno: 'Vespertino', serieEscola: '5º ano' }).lean()
            .then(alunos => {
                if (alunos == null || alunos == undefined || alunos == "" || alunos == []) {
                    alunos = "Nenhum aluno encontrado";
                }
                res.render('consulta', { alunos: alunos, version: require('../package.json').version  });
            })
            .catch(err => {
                console.log(err);
            });

    } else if (periodoSelecionado == "Matutino" && turmaSelecionada == "Todos") {
        Aluno.find({ periodoEstudoContraTurno: 'Matutino' }).lean()
            .then(alunos => {
                if (alunos == null || alunos == undefined || alunos == "" || alunos == []) {
                    alunos = "Nenhum aluno encontrado";
                }
                res.render('consulta', { alunos: alunos, version: require('../package.json').version  });
            })
            .catch(err => {
                console.log(err);
            });
    } else if (periodoSelecionado == "Vespertino" && turmaSelecionada == "Todos") {
        Aluno.find({ periodoEstudoContraTurno: 'Vespertino' }).lean()
            .then(alunos => {
                if (alunos == null || alunos == undefined || alunos == "" || alunos == []) {
                    alunos = "Nenhum aluno encontrado";
                }
                res.render('consulta', { alunos: alunos, version: require('../package.json').version  });
            })
            .catch(err => {
                if (alunos == null || alunos == undefined || alunos == "" || alunos == []) {
                    alunos = "Nenhum aluno encontrado";
                }
                console.log(err);
            });
    } else if (periodoSelecionado == "Todos" && turmaSelecionada == "Todos") {
        Aluno.find({}).lean()
            .then(alunos => {
                if (alunos == null || alunos == undefined || alunos == "" || alunos == []) {
                    alunos = "Nenhum aluno encontrado";
                }
                res.render('consulta', { alunos: alunos, version: require('../package.json').version  });
            })
            .catch(err => {
                console.log(err);
            });
    } else if (periodoSelecionado == "Todos" && turmaSelecionada == "1º ano") {
        Aluno.find({ serieEscola: '1º ano' }).lean()
            .then(alunos => {
                if (alunos == null || alunos == undefined || alunos == "" || alunos == []) {
                    alunos = "Nenhum aluno encontrado";
                }
                res.render('consulta', { alunos: alunos, version: require('../package.json').version  });
            })
            .catch(err => {
                console.log(err);
            });
    } else if (periodoSelecionado == "Todos" && turmaSelecionada == "2º ano") {
        Aluno.find({ serieEscola: '2º ano' }).lean()
            .then(alunos => {
                if (alunos == null || alunos == undefined || alunos == "" || alunos == []) {
                    alunos = "Nenhum aluno encontrado";
                }
                res.render('consulta', { alunos: alunos, version: require('../package.json').version  });
            })
            .catch(err => {
                console.log(err);
            });
    } else if (periodoSelecionado == "Todos" && turmaSelecionada == "3º ano") {
        Aluno.find({ serieEscola: '2º ano' }).lean()
            .then(alunos => {
                if (alunos == null || alunos == undefined || alunos == "" || alunos == []) {
                    alunos = "Nenhum aluno encontrado";
                }
                res.render('consulta', { alunos: alunos, version: require('../package.json').version  });
            })
            .catch(err => {
                console.log(err);
            });
    } else if (periodoSelecionado == "Todos" && turmaSelecionada == "4º ano") {
        Aluno.find({ serieEscola: '4º ano' }).lean()
            .then(alunos => {
                if (alunos == null || alunos == undefined || alunos == "" || alunos == []) {
                    alunos = "Nenhum aluno encontrado";
                }
                res.render('consulta', { alunos: alunos, version: require('../package.json').version  });
            })
            .catch(err => {
                console.log(err);
            });
    } else if (periodoSelecionado == "Todos" && turmaSelecionada == "5º ano") {
        Aluno.find({ serieEscola: '5º ano' }).lean()
            .then(alunos => {
                if (alunos == null || alunos == undefined || alunos == "" || alunos == []) {
                    alunos = "Nenhum aluno encontrado";
                }
                res.render('consulta', { alunos: alunos, version: require('../package.json').version  });
            })
            .catch(err => {
                console.log(err);
            });
    } else if (turmaSelecionada == "Nenhum filtro selecionado" && periodoSelecionado == "Nenhum filtro selecionado") {
        //Se trocar o valor de alunos, lembrar de trocar o valor nos #ifCond do consulta.handlebars
        res.render('consulta', { alunos: "Nenhum filtro selecionado" });
    } else if(turmaSelecionada == "Nenhum filtro selecionado" && periodoSelecionado != "Nenhum filtro selecionado"){
        //Se trocar o valor de alunos, lembrar de trocar o valor nos #ifCond do consulta.handlebars
        res.render('consulta', { alunos: "Selecione uma turma" });
    } else if(turmaSelecionada != "Nenhum filtro selecionado" && periodoSelecionado == "Nenhum filtro selecionado"){
        //Se trocar o valor de alunos, lembrar de trocar o valor nos #ifCond do consulta.handlebars
        res.render('consulta', { alunos: "Selecione um periodo" });
    } else {
        //Se trocar o valor de alunos, lembrar de trocar o valor nos #ifCond do consulta.handlebars
        res.render('consulta', { alunos: "Nenhum aluno periodo" });
    }
});

/*
router.get('/matutino/1ano', (req, res) => {
    const alunos = Aluno.find({ periodoEstudoContraTurno: 'Matutino', serieEscola: '1º ano' }, (err, alunos) => {
        if (err) {
            console.log(err);
        } else {
            res.render('consulta', { alunos: alunos, version: require('../package.json').version  });
        }
    });
});

router.get('/matutino/2ano', (req, res) => {
    const alunos = Aluno.find({ periodoEstudoContraTurno: 'Matutino', serieEscola: '2º ano' }, (err, alunos) => {
        if (err) {
            console.log(err);
        } else {
            res.render('consulta', { alunos: alunos, version: require('../package.json').version  });
        }
    });
});

router.get('/matutino/3ano', (req, res) => {
    const alunos = Aluno.find({ periodoEstudoContraTurno: 'Matutino', serieEscola: '3º ano' }, (err, alunos) => {
        if (err) {
            console.log(err);
        } else {
            res.render('consulta', { alunos: alunos });
        }
    });
});

router.get('/matutino/4ano', (req, res) => {
    const alunos = Aluno.find({ periodoEstudoContraTurno: 'Matutino', serieEscola: '4º ano' }, (err, alunos) => {
        if (err) {
            console.log(err);
        } else {
            res.render('consulta', { alunos: alunos });
        }
    });
});

router.get('/matutino/5ano', (req, res) => {
    const alunos = Aluno.find({ periodoEstudoContraTurno: 'Matutino', serieEscola: '5º ano' }, (err, alunos) => {
        if (err) {
            console.log(err);
        } else {
            res.render('consulta', { alunos: alunos });
        }
    });
});

router.get('/vespertino/1ano', (req, res) => {
    const alunos = Aluno.find({ periodoEstudoContraTurno: 'Vespertino', serieEscola: '1º ano' }, (err, alunos) => {
        if (err) {
            console.log(err);
        } else {
            res.render('consulta', { alunos: alunos });
        }
    });
});

router.get('/vespertino/2ano', (req, res) => {
    const alunos = Aluno.find({ periodoEstudoContraTurno: 'Vespertino', serieEscola: '2º ano' }, (err, alunos) => {
        if (err) {
            console.log(err);
        } else {
            res.render('consulta', { alunos: alunos });
        }
    });
});

router.get('/vespertino/3ano', (req, res) => {
    const alunos = Aluno.find({ periodoEstudoContraTurno: 'Vespertino', serieEscola: '3º ano' }, (err, alunos) => {
        if (err) {
            console.log(err);
        } else {
            res.render('consulta', { alunos: alunos });
        }
    });
});

router.get('/vespertino/4ano', (req, res) => {
    const alunos = Aluno.find({ periodoEstudoContraTurno: 'Vespertino', serieEscola: '4º ano' }, (err, alunos) => {
        if (err) {
            console.log(err);
        } else {
            res.render('consulta', { alunos: alunos });
        }
    });
});

router.get('/vespertino/5ano', (req, res) => {
    const alunos = Aluno.find({ periodoEstudoContraTurno: 'Vespertino', serieEscola: '5º ano' }, (err, alunos) => {
        if (err) {
            console.log(err);
        } else {
            res.render('consulta', { alunos: alunos });
        }
    });
});

router.get('/vespertino/todos', (req, res) => {
    const alunos = Aluno.find({ periodoEstudoContraTurno: 'Vespertino' }, (err, alunos) => {
        if (err) {
            console.log(err);
        } else {
            res.render('consulta', { alunos: alunos});
        }
    });
});

router.get('/matutino/todos', (req, res) => {
    const alunos = Aluno.find({ periodoEstudoContraTurno: 'Matutino' }, (err, alunos) => {
        if (err) {
            console.log(err);
        } else {
            res.render('consulta', { alunos: alunos });
        }
    });
});
*/

module.exports = router;