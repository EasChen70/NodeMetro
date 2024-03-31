const express = require('express');
const path = require('path');
const handlebars = require('handlebars');
const exphbs = require('express-handlebars');

const app = express();
const port = 1337;

const dir = path.join(__dirname, 'public');

//creating directly on express handlebar rather than a instantiation of it...
const hbs = exphbs.create({
    handlebars: handlebars,
    defaultLayout: 'main'
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(dir));

//instead of switch, using app.get
app.get('/index', function(req, res){
    res.render('index', {title: 'Home'});
});
app.get('/about', function(req, res){
    res.render('about', {title: 'About'});
});
app.get('/contact', function(req, res){
    res.render('contact', {title: 'Contact Us'});
});
app.get('/gallery', function(req, res){
    res.render('gallery', {title: 'Gallery'});
});
app.get('/location', function(req, res){
    res.render('location', {title: 'Location'});
});
app.get('/manicure', function(req, res){
    res.render('manicure', {title: 'Manicure'});
});
app.get('/pedicure', function(req, res){
    res.render('pedicure', {title: 'pedicure'});
});
app.get('/spacombo', function(req, res){
    res.render('spacombo', {title: 'Spa Combo'});
});
app.get('/services', function(req, res){
    res.render('services', {title: 'Services'});
});


// Default route
app.use((req, res) => {
    res.status(404).render('404', { title: 'Page Not Found' });
});

const server = app.listen(port, function(){
    console.log(`Server running at http://localhost:${port}/`);
});


























