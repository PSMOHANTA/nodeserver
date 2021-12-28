var express = require('express');
var router = express.Router();

const dataController = require('../controllers/data.controller');
const associateController = require('../controllers/associtedata.controller');
const Organization = require('../models/organization');
const OrganizationDepartmentLevel = require('../models/organizationdepartmentlevel');
const OrganizationRole = require('../models/organizationrole');
const OrganizationSetting = require('../models/organizationsettings');
const OrganizationVendorSkillNameMapping = require('../models/organizationvendorskillnamemapping');

//Data Operation
//Organisation operation
router.get('/org', (req,res)=>{
    dataController.index(Organization,req,res);
});
router.get('/org/:id', (req,res)=>{
    dataController.show(Organization,req,res);
});
router.post('/org', (req,res)=>{
    dataController.create(Organization,req,res);
});
router.put('/org/:id', (req,res)=>{
    dataController.update(Organization,req,res);
});
router.delete('/org/:id', (req,res)=>{
    dataController.destroy(Organization,req,res);
});

//Organisation Department Level Opration
router.get('/level', (req,res)=>{
    dataController.index(OrganizationDepartmentLevel,req,res);
});
router.get('/level/:id', (req,res)=>{
    dataController.show(OrganizationDepartmentLevel,req,res);
});
router.post('/level', (req,res)=>{
    dataController.create(OrganizationDepartmentLevel,req,res);
});
router.put('/level/:id', (req,res)=>{
    dataController.update(OrganizationDepartmentLevel,req,res);
});
router.delete('/level/:id', (req,res)=>{
    dataController.destroy(OrganizationDepartmentLevel,req,res);
});

//Organisation Role Operation
router.get('/role', (req,res)=>{
    dataController.index(OrganizationRole,req,res);
});
router.get('/role/:id', (req,res)=>{
    dataController.show(OrganizationRole,req,res);
});
router.post('/role', (req,res)=>{
    dataController.create(OrganizationRole,req,res);
});
router.put('/role/:id', (req,res)=>{
    dataController.update(OrganizationRole,req,res);
});
router.delete('/role/:id', (req,res)=>{
    dataController.destroy(OrganizationRole,req,res);
});

//Organisation Setting Operation
router.get('/setting', (req,res)=>{
    dataController.index(OrganizationSetting,req,res);
});
router.get('/setting/:id', (req,res)=>{
    dataController.show(OrganizationSetting,req,res);
});
router.post('/setting/', (req,res)=>{
    dataController.create(OrganizationSetting,req,res);
});
router.put('/setting/:id', (req,res)=>{
    dataController.update(OrganizationSetting,req,res);
});
router.delete('/setting/:id', (req,res)=>{
    dataController.destroy(OrganizationSetting,req,res);
});


//Vendor Skill Name Papping Operation
router.get('/mapping', (req,res)=>{
    dataController.index(OrganizationVendorSkillNameMapping,req,res);
});
router.get('/mapping/:id', (req,res)=>{
    dataController.show(OrganizationVendorSkillNameMapping,req,res);
});
router.post('/mapping/', (req,res)=>{
    dataController.create(OrganizationVendorSkillNameMapping,req,res);
});
router.put('/mapping/:id', (req,res)=>{
    dataController.update(OrganizationVendorSkillNameMapping,req,res);
});
router.delete('/mapping/:id', (req,res)=>{
    dataController.destroy(OrganizationVendorSkillNameMapping,req,res);
});


router.get('/levelpplt', (req,res)=>{
    const requirement = [{
        model:Organization,
        attributes:{exclude:['createdAt','updatedAt']}
}]
    associateController.populateIndex(OrganizationDepartmentLevel,requirement,req,res);
});
router.get('/rolepplt', (req,res)=>{
    const requirement = [{
        model:Organization,
        attributes:{exclude:['createdAt','updatedAt']}
}]
    associateController.populateIndex(OrganizationRole,requirement,req,res);
});
router.get('/settingpplt', (req,res)=>{
    const requirement = [{
        model:Organization,
        attributes:{exclude:['createdAt','updatedAt']}
}]
    associateController.populateIndex(OrganizationSetting,requirement,req,res);
});
router.get('/mappingpplt', (req,res)=>{
    const requirement = [{
        model:Organization,
        attributes:{exclude:['createdAt','updatedAt']}
}]
    associateController.populateIndex(OrganizationVendorSkillNameMapping,requirement,req,res);
});



router.get('/levelpplt/:id', (req,res)=>{
    const requirement = [{
        model:Organization,
        attributes:{exclude:['createdAt','updatedAt']}
}]
    associateController.populateshow(OrganizationDepartmentLevel,requirement,req,res);
});
router.get('/rolepplt/:id', (req,res)=>{
    const requirement = [{
        model:Organization,
        attributes:{exclude:['createdAt','updatedAt']}
}]
    associateController.populateshow(OrganizationRole,requirement,req,res);
});
router.get('/settingpplt/:id', (req,res)=>{
    const requirement = [{
        model:Organization,
        attributes:{exclude:['createdAt','updatedAt']}
}]
    associateController.populateshow(OrganizationSetting,requirement,req,res);
});
router.get('/mappingpplt/:id', (req,res)=>{
    const requirement = [{
        model:Organization,
        attributes:{exclude:['createdAt','updatedAt']}
}]
    associateController.populateshow(OrganizationVendorSkillNameMapping,requirement,req,res);
});

module.exports = router;