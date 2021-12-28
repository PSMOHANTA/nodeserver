var express = require('express');
var router = express.Router();
const BulkUploadFileSchema = require("../models/bulkuploadfileschema")
const dataController = require('../controllers/data.controller');

router.get('/', (req,res)=>{
    dataController.index(BulkUploadFileSchema,req,res);
});
router.get('/:id', (req,res)=>{
    dataController.show(BulkUploadFileSchema,req,res);
});
router.post('/', (req,res)=>{
    dataController.create(BulkUploadFileSchema,req,res);
});
router.put('/:id', (req,res)=>{
    dataController.update(BulkUploadFileSchema,req,res);
});
router.delete('/:id', (req,res)=>{
    dataController.destroy(BulkUploadFileSchema,req,res);
});

module.exports = router;
