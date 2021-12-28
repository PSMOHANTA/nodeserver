'use strict';
const DesignationCompetencySkillType = require('./designationcompetencyskilltype');
const {sequelize,DataTypes} = require('./index')
  const DesignationCompetencySkillTypeTest = sequelize.define(
    'DesignationCompetencySkillTypeTest',
    {
      designationCompetencySkillTypeId: {
        type:DataTypes.INTEGER,
        references:{
          model:DesignationCompetencySkillType,
          key:'id'
        }
      },
      testId: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN,
    },
    {}
  );
  DesignationCompetencySkillTypeTest.belongsTo(
    DesignationCompetencySkillType,
    {
      foreignKey: 'designationCompetencySkillTypeId',onUpdate: 'CASCADE', onDelete: 'CASCADE'
    }
  );
  module.exports =  DesignationCompetencySkillTypeTest;

