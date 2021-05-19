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

router.get('/:id', async (req,res) => {
    try {
        let id = req.params.id;
        res.json(await moviesController.findMoviesById(id));
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

router.get('/search/:titulo', async (req,res) => {
    try {
        let titulo = req.params.titulo;
        res.json(await moviesController.findMoviesByTitle(titulo));
    }catch (err) {
        return res.status(500).json({
            message:err.message
        });
    }
});

module.exports = router;