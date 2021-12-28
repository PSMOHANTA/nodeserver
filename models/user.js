"use strict";
const { sequelize, DataTypes } = require('./index')
const User = sequelize.define(
  "User",
  {
    profilePicture: DataTypes.STRING,
    firstName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'First Name not be empty'
        }
      }
    },
    lastName: DataTypes.STRING,
    middleName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: 'Email must be valid'
        }
      }
    },
    dob: {
      type: DataTypes.DATEONLY,
      validate: {
        isDate: {
          msg: 'Valid Date required'
        }
      }
    },
    gender: {
      type: DataTypes.STRING,
      validate: {
        isIn: {
          args: [['M', 'F', 'O']],
          msg: 'Gender value must be M, F or O only'
        }
      }
    },
    passwordHash: DataTypes.STRING,
    phone: DataTypes.STRING,
    // phone: {
    //   type:DataTypes.STRING,
    // validate:{
    //  is:{args: /^\+?([0-9]{2})\)?[-. ]?([0-9]{10})+$/i,
    //   msg:"Phone Number must be 10digit with country code"
    // }
    // }
    // },
    status: DataTypes.INTEGER,
    lastLoggedInAt: DataTypes.DATE,
  },
  {}
);

module.exports = User;
