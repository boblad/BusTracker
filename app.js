var express = require('express');
var mongodb = require('mongodb');
var app = express();
var port = 8081

app.get('/list-users', function (req, res) {
  var user = {
    name: "bryant",
    email: "b.o@gmai.com",
    age: 20
  }
  var date = JSON.stringify(user);
  res.send(date);
});

var server = app.listen(port, function () {

  // var host = server.address().address
  // var port = server.address().port
  //
  // console.log("Example app listening at http://%s:%s", host, port)
  console.log("Example app listening at http://localhost:" + port);

});
