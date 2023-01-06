const mongoose = require('mongoose');


const Post = mongoose.model('Post',{
    title:{type:String},
    content:{type:String},
    username:{type:String}
});

module.exports = Post;