const express = require('express');
const router = express.Router();
const Aluno = require('../models/Aluno');

const pdfMake = require('pdfmake/build/pdfmake.js');
const pdfFonts = require('pdfmake/build/vfs_fonts.js');
const fs = require('fs');

//configuracao do PDF
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const anoAtual = new Date().getFullYear();

function calcularIdade(dataNascimento) {
    let data = new Date(dataNascimento);
    let idade = anoAtual - data.getFullYear();
    let mes = data.getMonth() + 1;
    let dia = data.getDate();

    if (new Date(anoAtual, mes, dia) > new Date()) {
        idade--;
    }

    return idade;
}

function formatarData(data) {
    let dataFormatada = data.split('-');
    return dataFormatada[2] + '/' + dataFormatada[1] + '/' + dataFormatada[0];
}

router.post('/:id', (req, res) => {
    Aluno.findOne({ _id: req.params.id }).lean().then((aluno) => {

        const utilizaTransporte = aluno.utilizaTransporte ? 'Sim' : 'Não';
        const somenteRobotica = aluno.somenteRobotica ? 'Sim' : 'Não';
        const outrasOficinas = aluno.outrasOficinas ? 'Sim' : 'Não';

        let docDefinition = {
            pageSize: 'A4',
            pageOrientation: 'portrait',
            pageMargins: [40, 60, 40, 60],

            header: {
                image: fs.readFileSync(__dirname + '/../assets/img/header.jpeg'),
                width: 500,
                alignment: 'center',
                margin: [0, 10, 0, 0]
            },

            content: [
                {
                    text: '',
                    margin: [0, 50, 0, 0]
                },
                {
                    canvas: [
                        {
                            type: 'line',
                            x1: 0, y1: 0,
                            x2: 515, y2: 0,
                            lineWidth: 1,
                            color: '#8A8A8A',
                            alignment: 'center'
                        }
                    ]
                },

                {
                    text: 'OFICINA DE ROBÓTICA EDUCACIONAL ' + anoAtual,
                    fontSize: 15,
                    alignment: 'center',
                    bold: true,
                    margin: [0, 10, 0, 20]
                },

                {
                    text: 'Dados do Aluno',
                    fontSize: 14,
                    alignment: 'center',
                    bold: true,
                    margin: [0, 0, 0, 0]
                },

                {
                    canvas: [
                        {
                            type: 'line',
                            x1: 0, y1: 0,
                            x2: 300, y2: 0,
                            lineWidth: 4,
                            color: '#8A8A8A',
                            alignment: 'center'

                        }
                    ],
                    margin: [100, 5, 0, 0]
                },

                {
                    columns: [
                        {
                            text: 'Nome:  ' + aluno.nome,
                            fontSize: 12,
                            alignment: 'left',
                            width: 350

                        },
                        {
                            text: 'Sexo:  ' + aluno.sexo,
                            fontSize: 12,
                            alignment: 'left',
                            width: '*'
                        }
                    ],
                    margin: [0, 10, 0, 0]
                },

                {
                    columns: [
                        {
                            text: 'Escola:  ' + aluno.nomeEscola,
                            fontSize: 12,
                            alignment: 'left',
                            width: 220
                        },

                        {
                            text: 'Turma:  ' + aluno.serieEscola,
                            fontSize: 12,
                            alignment: 'left',
                            width: 130
                        },

                        {
                            text: 'Período:  ' + aluno.periodoEstudoEscola,
                            fontSize: 12,
                            alignment: 'left',
                            width: '*'
                        }
                    ],
                    margin: [0, 10, 0, 0]
                },

                {
                    columns: [
                        {
                            text: 'Data de Nascimento:  ' + formatarData(aluno.dataNascimento),
                            fontSize: 12,
                            alignment: 'left',
                            width: 350

                        },

                        {
                            text: 'Idade:  ' + calcularIdade(aluno.dataNascimento),
                            fontSize: 12,
                            alignment: 'left',
                            width: '*'
                        }


                    ],
                    margin: [0, 10, 0, 0]
                },

                {
                    columns: [
                        {
                            text: 'CPF: ' + aluno.cpf,
                            fontSize: 12,
                            alignment: 'left',
                            width: 350
                        },

                        {
                            text: 'RG: ' + aluno.rg,
                            fontSize: 12,
                            alignment: 'left',
                            width: '*'
                        }


                    ],
                    margin: [0, 10, 0, 15]
                },


                {
                    text: 'Dados do Responsável',
                    fontSize: 14,
                    alignment: 'center',
                    bold: true,
                    margin: [0, 0, 0, 0]
                },

                {
                    canvas: [
                        {
                            type: 'line',
                            x1: 0, y1: 0,
                            x2: 300, y2: 0,
                            lineWidth: 4,
                            color: '#8A8A8A',
                            alignment: 'center'

                        }
                    ],
                    margin: [100, 5, 0, 0]
                },

                {
                    columns: [
                        {
                            text: 'Nome:  ' + aluno.nomeResponsavel,
                            fontSize: 12,
                            alignment: 'left',
                            width: 175,
                        },
                        {
                            text: 'Telefone 1:  ' + aluno.telefoneResponsavel1,
                            fontSize: 12,
                            alignment: 'left',
                            width: 175
                        },

                        {
                            text: 'Telefone 2:  ' + aluno.telefoneResponsavel2,
                            fontSize: 12,
                            alignment: 'left',
                            width: '*'
                        }

                    ],
                    margin: [0, 10, 0, 0]

                },

                {
                    columns: [
                        {
                            text: 'Endereço:  ' + aluno.logradouro + ", " + aluno.numero,
                            fontSize: 12,
                            alignment: 'left',
                            width: 350
                        },

                        {
                            text: 'Bairro:  ' + aluno.bairro,
                            fontSize: 12,
                            alignment: 'left',
                            width: '*'
                        }
                    ],
                    margin: [0, 10, 0, 15]
                },

                {
                    text: 'Dados do Contra Turno',
                    fontSize: 14,
                    alignment: 'center',
                    bold: true,
                    margin: [0, 0, 0, 0]
                },

                {
                    canvas: [
                        {
                            type: 'line',
                            x1: 0, y1: 0,
                            x2: 300, y2: 0,
                            lineWidth: 4,
                            color: '#8A8A8A',
                            alignment: 'center'

                        }
                    ],
                    margin: [100, 5, 0, 0]
                },

                {
                    columns: [
                        {
                            text: 'Utiliza Transporte:  ' + utilizaTransporte,
                            fontSize: 12,
                            alignment: 'left',
                            width: 175

                        },
                        {
                            text: 'Somente Robótica:  ' + somenteRobotica,
                            fontSize: 12,
                            alignment: 'left',
                            width: 175
                        },

                        {
                            text: 'Outras Oficinas:  ' + outrasOficinas,
                            fontSize: 12,
                            alignment: 'left',
                            width: '*'
                        }
                    ],
                    margin: [0, 10, 0, 0]
                },

                {
                    columns: [
                        {
                            text: {
                                text: 'Período:  ' + aluno.periodoEstudoContraTurno,
                                fontSize: 12,
                                alignment: 'left',
                            }
                        }
                    ],
                    margin: [0, 10, 0, 15]
                },


                {
                    text: 'Renovação de matrícula',
                    fontSize: 14,
                    alignment: 'center',
                    bold: true,
                    margin: [0, 0, 0, 0]
                },

                {
                    canvas: [
                        {
                            type: 'line',
                            x1: 0, y1: 0,
                            x2: 300, y2: 0,
                            lineWidth: 4,
                            color: '#8A8A8A',
                            alignment: 'center'

                        }
                    ],
                    margin: [100, 5, 0, 0]
                },

                {
                    text: 'Turma: .......... Período: (  ) Matutino (  ) Vespertino | Ano Letivo: ' + (anoAtual + 1),
                    fontSize: 10,
                    alignment: 'left',
                    margin: [0, 10, 0, 0]
                },

                {
                    canvas: [
                        {
                            type: 'line',
                            x1: 0, y1: 0,
                            x2: 300, y2: 0,
                            lineWidth: 4,
                            color: '#0a0a0a',
                            alignment: 'center'

                        }
                    ],
                    margin: [0, 25, 0, 0]
                },

                {
                    text: 'Assinatura do Responsável',
                    fontSize: 8,
                    alignment: 'left',
                    margin: [0, 5, 0, 0]
                },

                {
                    text: 'Turma: .......... Período: (  ) Matutino (  ) Vespertino | Ano Letivo: ' + (anoAtual + 2),
                    fontSize: 10,
                    alignment: 'left',
                    margin: [0, 20, 0, 0]
                },

                {
                    canvas: [
                        {
                            type: 'line',
                            x1: 0, y1: 0,
                            x2: 300, y2: 0,
                            lineWidth: 4,
                            color: '#0a0a0a',
                            alignment: 'center'

                        }
                    ],
                    margin: [0, 25, 0, 0]
                },

                {
                    text: 'Assinatura do Responsável',
                    fontSize: 8,
                    alignment: 'left',
                    margin: [0, 5, 0, 0]
                },

                {
                    text: 'Turma: .......... Período: (  ) Matutino (  ) Vespertino | Ano Letivo: ' + (anoAtual + 3),
                    fontSize: 10,
                    alignment: 'left',
                    margin: [0, 20, 0, 0]
                },

                {
                    canvas: [
                        {
                            type: 'line',
                            x1: 0, y1: 0,
                            x2: 300, y2: 0,
                            lineWidth: 4,
                            color: '#0a0a0a',
                            alignment: 'center'

                        }
                    ],
                    margin: [0, 25, 0, 0]
                },

                {
                    text: 'Assinatura do Responsável',
                    fontSize: 8,
                    alignment: 'left',
                    margin: [0, 5, 0, 0]
                },

                {
                    text: 'Turma: .......... Período: (  ) Matutino (  ) Vespertino | Ano Letivo: ' + (anoAtual + 4),
                    fontSize: 10,
                    alignment: 'left',
                    margin: [0, 20, 0, 0]
                },

                {
                    canvas: [
                        {
                            type: 'line',
                            x1: 0, y1: 0,
                            x2: 300, y2: 0,
                            lineWidth: 4,
                            color: '#0a0a0a',
                            alignment: 'center'

                        }
                    ],
                    margin: [0, 25, 0, 0]
                },

                {
                    text: 'Assinatura do Responsável',
                    fontSize: 8,
                    alignment: 'left',
                    margin: [0, 5, 0, 0]
                },

            ],

            footer: [
                {
                    canvas: [
                        {
                            type: 'line',
                            x1: 0, y1: 0,
                            x2: 515, y2: 0,
                            lineWidth: 2,
                            color: '#8A8A8A',
                            alignment: 'center'

                        }
                    ],
                    margin: [37, 0, 0, 0]
                },

                {
                    text: 'CENTRO DE CONTRATURNO ESCOLAR | Rua dos bobos, 000 | CEP: 00.000-000 | CIDADE-CI | (00) 0000-0000 | email@email.br',
                    fontSize: 8,
                    alignment: 'center',
                    bold: true,
                    margin: [25, 10, 25, 0]
                }
            ]

        };

        let pdfDoc = pdfMake.createPdf(docDefinition);
        pdfDoc.getBase64((data) => {
            res.writeHead(200, {
                'Content-Type': 'application/pdf',
                'Content-Disposition': 'attachment;filename="fichaCadastro.pdf"'
            });
            let download = Buffer.from(data.toString('utf-8'), 'base64');
            res.end(download);
        });

    }).catch((err) => {
        console.log(err);
        res.redirect('/erro');
    });
});

module.exports = router;