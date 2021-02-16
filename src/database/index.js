import { Sequelize } from 'sequelize';

const DATABASE = 'postgres';
const USERNAME = 'postgres';
const PASSWORD = 'postgres';
const OPTIONS = { host: 'db', dialect: 'postgres' };

const sequelize = new Sequelize(DATABASE, USERNAME, PASSWORD, OPTIONS);

export default sequelize;
