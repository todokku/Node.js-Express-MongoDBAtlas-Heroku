const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
require("dotenv").config()
const connectDB = require('./config/db')

const postRoute = require('./routes/posts')
const productRoute = require('./routes/products')
const orderRoute = require('./routes/orders')
const couponRoute = require('./routes/coupons')
const user = require("./routes/user"); 

connectDB()
const app = express();
app.use(
    cors({
        credentials: true,
        origin: true
    })
);
app.options('*', cors());

app.get('/', (req, res) => res.send('Working!!!'));

app.listen(process.env.PORT || 3000, function() {
    console.log('server running on port 3000', '');
});

app.use(bodyParser.json())



app.use('/posts',postRoute)
app.use('/products',productRoute)
app.use('/orders',orderRoute)
app.use('/coupons',couponRoute)
app.use("/user", user);