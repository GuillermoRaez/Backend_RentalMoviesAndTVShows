const router = require('express').Router();
const moviesController = require("../controllers/moviesController");

//CRUD

//GET
router.get('/toprated', async (req,res) => {
    try{
        res.json(await moviesController.findTopRated());
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

router.get('/searchid/:id', async (req,res) => {
    try {
        let id = req.params.id;
        res.json(await moviesController.findMoviesById(id));
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

router.get('/search/:title', async (req,res) => {
    try {
        let title = req.params.title;
        res.json(await moviesController.findMoviesByTitle(title));
    }catch (err) {
        return res.status(500).json({
            message:err.message
        });
    }
});

router.get('/genre/:name', async (req,res) => {
    try {
        let name = req.params.name;
        res.json(await moviesController.Genre(name));
        }catch (err) {
        return res.status(500).json({
            message:err.message
        });
    }
});

router.get('/actors/:name', async (req,res) => {
    try {
        let name = req.params.name;
        res.json(await moviesController.findByActor(name));
        }catch (err) {
        return res.status(500).json({
            message:err.message
        });
    }
});




module.exports = router;