// import json data user statis
const adminUser = require('../db/admin.json');
const { user_game, user_game_biodata } = require('../models');

// controller untuk login method GET untuk user
function loginGet(req, res) {
    res.status(200)
    return res.render('login.ejs');
}

// controller untuk login 
function loginPost(req, res) {

    const inputEmail = req.body.email;
    const inputPassword = req.body.password;

    const findDataIndex = usersData.findIndex((element) => element.email == inputEmail);

    if (findDataIndex == -1) { // apabila hasil findIndex adalah -1, maka data sesuai syarat tidak ditemukan
        res.status(403).json({ message: 'Email is not registered' });
    } else { // apabila data ditemukan dan--
            if (usersData[findDataIndex].password != inputPassword) { // password salah
                res.status(403).json({ message: 'Wrong Password' });
            } else { // password sesuai
                res.status(200).json({ message: 'Login successful' });
            };            
    };
};

// controller untuk login method GET untuk admin
function loginGetAdmin(req, res) {
    res.status(200)
    return res.render('login_admin.ejs');
}

// controller untuk login admin
function loginPostAdmin(req, res) {

    const inputEmail = req.body.email;
    const inputPassword = req.body.password;

    const findDataIndex = adminUser.findIndex((element) => element.email == inputEmail);

    if (findDataIndex == -1) { // apabila hasil findIndex adalah -1, maka data sesuai syarat tidak ditemukan
        res.status(403).json({ message: 'Email is not registered' });
    } else { // apabila data ditemukan dan--
            if (adminUser[findDataIndex].password != inputPassword) { // password salah
                res.status(403).json({ message: 'Wrong Password' });
            } else { // password sesuai
                res.status(200).json({ message: 'Login successful' });
            };            
    };
};

// export controllers
module.exports = {
    loginGet, loginPost, loginGetAdmin, loginPostAdmin
};