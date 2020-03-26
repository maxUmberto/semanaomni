// Importa as funcionalidades do express
const express = require ('express');

const cors = require('cors');

//Pega as rotas importas
const routes = require('./routes');

//Criando a aplicaçãp
const app = express();

app.use(cors());

//Informa que usaremos JSON para as requisições
app.use(express.json());

app.use(routes)

//Ouvir a porta 3333 (localhost:3333)
app.listen(3333);