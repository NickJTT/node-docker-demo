'use strict';

const DataTypes = require('sequelize').DataTypes;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('messages', {
      id: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
      text: { type: DataTypes.STRING(256), allowNull: false },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('messages');
  }
};
