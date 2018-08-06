'use strict';
let People = require('../models').people;

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Busca as pessoas para pegar seu id
    return People.findAll().then(function(people) {
      // Percorre as Pessoas para inserir os contatos (salva a promisse de retorno em uma variavel)
      let promiseMap = people.map(function(person, index) {
        return queryInterface.bulkInsert('contacts', [{
            type: "email",
            contact: `contact${(index * (index+1)) + 1}@teste.com`,
            createdAt: new Date(),
            updatedAt: new Date(),
            people_id: person.id
          },{
            type: "email",
            contact: `contact${(index * (index+1)) + 2}@teste.com`,
            createdAt: new Date(),
            updatedAt: new Date(),
            people_id: person.id
          }])
        })
      // Executa todas promisses retornadas
      return Promise.all(promiseMap);
    })
  },

  down: (queryInterface, Sequelize) => {
    // Limpa a tabela inteira
    //return queryInterface.bulkDelete('contacts', null, {});
    // Limpa apenas o que foi importado
    return queryInterface.bulkDelete('contacts', {type: {[Sequelize.Op.like]: '%@teste.com'}}, {});
  }
};
