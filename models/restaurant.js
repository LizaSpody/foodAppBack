const {Schema, model} = require('mongoose');

const Restaurants = new Schema({
    name: {type: String}
})

module.exports = model('Restaurants', Restaurants)