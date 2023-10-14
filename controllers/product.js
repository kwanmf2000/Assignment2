//createing new product
let ProductModel = require('../models/product');
console.log(ProductModel);
exports.create = async function(req, res, next) {
try {
const newProduct = new ProductModel(req.body);
let result = await ProductModel.create(newProduct);
res.json(
{
success: true,
message: "Product created sucessfully."
}
);
} catch (error) {
next(error);
}
};

//find all products
exports.list = async function (req, res, next) {
    try {
    let list = await ProductModel.find({});
    res.json(list);
    } catch (error) {
    next(error);
    }
}

//find product by id
exports.productByID = async function(req, res, next) {
    try {
    let productId = req.params.productId;
    req.product = await ProductModel.findOne({ _id: productId });
    next();
    } catch (error) {
    console.log(error);
    next(error);
    }
};
    exports.read = function(req, res) {
    res.json(req.product);
};

//update current product

exports.update = async (req, res, next) => {
    try {
    let productId = req.params.productId;
    let updatedProduct = ProductModel(req.body);
    updatedProduct._id = productId;
    let result = await ProductModel.updateOne({ _id: productId },
    updatedProduct);
    if (result.modifiedCount > 0) {
    res.json(
    {
    success: true,
    message: "Product updated sucessfully."
    }
    );
    }
    else {
    // Express will catch this on its own.
    throw new Error('Product not updated. Are you sure it exists?')
    }
    } catch (error) {
    next(error)
    }
}

//remove existing porduct by id
module.exports.remove = async (req, res, next) => {
    try {
    let id = req.params.productId;
    let result = await ProductModel.deleteOne({ _id: id });
    console.log("====> Result: ", result);
    if (result.deletedCount > 0) {
    res.json(
    {
    success: true,
    message: "Product deleted sucessfully."
    }
    )
    }
    else {
    // Express will catch this on its own.
    throw new Error('Product not deleted. Are you sure it exists?')
    }
    } catch (error) {
    console.log(error);
    next(error);
    }
}
