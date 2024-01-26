const express = require('express');
const router = express.Router();
const aluno = require('../models/Aluno');
const pdfMake = require('pdfmake/build/pdfmake.js');
const pdfFonts = require('pdfmake/build/vfs_fonts.js');

//configuracao do PDF
pdfMake.vfs = pdfFonts.pdfMake.vfs;

router.get('/', (req, res) => {
    res.render('relatorio', { version: require('../package.json').version, title: 'relatorios' })
});

router.post('/', (req, res) => {
    let opcaoEscolhida = req.body.opcaoRelatorio;
    //"1" = Alunos Ativos
    //"2" = Alunos Inativos
    //"3" = Alunos por periodo

    if (opcaoEscolhida != "1" && opcaoEscolhida != "2" && opcaoEscolhida != "3") {
        res.render('erro', { version: require('../package.json').version, title: 'erro' })
    } else {
        if (opcaoEscolhida == "1") {
            aluno.countDocuments({ ativo: true }).then((alunos) => {

                let docDefinition = {

                    content: [
                        {
                            text: 'Relatório de Alunos Ativos Sintético',
                            style: 'header'
                        },

                        {
                            columns: [
                                {
                                    text: 'Quantidade de alunos ativos:  ' + alunos,
                                    fontSize: 14,
                                    width: 'auto'
                                }

                            ],
                            marginTop: 20,
                        },
                    ],
                    footer: [
                        {
                            canvas: [
                                {
                                    type: 'line',
                                    x1: 50, y1: 5,
                                    x2: 595 - 50, y2: 5,
                                    lineWidth: 1,
                                    alignment: 'center',
                                }
                            ]
                        },
                        {
                            text: 'Gerado em: ' + new Date().toLocaleDateString() + ' às ' + new Date().toLocaleTimeString(),
                            fontSize: 12,
                            bold: false,
                            alignment: 'center',
                            marginTop: 10,
                        }
                    ],

                    styles: {
                        header: {
                            fontSize: 16,
                            bold: true,
                            alignment: 'center',
                            marginBottom: 10,
                        }
                    }
                };

                let pdfDoc = pdfMake.createPdf(docDefinition);
                pdfDoc.getBase64((data) => {
                    res.writeHead(200, {
                        'Content-Type': 'application/pdf',
                        'Content-Disposition': 'attachment;filename="relatorioAtivos.pdf"'
                    });
                    let download = Buffer.from(data.toString('utf-8'), 'base64');
                    res.end(download);
                });

            }).catch((err) => {
                res.render('erro', { version: require('../package.json').version, title: 'erro' })
                console.log(err);
            });
        } else if (opcaoEscolhida == "2") {
            aluno.countDocuments({ ativo: false }).then((alunos) => {

                let docDefinition = {

                    content: [
                        {
                            text: 'Relatório de Alunos Inativos Sintético',
                            style: 'header'
                        },

                        {
                            columns: [
                                {
                                    text: 'Quantidade de alunos inativos:  ' + alunos,
                                    fontSize: 14,
                                    width: 'auto'
                                }
                            ],
                            marginTop: 20,
                        },
                    ],
                    footer: [
                        {
                            canvas: [
                                {
                                    type: 'line',
                                    x1: 50, y1: 5,
                                    x2: 595 - 50, y2: 5,
                                    lineWidth: 1,
                                    alignment: 'center',
                                }
                            ]
                        },
                        {
                            text: 'Gerado em: ' + new Date().toLocaleDateString() + ' às ' + new Date().toLocaleTimeString(),
                            fontSize: 12,
                            bold: false,
                            alignment: 'center',
                            marginTop: 10,

                        }
                    ],

                    styles: {
                        header: {
                            fontSize: 16,
                            bold: true,
                            alignment: 'center',
                            marginBottom: 10,
                        }
                    }
                };

                let pdfDoc = pdfMake.createPdf(docDefinition);
                pdfDoc.getBase64((data) => {
                    res.writeHead(200, {
                        'Content-Type': 'application/pdf',
                        'Content-Disposition': 'attachment;filename="relatorioInativos.pdf"'
                    });
                    let download = Buffer.from(data.toString('utf-8'), 'base64');
                    res.end(download);
                });

            }).catch((err) => {
                res.render('erro', { version: require('../package.json').version, title: 'erro' })
                console.log(err);
            });
        } else if (opcaoEscolhida == "3") {

            async function getPeriodos() {
                try {
                    let periodoManha = await aluno.countDocuments({ periodoEstudoEscola: 'Matutino' });
                    let periodoTarde = await aluno.countDocuments({ periodoEstudoEscola: 'Vespertino' });

                    return { periodoManha, periodoTarde };
                } catch (error) {
                    console.error(error);
                }
            }

            getPeriodos().then((periodos) => {
                let docDefinition = {

                    content: [
                        {
                            text: 'Relatório de Alunos por Período Sintético',
                            style: 'header'
                        },

                        {
                            columns: [
                                {
                                    text: 'Quantidade de alunos no período matutino:  ' + periodos.periodoManha,
                                    fontSize: 14,
                                    width: 'auto'
                                }
                            ],
                            marginTop: 20,
                        },

                        {
                            columns: [
                                {
                                    text: 'Quantidade de alunos no período vespertino:  ' + periodos.periodoTarde,
                                    fontSize: 14,
                                    width: 'auto'
                                }
                            ],
                            marginTop: 20,
                        }
                    ],
                    footer: [
                        {
                            canvas: [
                                {
                                    type: 'line',
                                    x1: 50, y1: 5,
                                    x2: 595 - 50, y2: 5,
                                    lineWidth: 1,
                                    alignment: 'center',
                                }
                            ]
                        },

                        {
                            text: 'Gerado em: ' + new Date().toLocaleDateString() + ' às ' + new Date().toLocaleTimeString(),
                            fontSize: 12,
                            bold: false,
                            alignment: 'center',
                            marginTop: 10,
                        }
                    ],

                    styles: {
                        header: {
                            fontSize: 16,
                            bold: true,
                            alignment: 'center',
                            marginBottom: 10,
                        }
                    }
                };

                let pdfDoc = pdfMake.createPdf(docDefinition);
                pdfDoc.getBase64((data) => {
                    res.writeHead(200, {
                        'Content-Type': 'application/pdf',
                        'Content-Disposition': 'attachment;filename="relatorioPeriodo.pdf"'
                    });
                    let download = Buffer.from(data.toString('utf-8'), 'base64');
                    res.end(download);
                });

            }).catch((error) => {
                console.error(error);
            });
        }
    }
});

module.exports = router;