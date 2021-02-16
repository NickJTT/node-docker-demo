import { DataTypes } from 'sequelize';
import sequelize from '../database';

export default sequelize.define('message', {
  id: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
  text: { type: DataTypes.STRING(256), allowNull: false, unique: true }
});
