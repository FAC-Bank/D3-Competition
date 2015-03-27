var Hapi = require("hapi");
var server = new Hapi.Server();
var Path   = require("path");

server.connection({
    port: 8000,
    host: "localhost"
});

server.route({
    method: "GET",
    path: "/{param}",
    handler: {
        directory: {
            path: Path.join(__dirname) + "/public"
        }
    }
});


server.start();
console.log("Server running at port 8000.");
