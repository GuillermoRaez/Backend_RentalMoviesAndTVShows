const { User } = require("../models");
const bcrypt = require('bcrypt');

class Client {

    async findAllUsers(){
        return User.findAll();
    }

    async signUpUser(body){
    
        // El siguiente código encripta la contraseña
        let password = body.password;
        let passwordHashed = bcrypt.hashSync(password, 10);
        body.password = passwordHashed;
        return User.create(body);
    }

    async userEmail(email){

        return User.findOne({
            where: {email}
        });
    }

    async modifyUser(bodyData){
        return User.update(
            //Datos que cambiamos..
            {email: bodyData.email, adress: bodyData.adress},
            //Donde...
            {where: {id: bodyData.id}}
        )
    }

    async deleteUser(bodyData){
        return User.destroy({where: {id: bodyData.id}});
    }
}

let userController = new Client();
module.exports = userController; 