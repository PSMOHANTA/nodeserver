var express = require('express');
var router = express.Router();
const DesignationCompetencySkillType = require("../models/designationcompetencyskilltype");
const DesignationCompetencySkillTypeTest = require("../models/designationcompetencyskilltypetest");
const dataController = require('../controllers/data.controller');
const associateController = require('../controllers/associtedata.controller');

//Designation Competency Skill Type
router.get('/type', (req,res)=>{
    dataController.index(DesignationCompetencySkillType,req,res);
});
router.get('/type/:id', (req,res)=>{
    dataController.show(DesignationCompetencySkillType,req,res);
});
router.post('/type', (req,res)=>{
    dataController.create(DesignationCompetencySkillType,req,res);
});
router.put('/type/:id', (req,res)=>{
    dataController.update(DesignationCompetencySkillType,req,res);
});
router.delete('/type/:id', (req,res)=>{
    dataController.destroy(DesignationCompetencySkillType,req,res);
});

//Designation Competency Skill Type Test
router.get('/test', (req,res)=>{
    dataController.index(DesignationCompetencySkillTypeTest,req,res);
});
router.get('/test/:id', (req,res)=>{
    dataController.show(DesignationCompetencySkillTypeTest,req,res);
});
router.post('/test', (req,res)=>{
    dataController.create(DesignationCompetencySkillTypeTest,req,res);
});
router.put('/test/:id', (req,res)=>{
    dataController.update(DesignationCompetencySkillTypeTest,req,res);
});
router.delete('/test/:id', (req,res)=>{
    dataController.destroy(DesignationCompetencySkillTypeTest,req,res);
});


router.get('/testpplt', (req,res)=>{
    const requirement = [{
        model:DesignationCompetencySkillType,
        attributes:{exclude:['createdAt','updatedAt']}
}]
    associateController.populateIndex(DesignationCompetencySkillTypeTest,requirement,req,res);
});

router.get('/testpplt/:id', (req,res)=>{
    const requirement = [{
        model:DesignationCompetencySkillType,
        attributes:{exclude:['createdAt','updatedAt']}
}]
    associateController.populateshow(DesignationCompetencySkillTypeTest,requirement,req,res);
});

module.exports = router;
