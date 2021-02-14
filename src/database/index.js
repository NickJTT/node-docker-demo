import { Client } from 'pg';

const USER = 'postgres';
const HOST = 'db';
const DATABASE = 'postgres';
const PASSWORD = 'postgres';
const PORT = 5432;

const CONNECTION = { user: USER, host: HOST, database: DATABASE, password: PASSWORD, port: PORT };

const client = new Client(CONNECTION);

const createConnection = async () => {
  await new Promise(res => setTimeout(res, 10000));
  await client.connect();
}

createConnection();

export default client;
