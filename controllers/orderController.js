const { Order }= require("../models");
const bcrypt = require('bcrypt');

class Orderissue {

    async findOrderById() {
        return Order.findById(id);
    }

    async createOrder(body) {
        return Order.create(body);
    }

// Needs to be finished and polished

    async modifyOrder() {
        return Order.modify();
    }

    async deleteOrder() {
        return Order.destroy();
    }
}

let orderController = new Orderissue();
module.exports = orderController; 