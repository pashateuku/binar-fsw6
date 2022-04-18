// controller untuk render page index.ejs
function homePage(req, res) {
    res.status(200);
    return res.render('index.ejs');
};

// export controller
module.exports = homePage;