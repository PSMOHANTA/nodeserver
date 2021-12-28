'use strict';
const Employee = require('./employee');
const {sequelize,DataTypes} = require('./index');
const Organization = require('./organization');
const OrganizationRole = require('./organizationrole');
  const EmployeeOrganizationRole = sequelize.define(
    "EmployeeOrganizationRole",
    {
      status: DataTypes.INTEGER,
      employeeId:{
        type:DataTypes.INTEGER,
        references:{
          model:Employee,
          key:'id'
        }
      },
      organizationRoleId: {
        type:DataTypes.INTEGER,
        references:{
          model:OrganizationRole,
          key:'id'
        }
      },
      organizationId: {
        type:DataTypes.INTEGER,
        references:{
          model:Organization,
          key:'id'
        }
      },
    },
    {}
  );

    EmployeeOrganizationRole.belongsTo(Employee,{foreignKey:'employeeId',onUpdate: 'CASCADE', onDelete: 'CASCADE'})
    EmployeeOrganizationRole.belongsTo(OrganizationRole,{foreignKey:'organizationRoleId',onUpdate: 'CASCADE', onDelete: 'CASCADE'});
    EmployeeOrganizationRole.belongsTo(Organization,{foreignKey:'organizationId',onUpdate: 'CASCADE', onDelete: 'CASCADE'});
 
  module.exports =  EmployeeOrganizationRole;

