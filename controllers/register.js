// import data user pada database untuk register user (add data)
const { user_game, user_game_biodata } = require('../models');

// controller untuk login method GET
function registerGet(req, res) {
    res.status(200)
    return res.render('register.ejs', {
          success : 0, failed : 0
        });
}

// controller untuk register
function registerPost(req,res) {
    user_game.create({
        email: req.body.email,
        password: req.body.password,
        user_game_biodatum: {
          fullname: req.body.fullname,
          phone: req.body.phone
        }
      }, {
        include: {
          model: user_game_biodata,
        }
      })
      .then(()=> {
        res.render('register', { 
          success : 1, failed :  0
        })
      })
      .catch(() => {
        res.render('register', { 
          success : 0, failed :  1
        })
      })    
}

// export controllers
module.exports = {
    registerGet, registerPost
};