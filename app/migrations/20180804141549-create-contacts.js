'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('contacts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      contact: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      // Cria a chave estrangeira
      people_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'people',
          key: 'id'
        },
        allowNull: false,
        onDelete: 'CASCADE'
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('contacts');
  }
};