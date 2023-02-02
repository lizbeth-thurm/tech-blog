// routes for adding and retrieving post data
const router = require('express').Router();

const Post = require('../../models/Posts');

// create post
router.post('/dashboard', async (req, res) => {
    try {
        const postData = await Post.create({
            ...req.body,
    user_id: req.session.user_id,
        });
        res.status(200).json(newPost);

    } catch (err) {
        res.status(400).json(err);
    }
});

// delete post
router.delete('/:id', async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!postData) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }

        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;