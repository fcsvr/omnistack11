const express = require('express'); 
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/*
* Rota / Recurso
*/

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar um informação do back-end
 * POST:Criar uma informação no back-end
 * PUT: Alterar uma informação no backend
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parametros:
 * 
 * Query: Parametros nomeados enviados na rota após "?" (Filtros, paginação)"
 * Params: Parametros utilizados para identificar recursos
 * Request Body: Corpo da Requisição, utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLLite, PostgreeSQL, Oracle, MS SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 * 
 */

/**
 * Driver: 
 * 
 */


app.listen(3333);


