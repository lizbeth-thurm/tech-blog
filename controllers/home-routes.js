// Navigates pages
const express = require("express");
const router = express.Router();
const { Post } = require("../models"); 

//home page
router.get("/", function (req, res) {
    Post.findAll().then((postData) => {
        let posts = postData.map((m) => m.get({ plain: true }));
        res.render("homepage", { posts })
    }).catch((err) => {
        res.status(500).json({ "error": err });
    })
});

//login page
router.get('/login', (req, res) => {
    res.render("login")
})

//dashboard
router.get('/dashboard', (req, res) => {
    res.render("dashboard")
})

module.exports = router;