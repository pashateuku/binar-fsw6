// import json data user statis
const usersData = require('../db/admin.json');
const { user_game, user_game_biodata } = require('../models');

// controller untuk login method GET
function registerGet(req, res) {
    res.status(200)
    return res.render('register.ejs');
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
        res.send('Akun berhasil dibuat')
      })
      .catch(() => {
        res.status(422).send('Terjadi kesalahan, mohon mengisi form kembali dengan lengkap')
      })    
}

// export controllers
module.exports = {
    registerGet, registerPost
};