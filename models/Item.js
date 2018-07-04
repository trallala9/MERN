const mongoose = require('mongoose');
//cerate Schema and connect to mongoose
const Schema = mongoose.Schema;

//create Schema
const ItemSchema = new Schema({
    name: {
        type: String,
        reguired: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
//the model need to know what the Scheema is
module.exports = Item = mongoose.model('item', ItemSchema);
