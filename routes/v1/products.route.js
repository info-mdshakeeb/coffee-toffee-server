const express = require('express');
const productsController = require('../../controller/product.controller');
const Router = express.Router();

Router.route('/')
    .get(productsController.products)


module.exports = Router;