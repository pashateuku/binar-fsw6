// import json data user pada tabel user_game di database
const { user_game, user_game_biodata } = require('../models');

// GET to show dashboard page
function dashboard(req, res) {
  return res.status(200).render('dashboard/dashboard.ejs');
}

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

// GET to show create user biodata form in dashboard
async function createFormBiodata(req, res) {
  
  const userData = await user_game.findOne({
    where: {
      id: req.params.id,
    },
  });

    return res.status(200).render('dashboard/dashboard_create_bio.ejs', { 
      userData
    })    
}

// GET to show create data form in dashboard (with one biodata)
function createForm(req, res) {
  return res.status(200).render('dashboard/dashboard_create.ejs');
}

// POST to create user biodata in one of game user
function createUserBiodata(req,res) {
  user_game_biodata.create({
      fullname: req.body.fullname,
      phone: req.body.phone,
      id_foreign: req.params.id  
    })
    .then(()=> {
      res.send('biodata berhasil dibuat melalui DASH')
    })
    .catch((err) => {
      res.send(err)
      // console.log(err)
      })
    }

// POST to create user (with one biodata)
function createUser(req,res) {
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
      res.send('akun berhasil dibuat melalui DASH')
    })
    .catch(() => {
      res.send('akun GAGAL dibuat melalui DASH')
      })
    }

// DELETE user_game_biodata
function deleteUserBiodata(req, res) {
    user_game_biodata.destroy({
        where: { id: req.params.id }
        })
        .then(()=> {
        res.send('Biodata berhasil dihapus')
        })
    }

// DELETE user_game sekaligus dengan biodata nya (belum termasuk history)
function deleteUser(req, res) {
    
    user_game_biodata.destroy({
        where: { id_foreign: req.params.id }
        })
    
    user_game.destroy({
        where: { id: req.params.id }
        })
    
    return res.send('User beserta semua Biodata nya berhasil dihapus')
    }

// UPDATE user_game
// menampilkan form update
function updateForm(req, res) {
  user_game.findOne({
    where: { id: req.params.id }
  })
    .then(user_game => {
    res.render('dashboard/dashboard_update', { 
      user_game
    })
    })
  }

// POST untuk perbarui user_game by id
function updateUser(req, res) {
  user_game.update({
    email: req.body.email,
    password: req.body.password
  }, {
    where: { id: req.params.id }
  })
    .then(()=> {
      res.send('game_user berhasil diupdate')
    })
 }


// UPDATE user_game_biodata
function updateFormBiodata(req, res) {
  user_game_biodata.findOne({
    where: { id: req.params.id }
  })
    .then(user_game_biodata => {
    res.render('dashboard/dashboard_update_bio', { 
      user_game_biodata
    })
    })
  }

// POST untuk perbarui user_game by id
function updateUserBiodata(req, res) {
  user_game_biodata.update({
    fullname: req.body.fullname,
    phone: req.body.phone
  }, {
    where: { id: req.params.id }
  })
    .then(()=> {
      res.send('user_game_biodata berhasil diupdate')
    })
 }

// export controllers
module.exports = {
    dashboard,

    dashboardAllUser, 
    dashboardUserBiodata,
    
    createForm,
    createUser,
    createFormBiodata,
    createUserBiodata,
    
    deleteUserBiodata, 
    deleteUser, 
    
    updateForm, 
    updateUser,
    updateFormBiodata,
    updateUserBiodata,
};