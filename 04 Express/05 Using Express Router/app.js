const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// import user defined modules
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

// Pass imported functions to app.use
app.use(adminRoutes);
app.use(shopRoutes);

// If incoming URL is not matched with any of the above URL
app.use((req, res, next) =>{
    // can set status, header before send method
    res.status(404).send("<h1>Page Not Found</h1>");
})

app.listen(3000);
