const {Schema, model} = require('mongoose');

const Order = new Schema({
    name: {type: String},
    phone: {type: String},
    address: {type: String},
    email: {type: String},
    restaurant: {type: String},
    order: {type: Object},
    total: {type: Number}
})

module.exports = model('Order', Order)