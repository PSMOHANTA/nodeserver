'use strict';
const {sequelize,DataTypes} = require('./index')
  const BulkUploadFileSchema = sequelize.define('BulkUploadFileSchema', {
    fileType: DataTypes.STRING,
    schema: DataTypes.JSON
  }, {});
  BulkUploadFileSchema.associate = function(models) {
    // associations can be defined here
  };
  module.exports = BulkUploadFileSchema;
