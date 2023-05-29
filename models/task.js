const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name : {
        type:String,
        required:[true,"please provide name"],
        trim:true,
        max:[20,"not accepting longer string"],
    },
    completed:{
        type:Boolean,
        default:false,
    }
})

module.exports = mongoose.model('tasks',TaskSchema);
