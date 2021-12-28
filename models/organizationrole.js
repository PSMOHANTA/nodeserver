"use strict";
const {sequelize,DataTypes} = require('./index');
const Organization = require('./organization');
  const OrganizationRole = sequelize.define(
    "OrganizationRole",
    {
      name: {
        type: DataTypes.STRING,
        validate: {
        notEmpty: {
          msg: 'Organization Role Name required'
      }
    }
      },
      status: DataTypes.INTEGER,
      organizationId:{ 
        type:DataTypes.STRING,
        references:{
          model:Organization,
          key:'id'
        }  
      },
    },
    {}
  );
  OrganizationRole.belongsTo(Organization,{foreignKey:'organizationId',onUpdate: 'CASCADE', onDelete: 'CASCADE'});
  module.exports =  OrganizationRole;

