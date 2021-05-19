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

router.get('/ontheair', async (req, res) => {
    try {
        res.json(await tvshowsController.onTheAir())
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

router.get('/search/:title', async (req,res) => {
    try {
        let title= req.params.title;
        res.json(await tvshowsController.searchByTitle(title));
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

router.get('/theatre_or_cinema/:id', async (req,res) => {
    try {
        let id= req.params.id;
        res.json(await tvshowsController.theatersOrCinema(id));
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

router.get('/searchid/:id', async (req,res) => {
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