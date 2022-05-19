// import json data user statis
const usersData = require('../db/users.json');

// controller untuk login method GET
function registerGet(req, res) {
    res.status(200)
    // .json({ message: 'login page now on development, please use POSTMAN with POST method for login' }); // login message bahwa login page belum selesai
    return res.render('register.ejs');
}

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
    registerGet
};