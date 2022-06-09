const mongoose = require('mongoose');
const { Schema } = mongoose;

const PostSchema = ({
    title: {type: String, required: true, maxlength: 20, minlength: 1},
    text: {type: String, required: true, maxlength: 200, minlength: 1},
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    timestamp: { type: Date, default: Date.now },
    published: {type: Boolean, required: false}
})


module.exports = mongoose.model('Post', PostSchema);