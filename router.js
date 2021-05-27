const router = require('express').Router();

const moviesRouter = require('./routes/moviesRouter');
const tvshowsRouter = require('./routes/tvshowsRouter');
const userRouter = require('./routes/userRouter');
const loginRouter = require('./routes/loginRouter');
const orderRouter = require('./routes/orderRouter');

router.use('/users', userRouter);
router.use('/orders', orderRouter);
router.use('/movies', moviesRouter);
router.use('/tvshows', tvshowsRouter);
router.use('/login', loginRouter);

module.exports = router;

