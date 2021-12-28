'use strict';
const {sequelize,DataTypes} = require('./index')
  const Organization = sequelize.define(
    'Organization',
    {
      name: {
        type: DataTypes.STRING,
        validate: {
        notEmpty: {
          msg: 'Organization Name Required'
      }
    }
      },
      status: DataTypes.INTEGER,
      verticalId: DataTypes.INTEGER,
    },
    {}
  );
  module.exports =  Organization;

