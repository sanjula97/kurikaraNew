const path = require('path')
const express = require('express')
const { config, engine } = require('express-edge');
const mongoose = require('mongoose');
const navigatePages = require('./routes/Get/navigatePages')

const mongoURL = "mongodb+srv://sanjula:sanjula@cluster0-dugye.azure.mongodb.net/test?retryWrites=true&w=majority";

const app = express()

//connect to mongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(mongoURL , {
             useNewUrlParser: true,
             useUnifiedTopology: true 
            });
        console.log("Data base connected");
        
    } catch (error) {
        console.log(error.messaage);
    }
}
connectDB();

// Set view engin
app.use(engine);
app.set('views', `${__dirname}/views`);

// Middle ware
app.use(express.static('public'))

// Port
const PORT = process.env.PORT || 5000;

// Routes
app.use(navigatePages)


app.listen(PORT , () => {
    console.log(`APP is listning on port ${PORT}`)
})