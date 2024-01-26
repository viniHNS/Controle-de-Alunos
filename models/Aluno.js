const mongoose = require('mongoose');

const alunoSchema = new mongoose.Schema({
    nome: {
        type: String,
    },
    dataNascimento: {
        type: String,
    },
    cpf: {
        type: String,
    },
    rg: {
        type: String,
    },
    sexo: {
        type: String,
    },
    nomeResponsavel: {
        type: String,
    },
    telefoneResponsavel1: {
        type: String,
    },
    telefoneResponsavel2: {
        type: String,
    },
    telefoneResponsavelInternacional: {
        type: String,
    },
    logradouro: {
        type: String,
    },
    numero: {
        type: String,
    },
    bairro: {
        type: String,
    },
    somenteRobotica: {
        type: Boolean,
    },
    outrasOficinas: {
        type: Boolean,
    },
    periodoEstudoContraTurno: {
        type: String,
    },
    periodoEstudoEscola: {
        type: String,
    },
    nomeEscola: {
        type: String,
    },
    serieEscola: {
        type: String,
    },
    utilizaTransporte: {
        type: Boolean,
    },
    observacoes: {
        type: String,
    },
    ativo: {
        type: Boolean,
    },
}, {timestamps: true});

const Aluno = mongoose.model('Aluno', alunoSchema);

module.exports = Aluno;
