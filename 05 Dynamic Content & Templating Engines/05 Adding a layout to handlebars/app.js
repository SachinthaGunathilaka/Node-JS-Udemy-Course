const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars'); // import handlebars(installed module)

const app = express();
// handlebars is not a built in template engine. Need to explicitly set it.
app.engine(
  'hbs', // name ()
    // engine
  expressHbs({
      // some attributes
    layoutsDir: 'views/layouts/',
    defaultLayout: 'main-layout',
    extname: 'hbs' // extension name
  })
);
app.set('view engine', 'hbs'); // set hbs as new engine
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(3000);
