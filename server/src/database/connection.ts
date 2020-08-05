import knex from 'knex';

const db = knex({
  client: 'mysql',
  connection: {
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'proffy'
  }
});

export default db;