'use strict';
const {sequelize,DataTypes} = require('./index');
const Organization = require('./organization');
const User = require('./user');

  const Employee = sequelize.define(
    "Employee",
    {
      email: { type: DataTypes.STRING, validate: { isEmail: {
        msg:'Email must be valid'
      } } },
      phone: DataTypes.STRING,
      phoneAlt: DataTypes.STRING,
      status: DataTypes.INTEGER,
      dateOfJoining: {
        type: DataTypes.DATE,
        validate:{
          isDate:{
            msg:'Valid Date required'
          }
          
        }
      },
      dateOfRelief: DataTypes.DATE,
      dateOfResignation: DataTypes.DATE,
      passwordHash: DataTypes.STRING,
      designation:{
        type: DataTypes.STRING,
        validate: {
        notEmpty: {
          msg: 'Designation required'
      }
    }
      },
      designationId: DataTypes.INTEGER,
      organizationId:{
        type: DataTypes.INTEGER,
        references:{
          model:Organization,
          key:'id'
        }},
      organizationEmployeeId: DataTypes.STRING,
      userId:{
        type: DataTypes.INTEGER,
      references:{
        model:User,
        key:'id'
      }},
      employeeTypeId: DataTypes.INTEGER,
      probationaryPeriod: DataTypes.INTEGER,
      dateOfProbationCompletion: DataTypes.DATE,
      onboardingCompleted: DataTypes.BOOLEAN,
      lastLoggedInAt: DataTypes.DATE,
      skillScore: DataTypes.FLOAT,
      skillGap: DataTypes.FLOAT,
      lms: DataTypes.JSON,
    },
    {}
  );
    Employee.belongsTo(Organization, {
      foreignKey: "organizationId",onUpdate: 'CASCADE', onDelete: 'CASCADE'
    });
    Employee.belongsTo(User, { foreignKey: "userId" });
  module.exports =  Employee;

