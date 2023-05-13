const express = require('express');
const app = express();
require('dotenv').config();;
const cors = require('cors');
const { connectToServer } = require('./utilities/mongodb');
const productsApi = require('./routes/v1/products.route');
const port = process.env.PORT;
app.use(express.json());
app.use(cors());

// basic route
app.get("/", (req, res) => {
    res.send("Welcome to the server");
});
//database connect :
connectToServer((err) => {
    if (!err) {
        app.listen(port, () => {
            console.log(`Server is running on port: ${port}`);
        });
    } else { console.log(err) }
});

// routes :
app.use('/api/v1/products', productsApi)
