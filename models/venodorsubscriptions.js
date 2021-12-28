'use strict';
const {sequelize,DataTypes} = require('./index');
const Organization = require('./organization');
  const VenodorSubscriptions = sequelize.define(
    'VenodorSubscriptions',
    {
      organizationId:{
        type: DataTypes.INTEGER,
        references:{
          model:Organization,
          key:'id'
        }
      },
      status: DataTypes.BOOLEAN,
      vendorId: DataTypes.INTEGER,
      preferencesFor: DataTypes.STRING,
      config: DataTypes.JSON,
    },
    {}
  );

    VenodorSubscriptions.belongsTo(Organization, {
      foreignKey: 'organizationId',onUpdate: 'CASCADE', onDelete: 'CASCADE'
    });

  module.exports =  VenodorSubscriptions;

