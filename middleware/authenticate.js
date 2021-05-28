const jwt = require('jsonwebtoken');
const secret = "Guillermo & Adriana Rental Movies";

//COMPROBAR EL TOKEN

const authenticate = (req,res,next) => {

    try {

        if(!req.headers.authorization){
            return "no tenías token "; 
        }

        let token = req.headers.authorization.split(' ')[1];

        let auth = jwt.verify(token,secret);

        if(auth.userId != req.body.userId)  {
            throw new Error ("No tienes permiso para realizar esta acción");
        }

        return next();

    } catch(error) {
        res.status(500).json({
            message: error.message
        });
    }
    
}

module.exports = authenticate;