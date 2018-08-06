'use strict';
let contacts = require('../models').contacts;

module.exports = (sequelize, DataTypes) => {
  var people = sequelize.define('people', {
    name: DataTypes.STRING,
    company: DataTypes.STRING,
    relationship: DataTypes.STRING
  }, {
    freezeTableName: true
  });
  people.associate = function(models) {
    // Relacionamento 1 para N (people has many contacts)
    people.hasMany(models.contacts, {
      foreignKey: {
        field: 'people_id'
      }
    });
  };
  return people;
};