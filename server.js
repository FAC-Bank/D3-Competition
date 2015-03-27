var Hapi = require('hapi');
var server = new Hapi.Server();
var Path   = require("path");

server.connection({
    port: 8000,
    host: "localhost"
});

server.route([{
    method: 'GET',
    path: '/{filename}',
    handler: {
        directory: {
            path: Path.join(__dirname, "/d3")
        }
    }
}, {
    method: "GET",
    path: "/graphs",
    handler: function(request, reply){
        reply.file("../assets");
    }
    
}]);


server.start();