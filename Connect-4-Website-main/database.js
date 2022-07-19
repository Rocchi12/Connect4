const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userinfoSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    redgameswon: {
        type: Number,
        required: true
    },
    bluegameswon: {
        type: Number,
        required: true
    },
    gamesplayed: {
        type: Number,
        required: true
    },
    
}, { timestamps: true });

const Userinfo = mongoose.model('Userinfo', userinfoSchema);
module.exports = Userinfo;