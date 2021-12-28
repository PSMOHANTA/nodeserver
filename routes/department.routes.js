var express = require('express');
var router = express.Router();
const DepartmentLevelSkillScoreLevelMapping = require("../models/departmentlevelskillscorelevelmapping");
const SkillScoreLevelMapping = require("../models/skillscorelevelmapping");
const dataController = require('../controllers/data.controller');
const associateController = require('../controllers/associtedata.controller');


router.get('/dept', (req,res)=>{
    dataController.index(DepartmentLevelSkillScoreLevelMapping,req,res);
});
router.get('/dept/:id', (req,res)=>{
    dataController.show(DepartmentLevelSkillScoreLevelMapping,req,res);
});
router.post('/dept', (req,res)=>{
    dataController.create(DepartmentLevelSkillScoreLevelMapping,req,res);
});
router.put('/dept/:id', (req,res)=>{
    dataController.update(DepartmentLevelSkillScoreLevelMapping,req,res);
});
router.delete('/dept/:id', (req,res)=>{
    dataController.destroy(DepartmentLevelSkillScoreLevelMapping,req,res);
});
router.get('/deptpplt', (req,res)=>{
    const requirement = [{
        model:SkillScoreLevelMapping,
        attributes:{exclude:['createdAt','updatedAt']}

}]
    associateController.populateIndex(DepartmentLevelSkillScoreLevelMapping,requirement,req,res);
});

router.get('/deptpplt/:id', (req,res)=>{
    const requirement = [{
        model:SkillScoreLevelMapping,
        attributes:{exclude:['createdAt','updatedAt']}

}]
    associateController.populateshow(DepartmentLevelSkillScoreLevelMapping,requirement,req,res);
});


module.exports = router;
