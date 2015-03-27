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
            path: "./assets",
            listing: false,
            index: true
        }
    }
});

    // method: "GET",
    // path: "/graphs",
    // handler: function(request, reply){
    //     reply.file(__dirname, "/assets/2008data.csv");
    // }
// }]);


server.start();
console.log("Server running at port 8000.");
