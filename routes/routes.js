var express = require('express');
var userController = require('../controllers/userController');
var accountController = require('../controllers/accountController');
var documentController = require('../controllers/documentController');
var auth = require('../security/auth');

var router = express.Router();

//user routes
router.post('/users', userController.create);
router.get('/users', auth.authorize, userController.get);
router.get('/users/:id', auth.isAdmin, userController.getById);
router.put('/users/:id', auth.isAdmin, userController.update);
router.delete('/users/:id', auth.isAdmin, userController.remove);

//login
router.post('/login', accountController.authenticate);

//document routes
router.post('/newdocument', documentController.newdocument);


module.exports = router;
