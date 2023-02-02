const { User } = require('../models');

const seedUser = () => User.bulkCreate([
    {
        "email": "kirby@dreamworld.com",
        "password": "password123"
    },

    {
        "email": "mario@plumbers.org",
        "password": "password123"
    },

  {
      "email": "snake@metalgear.gov",
      "password": "password123"
  }
]);

module.exports = seedUser;

