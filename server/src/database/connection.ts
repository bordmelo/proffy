import knex from 'knex';
import 'dotenv/config';

const db = knex({
  client: 'postgres',
  connection: {
    host : process.env.PG_HOST,
    user : process.env.PG_USER,
    password : process.env.PG_PASSWORD,
    database : process.env.PG_DATABASE
  },
  useNullAsDefault: true
});

export default db;