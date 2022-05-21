// import json data user statis
const usersData = require('../db/users.json');
const { user_game, user_game_biodata } = require('../models');

// controller untuk login method GET
function registerGet(req, res) {
    res.status(200)
    // .json({ message: 'login page now on development, please use POSTMAN with POST method for login' }); // login message bahwa login page belum selesai
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
      .catch(err => {
        res.status(422).json("Can't create article", err)
      })    
}

// // controller untuk register
// function registerPost(req,res) {
//     user_game.create({
//         email: req.body.email,
//         password: req.body.password
//       })
//       .then(()=> {
//         res.send('Akun berhasil dibuat')
//       })    
// }

// controller untuk register
// function registerPost(req,res) {
//     user_game_biodata.create({
//         phone: req.body.phone,
//         fullname: req.body.fullname,
//         id_foreign: req.body.password
//       })
//       .then(()=> {
//         res.send('Akun berhasil dibuat')
//       })    
// }

// controller untuk register 
// function loginPost(req, res) {

//     const inputEmail = req.body.email;
//     const inputPassword = req.body.password;

//     const findDataIndex = usersData.findIndex((element) => element.email == inputEmail);

//     if (findDataIndex == -1) { // apabila hasil findIndex adalah -1, maka data sesuai syarat tidak ditemukan
//         res.status(403).json({ message: 'Email is not registered' });
//     } else { // apabila data ditemukan dan--
//             if (usersData[findDataIndex].password != inputPassword) { // password salah
//                 res.status(403).json({ message: 'Wrong Password' });
//             } else { // password sesuai
//                 res.status(200).json({ message: 'Login successful' });
//             };            
//     };
// };

// export controllers
module.exports = {
    registerGet, registerPost
};