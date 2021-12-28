var express = require('express');
var router = express.Router();
const User = require("../models/user")
const dataController = require('../controllers/data.controller');
const authController = require('../controllers/auth.controller');

router.get('/', (req,res)=>{
    dataController.index(User,req,res);
});
router.get('/:id', (req,res)=>{
    dataController.show(User,req,res);
});
router.post('/', (req,res)=>{
    authController.create(User,req,res);
});
router.put('/:id', (req,res)=>{
    dataController.update(User,req,res);
});
router.delete('/:id', (req,res)=>{
    dataController.destroy(User,req,res);
});


router.post('/logIn', (req,res)=>{
    authController.login(User,req,res);
});
router.post('/changePassword', (req,res)=>{
    authController.change(User,req,res);
});
module.exports = router;