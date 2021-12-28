'use strict';
const {sequelize,DataTypes} = require('./index')
  const Courses = sequelize.define(
    "Courses",
    {
      status: DataTypes.INTEGER,
      title: {
        type: DataTypes.STRING,
        validate: {
        notEmpty: {
          msg: 'Title not be empty'
      }
    }
      },
      url: {
        type: DataTypes.STRING,
        validate: {
          isUrl: {
          msg: 'Valid url require'
      }
    }
      },
      isPaid: DataTypes.BOOLEAN,
      image: DataTypes.STRING,
      author: DataTypes.STRING,
      duration: DataTypes.STRING,
      amount: DataTypes.DOUBLE,
      currency: DataTypes.STRING,
      currencySymbol: DataTypes.STRING,
      skill: DataTypes.STRING,
    },
    {}
  );
  Courses.associate = function (models) {
    // associations can be defined here
  };
  module.exports =  Courses;

