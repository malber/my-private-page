var connect = require('connect'),
    http = require('http');

connect()
    .use(connect.static('.'))
    .use(connect.directory('.')) // lists directory: added onaclove2000 credit
    .listen(3000);