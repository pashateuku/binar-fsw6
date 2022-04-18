// import json data user statis
const usersData = require('../db/users.json')

// controller untuk show all data user statis 
function users(req, res) {
    res.status(200);
    return res.json(usersData);
};

// controller untuk show data user statis hanya dengan id tertentu
function usersById(req,res) {

        const id = req.params.id;
        console.log(id);

        // membaca parameter id pada path
        const result = usersData.find((item) => {
            return item.id == id;
        });
    
        if(!result) { // perintah ketika TIDAK DITEMUKAN-nya data sesuai dengan parameter id pada path tercantum
            return res.status(404).json({
            message: 'User not found'
            });
        } else { // perintah ketika DITEMUKAN-nya data sesuai dengan parameter id pada path tercantum
            return res.status(200).json({
                message: 'User found',
                data: result,
                });
            };
         };


// export controllers
module.exports = {
    users, usersById
};