//importação de modulos
const methodOverride = require('method-override');
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const colors = require('colors');
const handlebars = require('handlebars');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const conn = require('./db/conn');
const path = require('path');

//importação de rotas
const home = require('./routes/home');
const sobre = require('./routes/sobre');
const cadastro = require('./routes/cadastro');
const erro = require('./routes/erro');
const relatorio = require('./routes/relatorio');
const consulta = require('./routes/consulta');
const deletar = require('./routes/deletar');
const detalhar = require('./routes/detalhar');
const editar = require('./routes/editar');
const gerarFichaCadastro = require('./routes/gerarFichaCadastro');
const dashboard = require('./routes/dashboard');
const changelog = require('./routes/changelog');

//configuração de variaveis de ambiente
dotenv.config();
const PORT = process.env.PORT;

//configuração do servidor
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

//configuração do banco de dados
conn();

//configuração de middlewares
handlebars.registerHelper('ifCond', function (v1, operator, v2, options) {
    switch (operator) {
      case '==':
        return v1 == v2 ? options.fn(this) : options.inverse(this);
      case '===':
        return v1 === v2 ? options.fn(this) : options.inverse(this);
      case '!=':
        return v1 != v2 ? options.fn(this) : options.inverse(this);
      case '!==':
        return v1 !== v2 ? options.fn(this) : options.inverse(this);
      case '<':
        return v1 < v2 ? options.fn(this) : options.inverse(this);
      case '<=':
        return v1 <= v2 ? options.fn(this) : options.inverse(this);
      case '>':
        return v1 > v2 ? options.fn(this) : options.inverse(this);
      case '>=':
        return v1 >= v2 ? options.fn(this) : options.inverse(this);
      case '&&':
        return v1 && v2 ? options.fn(this) : options.inverse(this);
      case '||':
        return v1 || v2 ? options.fn(this) : options.inverse(this);
      default:
        return options.e(this);
    }
});

//configuração de rotas
app.use('/', home);
app.use('/sobre', sobre);
app.use('/cadastro', cadastro);
app.use('/erro', erro);
app.use('/relatorio', relatorio);
app.use('/consulta', consulta);
app.use('/deletar', deletar);
app.use('/detalhar', detalhar);
app.use('/editar', editar);
app.use('/gerarFichaCadastro', gerarFichaCadastro);
app.use('/dashboard', dashboard);
app.use('/changelog', changelog);

//configuração de arquivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

//configuração de template engine
app.engine('handlebars', engine({ defaultLayout: 'main', layoutsDir: __dirname + '/views/layouts'}))
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

//servidor escutando
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`.yellow.bold);
});
