const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const router = require('./routes/fragRouter');
const productRouter = require('./routes/productRouter');

const connectDB = require('./config/db');

require('dotenv').config();

const startServer = async () => {
    try {
        await connectDB();
        
        const app = express();

        app.use(cors());
        app.use(express.json());

        app.use('/api/frag', router);
        app.use('/api/products', productRouter);

        let PORT = process.env.PORT || 3000;

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Server startup error:', error);
        process.exit(1);
    }
};

startServer();