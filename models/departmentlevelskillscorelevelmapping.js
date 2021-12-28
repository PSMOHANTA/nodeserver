'use strict';
const {sequelize,DataTypes} = require('./index');
const SkillScoreLevelMapping = require('./skillscorelevelmapping')
  const DepartmentLevelSkillScoreLevelMapping = sequelize.define(
    'DepartmentLevelSkillScoreLevelMapping',
    {
      departmentLevelId: DataTypes.INTEGER,
      levelRangeId:{
        type:DataTypes.INTEGER,
        references:{
          model: SkillScoreLevelMapping,
          key: "id"
        },
      }
    },
    {}
  );

    DepartmentLevelSkillScoreLevelMapping.belongsTo( SkillScoreLevelMapping,
      {foreignKey: 'levelRangeId',onUpdate: 'CASCADE', onDelete: 'CASCADE'});
  
  module.exports =  DepartmentLevelSkillScoreLevelMapping;

