'use strict';
const {sequelize,DataTypes} = require('./index');
  const DesignationCompetencySkillType = sequelize.define(
    'DesignationCompetencySkillType',
    {
      status: DataTypes.INTEGER,
      designationId: DataTypes.INTEGER,
      competencyId: DataTypes.INTEGER,
      skillTypeId: DataTypes.INTEGER,
    },
    {}
  );
  
  module.exports =  DesignationCompetencySkillType;

