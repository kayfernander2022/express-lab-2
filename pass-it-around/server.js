const express = require("express");
const beerController =require('./controllers/index');
const app = express();
const port = 3030; //this can only be envoked once! use const router = express.Router(); in my controllers folder index.js


app.use(express.static(__dirname + '/public'))//attaching the css static files to our templates. Our link to css in all.ejs/html file will not work with express

app.use(beerController);//middleware to use the routes in controller folder


app.listen(port, () => {
    console.log(`listening on port ${port}`);
});







