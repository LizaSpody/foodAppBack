const Router = require('express');
const Order = require('../models/order');
const { body, validationResult} = require('express-validator')
const router = new Router();


router.post('/order', [
    body ('name', 'complete name').isLength({min: 2}),
    body ('phone', 'complete phone').isLength({min: 4}),
    body ('address', 'complete address').isLength({min: 4}),
    body ('email', 'incorrect email').isEmail()
],
    async (req, res) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.json({message: "Uncorrect request", errors})
        }

        const {name, phone, address, email, restaurant, order, total} = req.body;

        const item = new Order({name, phone, address, email, restaurant, order, total});
        await item.save();

        if(item) {
            return res.json({'message': "order sent"})
        }

    } catch (e) {
        console.log(e);
        res.send({message: "Server error"})
    }
})

module.exports = router;