const router = require('express').Router();
const userController = require('../controllers/userController');

router.get('/', async(req, res) => {
    try {
        res.json(await userController.findAllUsers())
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

router.post('/', async(req, res) => {
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

module.exports = router;