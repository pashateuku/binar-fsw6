const error = (err, req, res, next) => {
    console.log(err.toString()); // menyaring info data error sehingga hanya menampilkan sumber masalah 
    return res.status(500).json({ // memberikan http status 500 (problem pada server side)
        message: 'An error occured'
    });
};

// export local module
module.exports = error;