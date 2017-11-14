
var http = require("http")

var server = http.createServer(function(req,res){
	res.setHeader("content-Type","text/html;charset=utf-8")
	res.writeHead(203,"OK")
	res.end()
})
server.listen(8080)

