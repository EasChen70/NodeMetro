const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 1337;

const dir = path.join(__dirname, 'public');

app.use(express.static(dir));

//same servestatic function as node.js
function serveStaticFile(res, filePath, contentType, responseCode = 200) {
    const file = path.join(dir, filePath);
    console.log('Attempting File Path:', file);
    fs.readFile(file, (err, data) => {
        if (err) {
            console.log(`Failed to read file: ${file}`);
            console.error(err);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
        } else {
            res.writeHead(responseCode, { 'Content-Type': contentType });
            res.end(data);
        }
    });
}

//instead of switch, using app.get
app.get('/index', function(req, res){
    serveStaticFile(res, '/index.html', 'text/html');
});
app.get('/about', function(req, res){
    serveStaticFile(res, '/about.html', 'text/html');
});
app.get('/contact', function(req, res){
    serveStaticFile(res, '/contact.html', 'text/html');
});
app.get('/gallery', function(req, res){
    serveStaticFile(res, '/gallery.html', 'text/html');
});
app.get('/location', function(req, res){
    serveStaticFile(res, '/location.html', 'text/html');
});
app.get('/manicure', function(req, res){
    serveStaticFile(res, '/manicure.html', 'text/html');
});
app.get('/spacombo', function(req, res){
    serveStaticFile(res, '/spacombo.html', 'text/html');
});
app.get('/services', function(req, res){
    serveStaticFile(res, '/services.html', 'text/html');
});
app.get('/css/styles.css', function(req, res){
    serveStaticFile(res, '/css/styles.css', 'text/css');
});
app.get('/data/data.xml', function(req, res){
    serveStaticFile(res, '/data/data.xml', 'text/xml');
});
app.get('/data/data.json', function(req, res){
    serveStaticFile(res, '/data/data.json', 'application/json');
});
app.get('/data/data.html', function(req, res){
    serveStaticFile(res, '/data/data.html', 'text/html');
});
app.get('/data/data2.html', function(req, res){
    serveStaticFile(res, '/data/data2.html', 'text/html');
});
app.get('/data/datajQuery.html', function(req, res){
    serveStaticFile(res, '/data/datajQuery.html', 'text/html');
});
app.get('/assets/x.png', function(req, res){
    serveStaticFile(res, '/assets/x.png', 'image/png');
});
app.get('/assets/originallogo.png', function(req, res){
    serveStaticFile(res, '/assets/originallogo.png', 'image/png');
});
app.get('/assets/gallerypic1.jpg', function(req, res){
    serveStaticFile(res, '/assets/gallerypic1.jpg', 'image/jpeg');
});
app.get('/assets/gallerypic2.jpg', function(req, res){
    serveStaticFile(res, '/assets/gallerypic2.jpg', 'image/jpeg');
});
app.get('/assets/gallerypic3.jpg', function(req, res){
    serveStaticFile(res, '/assets/gallerypic3.jpg', 'image/jpeg');
});
app.get('/assets/gallerypic4.jpg', function(req, res){
    serveStaticFile(res, '/assets/gallerypic4.jpg', 'image/jpeg');
});
app.get('/assets/gallerypic5.jpg', function(req, res){
    serveStaticFile(res, '/assets/gallerypic5.jpg', 'image/jpeg');
});
app.get('/assets/gallerypic6.jpg', function(req, res){
    serveStaticFile(res, '/assets/gallerypic6.jpg', 'image/jpeg');
});
app.get('/assets/manicure.jpg', function(req, res){
    serveStaticFile(res, '/assets/manicure.jpg', 'image/jpeg');
});
app.get('/assets/pedicure.jpg', function(req, res){
    serveStaticFile(res, '/assets/pedicure.jpg', 'image/jpeg');
});
app.get('/assets/spacombo.jpg', function(req, res){
    serveStaticFile(res, '/assets/spacombo.jpg', 'image/jpeg');
});
app.get('/assets/service-mani.jpg', function(req, res){
    serveStaticFile(res, '/assets/service-mani.jpg', 'image/jpeg');
});
app.get('/assets/service-pedi.jpg', function(req, res){
    serveStaticFile(res, '/assets/service-pedi.jpg', 'image/jpeg');
});
app.get('/assets/service-spa.jpg', function(req, res){
    serveStaticFile(res, '/assets/service-spa.jpg', 'image/jpeg');
});
app.get('/node_modules/jquery/dist/jquery.min.js', function(req, res){
    serveStaticFile(res, '/node_modules/jquery/dist/jquery.min.js', 'application/javascript');
});
app.get('/src/gallery.js', function(req, res){
    serveStaticFile(res, '/src/gallery.js', 'application/javascript');
});
app.get('/src/htmlajax.js', function(req, res){
    serveStaticFile(res, '/src/htmlajax.js', 'application/javascript');
});
app.get('/src/jqueryajax.js', function(req, res){
    serveStaticFile(res, '/src/jqueryajax.js', 'application/javascript');
});
app.get('/src/jsonajax.js', function(req, res){
    serveStaticFile(res, '/src/jsonajax.js', 'application/javascript');
});
app.get('/src/location.js', function(req, res){
    serveStaticFile(res, '/src/location.js', 'application/javascript');
});
app.get('/src/services.js', function(req, res){
    serveStaticFile(res, '/src/services.js', 'application/javascript');
});
app.get('/src/xmlajax.js', function(req, res){
    serveStaticFile(res, '/src/xmlajax.js', 'application/javascript');
});

// Default route
app.use((req, res) => {
    serveStaticFile(res, '/404.html', 'text/html', 404);
});

const server = app.listen(port, function(){
    console.log(`Server running at http://localhost:${port}/`);
});