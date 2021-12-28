'use strict';
const Employee = require('./employee');
const {sequelize,DataTypes} = require('./index');
const Organization = require('./organization');
  const EmployeeOrganizationTier = sequelize.define(
    'EmployeeOrganizationTier',
    {
      employeeId:{
        type:DataTypes.INTEGER,
        references:{
          model:Employee,
          key:'id'
        }
      },
      organizationTierId: DataTypes.INTEGER,
      organizationId: {
        type:DataTypes.INTEGER,
        references:{
          model:Organization,
          key:'id'
        }
      },
      status: DataTypes.INTEGER,
    },
    {}
  );
    EmployeeOrganizationTier.belongsTo(Employee, {foreignKey: 'employeeId',onUpdate: 'CASCADE', onDelete: 'CASCADE'}); 
    EmployeeOrganizationTier.belongsTo(Organization, {foreignKey: 'organizationId',onUpdate: 'CASCADE', onDelete: 'CASCADE'});
  module.exports =  EmployeeOrganizationTier;

