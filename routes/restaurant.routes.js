const Router = require('express');
const Restaurants = require('../models/restaurant');
const router = new Router();


router.get('/list', async (req, res) => {
    try {
        const item = await Restaurants.find(req.body);
        return res.json(item)
    } catch (e) {
        console.log(e);
        res.send({message: "Server error"})
    }
})

module.exports = router;