const mongoose = require('mongoose');
const colors = require('colors');
require('dotenv').config();

async function main(){
    try {
        await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Conexão com o banco de dados estabelecida com sucesso!".green.bold);
    } catch (error) {
        console.error("Erro: " + error);
    }
}

module.exports = main;