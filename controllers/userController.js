const { User } = require("../models");

class Client {

    async findAllUsers(){
        return User.findAll();
    }

    async signUpUser(client){
        
        return User.create(client);
    }

    async modifyUser(bodyData){
        return User.update(
            //Datos que cambiamos..
            {email: bodyData.email, adress: bodyData.adress},
            //Donde...
            {where: {id: bodyData.id}}
        )
    }


    async deleteUser(id){

        return User.destroy({where: {id:id}});
    }
}



let userController = new Client();
module.exports = userController; 