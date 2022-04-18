// import and initiate express
const express = require('express');
const app = express();

// import dotenv
require('dotenv').config();

// import middleware
const errorMiddleware = require('./middlewares/error');
const notFoundMiddleware = require('./middlewares/notfound');

// applying static middlewares
app.use(express.static('public'));

// applying body reader middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// import router
const router = require('./router.js');

// applying ejs view engine
app.set('view engine', 'ejs');

app.listen(process.env.PORT, () => {
    console.log(`Server successfully now running on PORT ${process.env.PORT}`); 
});

app.use(router);

// applying error & not found middleware
app.use(errorMiddleware);
app.use(notFoundMiddleware);

