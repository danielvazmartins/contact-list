'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('people', [{
      name: "Pessoa 1",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: "Pessoa 2",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    // Limpa a tabela inteira
    //return queryInterface.bulkDelete('team', null, {});
    // Limpa apenas o que foi importado
    return queryInterface.bulkDelete('people', {name:{[Sequelize.Op.in]: ['Pessoa 1', 'Pessoa 2']}}, {});
  }
};