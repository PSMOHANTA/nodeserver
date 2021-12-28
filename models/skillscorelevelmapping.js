'use strict';
const {sequelize,DataTypes} = require('./index')
  const SkillScoreLevelMapping = sequelize.define(
    'SkillScoreLevelMapping',
    {
      levelRange: DataTypes.STRING,
      skillScoreRangeLowerBound: DataTypes.INTEGER,
      skillScoreRangeUpperBound: DataTypes.INTEGER,
    },
    {}
  );
  module.exports =  SkillScoreLevelMapping;

