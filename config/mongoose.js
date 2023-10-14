const config = require('./env/development');
const mongoose = require('mongoose');

module.exports = function() {
    const db = mongoose.connect(config.db);
    mongoose.connection.on('connected', () => {
        console.log('Connected to MongoDB');
    });
    
    mongoose.connection.on('error', (err) => {
        console.error('MongoDB connection error: ' + err);
    });
    
    mongoose.connection.on('disconnected', () => {
        console.log('MongoDB connection disconnected');
    });

return db;
};