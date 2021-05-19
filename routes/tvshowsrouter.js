const router = require('express').Router();

const tvshowsController = require('../controllers/tvshowsController');

// C R U D

// GET

router.get('/toprated', async (req, res) => {
    try {
        res.json(await tvshowsController.findTopRated())
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

router.get('/search/:name', async (req,res) => {
    try {
        let name= req.params.name;
        res.json(await tvshowsController.searchByTitle(name));
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

router.get('/:id', async (req,res) => {
    try {
        let id = req.params.id;
        res.json(await tvshowsController.searchById(id));
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

module.exports = router; 