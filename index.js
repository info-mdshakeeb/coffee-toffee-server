const express = require('express');
const app = express();
require('dotenv').config();;
const cors = require('cors');
const { connectToServer } = require('./utilities/mongodb');
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


