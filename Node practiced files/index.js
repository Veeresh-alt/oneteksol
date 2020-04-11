var http = require('http');
var fs = require('fs');

var fs = require('fs');

fs.open('mynewfile1.txt', 'w', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

http.createServer(function (req, res) {
  fs.readFile('mynewfile1.txt', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);