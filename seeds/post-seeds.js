const {
    Post
} = require('../models');

const postdata = [{
        title: 'Post example 1',
        post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
        user_id: 3
    },
    {
        title: 'Post example 2',
        post_url: 'https://nasa.gov/donec.json',
        user_id: 2
    },
    {
        title: 'Post example 2',
        post_url: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
        user_id: 1
    },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;