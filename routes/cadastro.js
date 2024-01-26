const express = require('express');
const router = express.Router();
const Aluno = require('../models/Aluno');

router.get('/', (req, res) => {
    res.render('cadastro', { version: require('../package.json').version, title: 'cadastros'})
});

router.post('/', async (req, res) => {
    //recebendo dados do formulário
    let nome = req.body.nome;
    let dataNascimento = req.body.dataNascimento;
    let cpf = req.body.cpf;
    let rg = req.body.rg;
    let sexo = req.body.sexo;
    let nomeEscola = req.body.escola;
    let turmaEscola = req.body.turma;
    let periodoEstudoEscola = req.body.periodo; 
    let nomeResponsavel = req.body.nomeResponsavel;
    let telefoneResponsavel1 = req.body.telefoneResponsavel1;
    let telefoneResponsavel2 = req.body.telefoneResponsavel2;
    let telefoneResponsavelInternacional = req.body.telefoneResponsavelInternacional;
    let endereco = req.body.enderecoResponsavel;
    let numero = req.body.numeroEnderecoResponsavel;
    let bairro = req.body.bairro;
    let somenteRobotica = req.body.somenteRobotica;
    let outrasOficinas = req.body.outrasOficinas;
    let utilizaTransporte = req.body.utilizaTransporte;
    let status = req.body.status;
    let observacoes = req.body.observacoes;

    //dados que precisam ser tratados
    if(nomeEscola == 1 || nomeEscola == '1'){
        nomeEscola = "Escola1";
    } else if(nomeEscola == 2 || nomeEscola == '2'){
        nomeEscola = "Escola2";
    } else if(nomeEscola == 3 || nomeEscola == '3'){
        nomeEscola = "Escola3";
    } else {
        nomeEscola = "Não informado";
    }

    if(sexo == 0 || sexo == '0'){
        sexo = "Não informado";
    } else if(sexo == 1 || sexo == '1'){
        sexo = "Masculino";
    } else if(sexo == 2 || sexo == '2'){
        sexo = "Feminino";
    } else{ 
        sexo = "Não informado";
    }

    if(somenteRobotica == 1 || somenteRobotica == '1'){
        somenteRobotica = true;
    } else if(somenteRobotica == 2 || somenteRobotica == '2'){
        somenteRobotica = false;
    } else {
        somenteRobotica = false;
    }

    if(outrasOficinas == 1 || outrasOficinas == '1'){
        outrasOficinas = true;
    } else if(outrasOficinas == 2 || outrasOficinas == '2'){
        outrasOficinas = false;
    } else {
        outrasOficinas = false;
    }

    if(turmaEscola == 1 || turmaEscola == '1'){
        turmaEscola = "1º ano";
    } else if(turmaEscola == 2 || turmaEscola == '2'){
        turmaEscola = "2º ano";
    } else if(turmaEscola == 3 || turmaEscola == '3'){
        turmaEscola = "3º ano";
    } else if(turmaEscola == 4 || turmaEscola == '4'){
        turmaEscola = "4º ano";
    } else if(turmaEscola == 5 || turmaEscola == '5'){
        turmaEscola = "5º ano";
    } else {
        turmaEscola = "Não informado";
    }

    if(periodoEstudoEscola == 1 || periodoEstudoEscola == '1'){
        periodoEstudoEscola = "Matutino";
        periodoEstudoContraTurno = "Vespertino";
    } else if(periodoEstudoEscola == 2 || periodoEstudoEscola == '2'){
        periodoEstudoEscola = "Vespertino";
        periodoEstudoContraTurno = "Matutino";
    } else {
        periodoEstudoEscola = "Não informado";
        periodoEstudoContraTurno = "Não informado";
    }

    if(utilizaTransporte == 1 || utilizaTransporte == '1'){
        utilizaTransporte = true;
    } else if(utilizaTransporte == 2 || utilizaTransporte == '2'){
        utilizaTransporte = false;
    } else {
        utilizaTransporte = false;
    }

    if(status == 1 || status == '1'){
        status = true;
    } else if(status == 2 || status == '2'){
        status = false;
    } else {
        status = true;
    }

    //validação de dados
    if(nome == "" || nome == undefined || nome == null){
        nome = "Não informado";
    }
    if(dataNascimento == "" || dataNascimento == undefined || dataNascimento == null){
        dataNascimento = "Não informado";
    }
    if(cpf == "" || cpf == undefined || cpf == null){
        cpf = "Não informado";
    }
    if(rg == "" || rg == undefined || rg == null){
        rg = "Não informado";
    }
    if(nomeResponsavel == "" || nomeResponsavel == undefined || nomeResponsavel == null){
        nomeResponsavel = "Não informado";
    }
    if(telefoneResponsavel1 == "" || telefoneResponsavel1 == undefined || telefoneResponsavel1 == null){
        telefoneResponsavel1 = "Não informado";
    }
    if(telefoneResponsavel2 == "" || telefoneResponsavel2 == undefined || telefoneResponsavel2 == null){
        telefoneResponsavel2 = "Não informado";
    }
    if(telefoneResponsavelInternacional == "" || telefoneResponsavelInternacional == undefined || telefoneResponsavelInternacional == null){
        telefoneResponsavelInternacional = "Não informado";
    }
    if(endereco == "" || endereco == undefined || endereco == null){
        endereco = "Não informado";
    }
    if(numero == "" || numero == undefined || numero == null){
        numero = "Não informado";
    }
    if(bairro == "" || bairro == undefined || bairro == null){
        bairro = "Não informado";
    }
    if(observacoes == "" || observacoes == undefined || observacoes == null){
        observacoes = "Não informado";
    }
    

    //criando objeto aluno
    const aluno = new Aluno({
        nome: nome,
        dataNascimento: dataNascimento,
        cpf: cpf,
        rg: rg,
        sexo: sexo,
        nomeResponsavel: nomeResponsavel,
        telefoneResponsavel1: telefoneResponsavel1,
        telefoneResponsavel2: telefoneResponsavel2,
        telefoneResponsavelInternacional: telefoneResponsavelInternacional,
        logradouro: endereco,
        numero: numero,
        bairro: bairro,
        somenteRobotica: somenteRobotica,
        outrasOficinas: outrasOficinas,
        periodoEstudoContraTurno: periodoEstudoContraTurno,
        periodoEstudoEscola: periodoEstudoEscola,
        nomeEscola: nomeEscola,
        serieEscola: turmaEscola,
        utilizaTransporte: utilizaTransporte,
        observacoes: observacoes,
        ativo: status,
    });

    try {
        console.log(aluno)
        await aluno.save();
        res.json({ status: 'success', message: 'Aluno registrado', id: aluno._id });
    } catch (error) {
        res.status(500).redirect('/erro');
        console.error(error);
    }

});

module.exports = router;