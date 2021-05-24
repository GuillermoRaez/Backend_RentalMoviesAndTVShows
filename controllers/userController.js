const { User } = require("../models");

class Client {

    async findAllUsers(){
        return User.findAll();
    }

    async signUpUser(client){
        
        return User.create(client);
    }

}


let userController = new Client();
module.exports = userController;