const router = require('express').Router();
const orderController = require('./controllers/orderRouter');
const authenticate = require('../middleware/authenticate');

//CRUD

//Still needs some work

router.get('./:id', authenticate, async (req, res) => {
    try {
        let id = req.params.id;
        res.json(await orderController.findOrderById(id))
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

router.post('./', authenticate, async (req,res) => {
    try {
        const body = req.body;
        res.json(await orderController.createOrder(body))
        } catch (err) {return res.status(500).json({
            message: err.message
        });
    }
});


router.put('./', authenticate, async (req,res) => {
    try {
        const id = req.body;
        res.json(await orderController.modifyOrder(id));
    } catch (err) {
        return res.status(500).json({
        message: err.message
    });
}
});

router.delete('./', authenticate, async (req,res) => {
    try {
        res.json(await orderController.deleteOrder())
    }catch (err) {
        return res.status(500).json({
        message: err.message
    });
}
});

module.exports = router;