// Connecting post-routes api and user-routes api

const router = require('express').Router();

const postRoutes = require('./post-routes.js');
const userRoutes = require('./user-routes.js');

router.use('/post', postRoutes);
router.use('/user', userRoutes);

module.exports = router;