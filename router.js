// import express module and 
const express = require('express');
const router = express.Router();

// import controllers
const homeController = require('./controllers/home.js');
const gameController = require('./controllers/game.js');
const loginController = require('./controllers/login.js');
const registerController = require('./controllers/register.js');
const usersController = require('./controllers/users.js');

// routing
router.get('/', homeController);

router.get('/game', gameController);

router.get('/login', loginController.loginGet);
router.post('/login', loginController.loginPost);

router.get('/register', registerController.registerGet);
router.post('/register', registerController.registerPost);

router.get('/users', usersController.users);
router.get('/users/:id', usersController.usersById);

// export router
module.exports = router;
