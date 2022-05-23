// import json data user statis untuk login admin
const adminUser = require('../db/admin.json');
// import data user pada database untuk login user
const { user_game } = require('../models');


// CONTROLLER LOGIN UNTUK USER

// controller untuk login method GET untuk user
function loginGet(req, res) {
    res.status(200)
    return res.render('login.ejs', {
      failed : 0
    });
}

// controller untuk login method POST untuk user (cek email dan pass)
async function loginPost(req, res) {
    
    const email = req.body.email;
    const password = req.body.password;
  
    // mengecek jika email ada di dalam tabel user
    const userData = await user_game.findOne({
      where: {
        email: email,
      },
    });
  
    if (!userData) { // dilanjutkan mengecek email, apabila email tidak ditemukan maka:
      return res.status(403).render('login.ejs', {
        failed : 1
      });

    }

    if (userData.password !== password) { // dilanjutkan mengecek password, apabila password pada email yg digunakan salah maka:
      return res.status(403).render('login.ejs', {
        failed : 2
      });
    }

    return res.status(200).redirect('/game'); // apabila pass sesuai maka login berhasil dan redirect ke game
}


// CONTROLLER LOGIN UNTUK ADMIN

// controller untuk login method GET untuk admin
function loginGetAdmin(req, res) {
    res.status(200)
    return res.render('login_admin.ejs', { failed : 0 });
}

// controller untuk login method GET untuk admin (cek email dan pass)
function loginPostAdmin(req, res) {

    const inputEmail = req.body.email;
    const inputPassword = req.body.password;

    const findDataIndex = adminUser.findIndex((element) => element.email == inputEmail);

    if (findDataIndex == -1) { // apabila hasil findIndex adalah -1, maka data sesuai syarat tidak ditemukan
        res.status(403).render('login_admin.ejs', { failed : 1 });
    } else { // apabila data ditemukan dan--
            if (adminUser[findDataIndex].password != inputPassword) { // password salah
                res.status(403).render('login_admin.ejs', { failed : 2 });
            } else { // password sesuai
                res.status(200).redirect('/dashboard');
            };            
    };
};

// export controllers
module.exports = {
    loginGet, loginPost, loginGetAdmin, loginPostAdmin
};