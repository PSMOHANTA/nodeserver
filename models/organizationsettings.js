"use strict";
const {sequelize,DataTypes} = require('./index');
const Organization = require('./organization');
  const OrganizationSetting = sequelize.define(
    "OrganizationSetting",
    {
      organizationId:{ 
        type:DataTypes.STRING,
        references:{
          model:Organization,
          key:'id'
        }  
      },
      settings: DataTypes.JSON,
      status: DataTypes.INTEGER,
    },
    {}
  );
  OrganizationSetting.belongsTo(Organization,{foreignKey:'organizationId',onUpdate: 'CASCADE', onDelete: 'CASCADE'});
  module.exports =  OrganizationSetting;
