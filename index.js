const express = require('express');
const app = express();
var cors = require('cors');
const mongoose = require("mongoose")
const postRoute = require('./routes/posts')
const productRoute = require('./routes/products')
const bodyParser = require('body-parser')

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

require("dotenv/config")

const db = process.env.MONGODB_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
connectDB()
app.use('/posts',postRoute)
app.use('/products',productRoute)