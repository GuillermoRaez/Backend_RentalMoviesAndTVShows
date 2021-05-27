const jwt = require('jsonwebtoken');
const secret = "Guillermo & Adriana Rental Movies";

const admin = (req,res,next) => {

    try {

        if(!req.headers.authorization){
            return "You don't have any token.";
            
        }

        let token = req.headers.authorization.split(' ')[1];

        let auth = jwt.verify(token,secret);

        if(auth.isAdmin == false){
            throw new Error("You don't have authorization.");
        }

        return next();

    } catch(error) {
        res.status(500).json({
            message: error.message
        });
    }

}

module.exports = admin;