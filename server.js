var Hapi = require('hapi');
var Server = new Hapi.server();
var Path   = require("path");

Server.connection({
    port: 8000,
    host: "localhost"
});

Server.route({
    method: 'GET',
    path: '/',
    handler: {
        file: Path.join(__dirname, "/d3")
    }
});

Server.start();