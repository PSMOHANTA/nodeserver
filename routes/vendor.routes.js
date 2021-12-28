var express = require('express');
var router = express.Router();
const dataController = require('../controllers/data.controller');
const associateController = require('../controllers/associtedata.controller');
const VendorSubscriptionDuration = require('../models/vendorsubscriptionduration');
const VenodorSubscriptions = require('../models/venodorsubscriptions');
const Organization = require('../models/organization');

//Vendor Subscription Duration Operation
router.get('/duration', (req,res)=>{
    dataController.index(VendorSubscriptionDuration,req,res);
});
router.get('/duration/:id', (req,res)=>{
    dataController.show(VendorSubscriptionDuration,req,res);
});
router.post('/duration', (req,res)=>{
    dataController.create(VendorSubscriptionDuration,req,res);
});
router.put('/duration/:id', (req,res)=>{
    dataController.update(VendorSubscriptionDuration,req,res);
});
router.delete('/duration/:id', (req,res)=>{
    dataController.destroy(VendorSubscriptionDuration,req,res);
});

//Vendor Subscription Operation
router.get('/subscription', (req,res)=>{
    dataController.index(VenodorSubscriptions,req,res);
});
router.get('/subscription/:id', (req,res)=>{
    dataController.show(VenodorSubscriptions,req,res);
});
router.post('/subscription', (req,res)=>{
    dataController.create(VenodorSubscriptions,req,res);
});
router.put('/subscription/:id', (req,res)=>{
    dataController.update(VenodorSubscriptions,req,res);
});
router.delete('/subscription/:id', (req,res)=>{
    dataController.destroy(VenodorSubscriptions,req,res);
});

router.get('/durationpplt', (req,res)=>{
    const requirement = [{
        model:VenodorSubscriptions,
        attributes:{exclude:['createdAt','updatedAt']}
}]
    associateController.populateIndex(VendorSubscriptionDuration,requirement,req,res);
});
router.get('/subscriptionpplt', (req,res)=>{
    const requirement = [{
        model:Organization,
        attributes:{exclude:['createdAt','updatedAt']}
}]
    associateController.populateIndex(VenodorSubscriptions,requirement,req,res);
});

router.get('/durationpplt/:id', (req,res)=>{
    const requirement = [{
        model:VenodorSubscriptions,
        attributes:{exclude:['createdAt','updatedAt']}
}]
    associateController.populateshow(VendorSubscriptionDuration,requirement,req,res);
});
router.get('/subscriptionpplt/:id', (req,res)=>{
    const requirement = [{
        model:Organization,
        attributes:{exclude:['createdAt','updatedAt']}
}]
    associateController.populateshow(VenodorSubscriptions,requirement,req,res);
});

module.exports = router;
