// controller untuk render page game.ejs
function gamePage (req, res) {
    res.status(200);
    return res.render('game.ejs');
};

// export controller
module.exports = gamePage;