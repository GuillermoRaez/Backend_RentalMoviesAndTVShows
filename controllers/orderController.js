const { Order }= require("../models");

class Orderissue {

    async findAllOrders(){
        return Order.findAll();
    }

    async findOrderById(bodyData) {
        return Order.findAll(
            {where: {userId: bodyData.userId}}
          );
    }

    async createOrder(body) {
        return Order.create(body);
    }

    async modifyOrder(bodyData) {
        return Order.update(
            //Datos que cambiamos..
            {movieId: bodyData.movieId},
            //Donde...
            {where: {id: bodyData.id}}
        );
    }

    async deleteOrder(bodyData) {
        return Order.destroy({where: {id: bodyData.id}});
    }
}

let orderController = new Orderissue();
module.exports = orderController; 