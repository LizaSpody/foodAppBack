const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || '5000';
const corsMiddleware = require('./middleware/cors.middleware');
const routerRest = require('./routes/restaurant.routes');
const routerOrder = require('./routes/order.routes');

app.use(express.json());
app.use(corsMiddleware);
app.use('/api', routerRest);
app.use('/api', routerOrder);

const start = async () => {
    try {
        mongoose.connect('mongodb+srv://admin:jora15dasha15@cluster0.pzbov7c.mongodb.net/?retryWrites=true&w=majority')

        app.listen(PORT, ()=>{
            console.log(PORT)
        })
    } catch (e) {
        console.log('error')
    }
}

start()