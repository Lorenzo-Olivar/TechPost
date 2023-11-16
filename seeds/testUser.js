const { User } = require('../models');

const userdata = [
    {
        username: "Tester",
        password: "Tester1234",
    }
]

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;