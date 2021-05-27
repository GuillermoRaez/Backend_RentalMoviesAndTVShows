const { Order }= require("../models");
const bcrypt = require('bcrypt');

class Orderissue {

    async findOrderById() {
        return Order.findById(id);
    }

    async createOrder(body) {
        return Order.create(body);
    }

    async modifyOrder(bodyData) {
        return Order.modify(
            //Datos que cambiamos..
            {movieId: bodyData.movieId},
            //Donde...
            {where: {id: bodyData.id}}
        );
    }

    async deleteOrder(id) {
        return Order.destroy({where: {id:id}});
    }
}

let orderController = new Orderissue();
module.exports = orderController; 