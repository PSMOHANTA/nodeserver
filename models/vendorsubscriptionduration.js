'use strict';
const {sequelize,DataTypes} = require('./index');
const VenodorSubscriptions = require('./venodorsubscriptions');
  const VendorSubscriptionDuration = sequelize.define(
    'VendorSubscriptionDuration',
    {
      vendorSubscriptionId:{
        type: DataTypes.INTEGER,
        references:{
          model:VenodorSubscriptions,
          key:'id'
      }
      },
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
      reviewDate: DataTypes.DATE,
    },
    {}
  );
  VendorSubscriptionDuration.belongsTo(VenodorSubscriptions,{foreignKey:'vendorSubscriptionId',onUpdate: 'CASCADE', onDelete: 'CASCADE'});
  module.exports =  VendorSubscriptionDuration;

