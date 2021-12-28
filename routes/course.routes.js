var express = require('express');
var router = express.Router();
const Course = require("../models/courses")
const dataController = require('../controllers/data.controller');

router.get('/', (req,res)=>{
    dataController.index(Course,req,res);
});
router.get('/:id', (req,res)=>{
    dataController.show(Course,req,res);
});
router.post('/', (req,res)=>{
    dataController.create(Course,req,res);
});
router.put('/:id', (req,res)=>{
    dataController.update(Course,req,res);
});
router.delete('/:id', (req,res)=>{
    dataController.destroy(Course,req,res);
});

module.exports = router;
