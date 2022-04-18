const notFound =  (req, res, next) => {
    return res.status(404).json({ // pemberian status 404 (problem pada client side)
        message:'Not found' 
    }); // memberikan data json berupa not found  
};

// export local module
module.exports = notFound