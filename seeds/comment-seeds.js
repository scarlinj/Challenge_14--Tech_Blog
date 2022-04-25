const {
    Comment
} = require('../models');

const commentdata = [{
        comment_text: 'This is a comment.',
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: 'Check out my comment!',
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: 'This is another comment.',
        user_id: 3,
        post_id: 1
    },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;