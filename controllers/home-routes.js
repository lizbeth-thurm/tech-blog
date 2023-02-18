// Navigates pages
const express = require("express");
const router = express.Router();
const { Post } = require("../models");

//home page
router.get("/", function (req, res) {
  Post.findAll()
    .then((postData) => {
      let posts = postData.map((m) => m.get({ plain: true }));
      //       res.render("homepage", { posts, logged_in:req.session.logged_in })
      res.render("homepage", { posts, logged_in: true });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

//login page
router.get("/login", (req, res) => {
  res.render("login");
});

//dashboard
router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

// signup page
router.get("/signup", (req, res) => {
  res.render("signup");
});

module.exports = router;
