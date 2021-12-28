var express = require('express');
var router = express.Router();
const dataController = require('../controllers/data.controller');
const associateController = require('../controllers/associtedata.controller');
const SkillCourses = require('../models/skillcourses');
const SkillScoreLevelMapping = require('../models/skillscorelevelmapping');
const Courses = require('../models/courses');

//Skill Courses Operation
router.get('/course', (req,res)=>{
    dataController.index(SkillCourses,req,res)
});
router.get('/course/:id', (req,res)=>{
    dataController.show(SkillCourses,req,res)
});
router.post('/course', (req,res)=>{
    dataController.create(SkillCourses,req,res)
});
router.put('/course/:id', (req,res)=>{
    dataController.update(SkillCourses,req,res)
});
router.delete('/course/:id', (req,res)=>{
    dataController.destroy(SkillCourses,req,res)
});

//Skill Score Level Mapping Operation
router.get('/score', (req,res)=>{
    dataController.index(SkillScoreLevelMapping,req,res);
});
router.get('/score/:id', (req,res)=>{
    dataController.show(SkillScoreLevelMapping,req,res);
});
router.post('/score', (req,res)=>{
    dataController.create(SkillScoreLevelMapping,req,res);
});
router.put('/score/:id', (req,res)=>{
    dataController.update(SkillScoreLevelMapping,req,res);
});
router.delete('/score/:id', (req,res)=>{
    dataController.destroy(SkillScoreLevelMapping,req,res);
});

router.get('/coursepplt', (req,res)=>{
    const requirement = [{
        model:Courses,
        attributes:{exclude:['createdAt','updatedAt']}
}]
    associateController.populateIndex(SkillCourses,requirement,req,res);
});

router.get('/coursepplt/:id', (req,res)=>{
    const requirement = [{
        model:Courses,
        attributes:{exclude:['createdAt','updatedAt']}
}]
    associateController.populateshow(SkillCourses,requirement,req,res);
});

module.exports = router;
