const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 1337;
// based off function from lab, + more debug statements
function serveStaticFile(res, filePath, contentType, responseCode = 200) {
    const file = path.join(__dirname, filePath);
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

//create server method based on in lab assignment
const server = http.createServer((req, res) => {
    let url = req.url.toLowerCase().split('?')[0];
    url = url.endsWith('/') ? url.slice(0, -1) : url;

    switch (url) {
        case '/index':
            serveStaticFile(res, '/public/index.html', 'text/html');
            break;
        case '/about':
            serveStaticFile(res, '/public/about.html', 'text/html');
            break;
        case '/contact':
            serveStaticFile(res, '/public/contact.html', 'text/html');
            break;
        case '/gallery':
            serveStaticFile(res, '/public/gallery.html', 'text/html');
            break;
        case '/location':
            serveStaticFile(res, '/public/location.html', 'text/html');
            break;
        case '/manicure':
            serveStaticFile(res, '/public/pedicure.html', 'text/html');
            break;
        case '/pedicure':
            serveStaticFile(res, '/public/pedicure.html', 'text/html');
            break;
        case '/spacombo':
            serveStaticFile(res, '/public/spacombo.html', 'text/html');
            break;
        case '/services':
            serveStaticFile(res, '/public/services.html', 'text/html');
            break;
        case '/css/styles.css':
            serveStaticFile(res, '/public/css/styles.css', 'text/css');
            break;
        case '/css/styles.css':
            serveStaticFile(res, '/public/css/expanded.css', 'text/css');
            break;
        case '/data/data.xml':
            serveStaticFile(res, 'public/data/data.xml', 'text/xml');
            break;
        case '/data/data.json':
            serveStaticFile(res, 'public/data/data.json', 'application/json');
            break;
        case '/data/data.html':
            serveStaticFile(res, 'public/data/data.html', 'text/html');
            break;
        case '/data/data2.html':
            serveStaticFile(res, 'public/data/data.html', 'text/html');
            break;
        case '/data/datajQuery.html':
            serveStaticFile(res, 'public/data/datajQuery.html', 'text/html');
            break;
        //loading images, for some reason capital letters messed up the path
        case '/assets/x.png':
            serveStaticFile(res, '/public/assets/x.png', 'image/png');
            break;
        case '/assets/originallogo.png':
            serveStaticFile(res, '/public/assets/originallogo.png', 'image/png');
            break;
        case '/assets/gallerypic1.jpg':
            serveStaticFile(res, '/public/assets/gallerypic1.jpg', 'image/jpeg');
            break;
        case '/assets/gallerypic2.jpg':
            serveStaticFile(res, '/public/assets/gallerypic2.jpg', 'image/jpeg');
            break;
        case '/assets/gallerypic3.jpg':
            serveStaticFile(res, '/public/assets/gallerypic3.jpg', 'image/jpeg');
            break;
        case '/assets/gallerypic4.jpg':
            serveStaticFile(res, '/public/assets/gallerypic4.jpg', 'image/jpeg');
            break;
        case '/assets/gallerypic5.jpg':
            serveStaticFile(res, '/public/assets/gallerypic5.jpg', 'image/jpeg');
            break;
        case '/assets/gallerypic6.jpg':
            serveStaticFile(res, '/public/assets/gallerypic6.jpg', 'image/jpeg');
            break;
        case '/assets/manicure.jpg':
            serveStaticFile(res, '/public/assets/manicure.jpg', 'image/jpeg');
            break;
        case '/assets/pedicure.jpg':
            serveStaticFile(res, '/public/assets/pedicure.jpg', 'image/jpeg');
            break;
        case '/assets/spacombo.jpg':
            serveStaticFile(res, '/public/assets/spacombo.jpg', 'image/jpeg');
            break;
        case '/assets/service-mani.jpg':
            serveStaticFile(res, '/public/assets/service-mani.jpg', 'image/jpeg');
            break;
        case '/assets/service-pedi.jpg':
            serveStaticFile(res, '/public/assets/service-pedi.jpg', 'image/jpeg');
            break;
        case '/assets/service-spa.jpg':
            serveStaticFile(res, '/public/assets/service-spa.jpg', 'image/jpeg');
            break;
        //loading javascript, application/javascript worked better than text/javascript
        case '/node_modules/jquery/dist/jquery.min.js':
            serveStaticFile(res, '/public/node_modules/jquery/dist/jquery.min.js', 'application/javascript');
            break;
        case '/src/gallery.js':
            serveStaticFile(res, '/public/src/gallery.js', 'application/javascript');
            break;
        case '/src/htmlajax.js':
            serveStaticFile(res, '/public/src/htmlajax.js', 'application/javascript');
            break;
        case '/src/jqueryajax.js':
            serveStaticFile(res, '/public/src/jqueryajax.js', 'application/javascript');
            break;
        case '/src/jsonajax.js':
            serveStaticFile(res, '/public/src/jsonajax.js', 'application/javascript');
            break;
        case '/src/location.js':
            serveStaticFile(res, '/public/src/location.js', 'application/javascript');
            break;
        case '/src/services.js':
            serveStaticFile(res, '/public/src/services.js', 'application/javascript');
            break;
        case '/src/xmlajax.js':
            serveStaticFile(res, '/public/src/xmlajax.js', 'application/javascript');
            break;
        default:
            serveStaticFile(res, '/public/404.html', 'text/html', 404);
            break;
    }
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});