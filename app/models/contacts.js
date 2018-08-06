'use strict';
module.exports = (sequelize, DataTypes) => {
  var contacts = sequelize.define('contacts', {
    type: DataTypes.STRING,
    contact: DataTypes.STRING
  }, {
    tableName: 'contacts'
  });
  contacts.associate = function(models) {
    contacts.belongsTo(models.people, {
      foreignKey: {
				name: 'people_id',
				allowNull: false
			},
			// Apaga esse registro se o team for removido
			onDelete: 'CASCADE'
    });
  };
  return contacts;
};