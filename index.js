var server = require("./server");
var log = require("./log").log;
var port = process.argv[2] || 5001;

//返回404
function fourohfour (info) {
	// body..
	var res = info.res;
	log("Request handler fourohfour was called.");
	res.writeHead(404, {"content-Type": "text/plain"});
	res.write("404 Page Not Found");
	res.end();
}

var handle = {};
handle["/"] = fourohfour;

server.serveFilePath("static");
server.start(handle, port);