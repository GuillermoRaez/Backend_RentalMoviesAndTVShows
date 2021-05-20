const router = require('express').Router();


//Verificar siempre que esta en comentario cuando el proyecto no esta completo.
const moviesRouter = require('./routes/moviesRouter');
const tvshowsRouter = require('./routes/tvshowsRouter');

router.use('/movies', moviesRouter);
router.use('/tvshows', tvshowsRouter);

module.exports = router;

