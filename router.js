// import express module and 
const express = require('express');
const router = express.Router();

// import controllers
const homeController = require('./controllers/home.js');
const gameController = require('./controllers/game.js');
const loginController = require('./controllers/login.js');
const registerController = require('./controllers/register.js');
const usersController = require('./controllers/users.js');
const dashboardController = require('./controllers/dashboard.js');

// routing
router.get('/', homeController);

router.get('/game', gameController);

router.get('/login', loginController.loginGet);
router.post('/login', loginController.loginPost);
router.get('/admin', loginController.loginGetAdmin);
router.post('/admin', loginController.loginPostAdmin);


router.get('/register', registerController.registerGet);
router.post('/register', registerController.registerPost);


router.get('/dashboard/users', dashboardController.dashboardAllUser);
router.get('/dashboard/users/:id', dashboardController.dashboardUserBiodata);

router.get('/dashboard/users/delete_bio/:id', dashboardController.deleteUserBiodata);
router.get('/dashboard/users/delete/:id', dashboardController.deleteUser);

router.get('/dashboard/users/update/:id', dashboardController.updateForm);
router.post('/dashboard/users/update/:id', dashboardController.updateUser);
router.get('/dashboard/users/update_bio/:id', dashboardController.updateFormBiodata);
router.post('/dashboard/users/update_bio/:id', dashboardController.updateUserBiodata);


router.get('/users', usersController.users);
router.get('/users/:id', usersController.usersById);

// export router
module.exports = router;
