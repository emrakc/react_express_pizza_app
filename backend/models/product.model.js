const mongoose = require('mongoose');
const schema = mongoose.Schema;

const productSchema = new schema({
    name: String,
    image: String,
    miniImage: String,
    ingredients: String,
    price: Number,
    size: String

})
productSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});
const Product = mongoose.model('product', productSchema, "product");
module.exports = Product;