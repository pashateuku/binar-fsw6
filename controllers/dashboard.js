// import json data user pada tabel user_game di database
const { user_game, user_game_biodata } = require('../models');

// GET all user in user_game and show it to /dashboard/users
function dashboardAllUser(req, res) {
    user_game.findAll()
      .then(user_game => {
        res.render('dashboard/dashboard_users', {
          user_game
        })
      })
   }

// GET user by id in user_game, with all its biodata, and show it to /dashboard/users/id
async function dashboardUserBiodata(req, res) {

    const userData = await user_game.findOne({
        where: {
          id: req.params.id,
        },
      });

    const userBiodata = await user_game_biodata.findAll({
        where: {
            id_foreign: req.params.id,
          },
    });

    return res.render('dashboard/dashboard_users_id', {
          userData, userBiodata
        })
   }

// DELETE user_game_biodata
function deleteUserBiodata(req, res) {
  user_game_biodata.destroy({
      where: { id: req.params.id }
      })
      .then(()=> {
      res.send('Artikel berhasil dihapus')
      })
  }

// DELETE user_game sekaligus dengan biodata nya (belum termasuk history)

// UPDATE user_game

// UPDATE user_game_biodata

// export controllers
module.exports = {
    dashboardAllUser, dashboardUserBiodata, deleteUserBiodata
};