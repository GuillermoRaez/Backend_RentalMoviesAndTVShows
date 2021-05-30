const router = require('express').Router();
const userController = require('../controllers/userController');
const authenticate = require('../middleware/authenticate');
const admin = require('../middleware/admin')

// Endpoint de Perfil (R) -> GET
router.post('/', admin , async(req, res) => {
    try {
        res.json(await userController.findAllUsers())
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

// Endpoint de Alta de Usuario (C) -> POST
router.post('/create', async(req, res) => {
    try {
        const id = await userController.signUpUser(req.body);
        const status = 'success';
        res.json({ status, id });
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
})

// Endpoint de Modificación de datos (U) -> UPDATE
router.put('/', authenticate, async (req,res) => {
    try{
        const bodyData = req.body;
        res.json(await userController.modifyUser(bodyData)); 
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
})

// Endpoint de Baja de Usuario (D) -> Delete
router.delete('/', authenticate, async (req, res) => {
    try {
        const bodyData = req.body;
        res.json(await userController.deleteUser(bodyData))
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
})

module.exports = router;