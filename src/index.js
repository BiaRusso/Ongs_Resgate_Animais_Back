const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota / Recursos
 */

 /**
  * Métodos HTTP:
  * 
  * GET:  Buscar/listar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT:  Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de parametro:
   * 
   * Query Parms: Parametros nomeados enviados na rota após"?" (Filtros, paginação)
   * Route Parms: Parametro para idenficar recursos
   * Request Body: Corpo de requisição, utiliado para criar ou altetar recursos
   */
 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  */

  /**
   * Driver: SELECT * FROM users
   * Query Builder : table('users').select('*').where()
   */



app.listen(3333);


