const configureExpress = require('./config/express');
const app = configureExpress();

module.exports = app;

let productRouter = require('../routes/product');
app.use('/product', productRouter);