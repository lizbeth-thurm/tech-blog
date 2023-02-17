const { Post } = require("../models");

const seedPost = () =>
  Post.bulkCreate([
    {
      title: "Turtles",
      text: "Hey does anybody else like turtles?",
      user_id: 1,
    },
    {
      title: "Lizards",
      text: "Lizards are my favorite reptiles",
      user_id: 2,
    },
    {
      title: "Birds",
      text: "Cladistically, what's the difference between birds and reptiles?",
      user_id: 3,
    },
  ]);

module.exports = seedPost;
