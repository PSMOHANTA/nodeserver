var express = require('express');
var router = express.Router();
const Employee = require("../models/employee");
const EmployeeOrganizationRole = require("../models/employeeorganizationrole");
const EmployeeOrganizationTier = require("../models/employeeorganizationtier");
const associateController = require('../controllers/associtedata.controller');

const dataController = require('../controllers/data.controller');
const authController = require('../controllers/auth.controller');
const Organization = require('../models/organization');
const User = require('../models/user');
const OrganizationRole = require('../models/organizationrole');

//Employee Operation
router.get('/emp', (req,res)=>{
    dataController.index(Employee,req,res);
});
router.get('/emp/:id', (req,res)=>{
    dataController.show(Employee,req,res);
});
router.post('/emp', (req,res)=>{
    authController.create(Employee,req,res);
});
router.put('/emp/:id', (req,res)=>{
    dataController.update(Employee,req,res);
});
router.delete('/emp/:id', (req,res)=>{
    dataController.destroy(Employee,req,res);
});

//Employee Organisation Role Operation
router.get('/role', (req,res)=>{
    dataController.index(EmployeeOrganizationRole,req,res);
});
router.get('/role/:id', (req,res)=>{
    dataController.show(EmployeeOrganizationRole,req,res);
});
router.post('/role', (req,res)=>{
    dataController.create(EmployeeOrganizationRole,req,res);
});
router.put('/role/:id', (req,res)=>{
    dataController.update(EmployeeOrganizationRole,req,res);
});
router.delete('/role/:id', (req,res)=>{
    dataController.destroy(EmployeeOrganizationRole,req,res);
});


//Employee Organisation Tire Operation
router.get('/tier', (req,res)=>{
    dataController.index(EmployeeOrganizationTier,req,res);
});
router.get('/tier/:id', (req,res)=>{
    dataController.show(EmployeeOrganizationTier,req,res);
});
router.post('/tier', (req,res)=>{
    dataController.create(EmployeeOrganizationTier,req,res);
});
router.put('/tier/:id', (req,res)=>{
    dataController.update(EmployeeOrganizationTier,req,res);
});
router.delete('/tier/:id', (req,res)=>{
    dataController.destroy(EmployeeOrganizationTier,req,res);
});


router.post('/logIn', (req,res)=>{
    authController.login(Employee,req,res);
});
router.post('/changePassword', (req,res)=>{
    authController.change(Employee,req,res);
});

router.get('/emppplt', (req,res)=>{
    const requirement = [{
        model:Organization,
        attributes:{exclude:['createdAt','updatedAt']}
},
{
    model:User,
    attributes:{exclude:['createdAt','updatedAt','passwordHash']}
}]
    associateController.populateIndex(Employee,requirement,req,res);
});

router.get('/rolepplt', (req,res)=>{
    const requirement = [{
        model:Organization,
        attributes:{exclude:['createdAt','updatedAt']}
},
{
    model:Employee,
    attributes:{exclude:['createdAt','updatedAt','passwordHash']}
},
{
    model:OrganizationRole,
    attributes:{exclude:['createdAt','updatedAt']}
}]
    associateController.populateIndex(EmployeeOrganizationRole,requirement,req,res);
});

router.get('/tierpplt', (req,res)=>{
    const requirement = [{
        model:Organization,
        attributes:{exclude:['createdAt','updatedAt']}
},
{
    model:Employee,
    attributes:{exclude:['createdAt','updatedAt','passwordHash']}
}]
    associateController.populateIndex(EmployeeOrganizationTier,requirement,req,res);
});

router.get('/emppplt/:id', (req,res)=>{
    const requirement = [{
        model:Organization,
        attributes:{exclude:['createdAt','updatedAt']}
},
{
    model:User,
    attributes:{exclude:['createdAt','updatedAt','passwordHash']}
}]
    associateController.populateshow(Employee,requirement,req,res);
});

router.get('/rolepplt/:id', (req,res)=>{
    const requirement = [{
        model:Organization,
        attributes:{exclude:['createdAt','updatedAt']}
},
{
    model:Employee,
    attributes:{exclude:['createdAt','updatedAt','passwordHash']}
},
{
    model:OrganizationRole,
    attributes:{exclude:['createdAt','updatedAt']}
}]
    associateController.populateshow(EmployeeOrganizationRole,requirement,req,res);
});

router.get('/tierpplt/:id', (req,res)=>{
    const requirement = [{
        model:Organization,
        attributes:{exclude:['createdAt','updatedAt']}
},
{
    model:Employee,
    attributes:{exclude:['createdAt','updatedAt','passwordHash']}
}]
    associateController.populateshow(EmployeeOrganizationTier,requirement,req,res);
});

module.exports = router;
