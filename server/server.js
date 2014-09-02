var connect = require('connect'),
    http = require('http');
serveStatic = require('serve-static');

connect()
    .use(serveStatic('.'))
    .listen(3000);