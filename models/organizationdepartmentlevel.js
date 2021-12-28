'use strict';
const {sequelize,DataTypes} = require('./index');
const Organization = require('./organization');
  const OrganizationDepartmentLevel = sequelize.define(
    'OrganizationDepartmentLevel',
    {
      status: DataTypes.INTEGER,
      level: DataTypes.STRING,
      organizationId:{ 
        type:DataTypes.STRING,
        references:{
          model:Organization,
          key:'id'
        }  
      },
      priority: DataTypes.INTEGER,
    },
    {}
  );
  OrganizationDepartmentLevel.belongsTo(Organization,{foreignKey:'organizationId',onUpdate: 'CASCADE', onDelete: 'CASCADE'});
  
  module.exports =  OrganizationDepartmentLevel;

