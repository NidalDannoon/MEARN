const { Product } = require('../models/product.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
    // The method below is new
module.exports.createProduct = (request, response) => {
    const { productName, productDescription, productPrice } = request.body;
    Product.create({
        productName,
        productDescription,
        productPrice
    })
        .then(product => response.json(product))
        .catch(err => response.json(err));
}
