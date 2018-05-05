var express = require("express"),
  app = express(),
  fs = require("file-system"),
  port = process.env.PORT || 3000;
app.use(express.static(__dirname + "/public"));
app.get("/", function(req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("index.html", null, function(err, data) {
    if (err) {
      res.writeHead(404);
      res.write("File not found");
    } else {
      res.write(data);
    }
    res.end();
  });
});
app.listen(port, function() {
  console.log("App running");
});
