const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const productRouter = require('./routes/product/index.js') 

require('dotenv').config();
 
const app = express();
const port = process.env.PORT || 5000;
 

app.use(cors());
app.use(express.json());

 
const uri = process.env.DB_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("mongoDb connection successfuly")
})

app.use('/product', productRouter)

app.listen(port, () => {
    console.log(`server is running on port: ${port}`)
})
