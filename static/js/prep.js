var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: True,
    }
});

var User = mongoose.model('User', UserSchema);
module.exports = User;

