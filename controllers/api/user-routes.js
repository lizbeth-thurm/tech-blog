// routes for login information and signup
const router = require('express').Router();

const User = require('../../models/User');

// login page
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: { email: req.body.email }
        });

        if (!userData) {
            res.status(400).json(
                { message: 'Wrong email or password, please try again' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json(
                { message: 'Wrong email or password, please try again' });
            return;
        }

        req.session.save(() => {
            {
                req.session.user_id = userData.id;
                req.session.logged_in = true;

                res.status(200).json({ user: userData, message: 'Login successful!' });
            }
        });

    }
    catch (err) {
        res.status(500).json(err);
        console.error(err);
    }
});