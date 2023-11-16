const { Post } = require('../models');

const postdata = [
    {
        title: 'Test',
        content: 'This is a test',
        user_id: 1,
    }
]

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;