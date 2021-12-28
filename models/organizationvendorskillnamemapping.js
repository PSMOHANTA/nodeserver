'use strict';
const {sequelize,DataTypes} = require('./index');
const Organization = require('./organization');
  const OrganizationVendorSkillNameMapping = sequelize.define(
    'OrganizationVendorSkillNameMapping',
    {
      vendorId: DataTypes.INTEGER,
      organizationId:{ 
        type:DataTypes.STRING,
        references:{
          model:Organization,
          key:'id'
        }  
      },
      vendorSkillName: DataTypes.STRING,
      skillId: DataTypes.INTEGER,
    },
    {}
  );
  OrganizationVendorSkillNameMapping.belongsTo(Organization,{foreignKey:'organizationId',onUpdate: 'CASCADE', onDelete: 'CASCADE'});
  module.exports =  OrganizationVendorSkillNameMapping;
