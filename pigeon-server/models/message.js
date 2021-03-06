const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var messageSchema = new Schema({
    message:  {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

var Messages = mongoose.model('Message', messageSchema);

module.exports = Messages;
