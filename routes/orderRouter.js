const router = require('express').Router();
const orderController = require('../controllers/orderController');
const authenticate = require('../middleware/authenticate');
const admin = require('../middleware/admin')

//CRUD

// Endpoint de Perfil (R) -> GET
router.get('/', admin,  async(req, res) => {
    try {
        res.json(await orderController.findAllOrders())
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

router.get('/findbyid', authenticate, async (req, res) => {
    try {
        let id = req.body;
        res.json(await orderController.findOrderById(id))
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

router.post('/', authenticate, async (req,res) => {
    try {
        const body = req.body;
        res.json(await orderController.createOrder(body))
        } catch (err) {return res.status(500).json({
            message: err.message
        });
    }
});


router.put('/', authenticate, async (req,res) => {
    try {
        const bodyData = req.body;
        res.json(await orderController.modifyOrder(bodyData));
    } catch (err) {
        return res.status(500).json({
        message: err.message
    });
}
});

router.delete('/', authenticate, async (req,res) => {
    try {
        const bodyData = req.body;
        res.json(await orderController.deleteOrder(bodyData))
    }catch (err) {
        return res.status(500).json({
        message: err.message
    });
}
});

module.exports = router;