var Express     = require('express'),
    bodyParser  = require('body-parser'),
    http        = require('http'),
    db          = require('./js/db.js');

var app         = Express(),
    jsonParser  = bodyParser.json();

// API
app.post('/api/users/add/',jsonParser,addUser);
app.get('/api/users/list',listUsers);

// APP DEF
app.use('/css', Express.static('css'));
app.use('/js', Express.static('js'));
app.use('/', Express.static('html'));

function addUser(req,res){
  db.addUser(req.body,function(err,result){
    if(err){
      res.statusCode = 403;
    }else{
      res.statusCode = 200;
      res.send(result);
    }
  });
}

function listUsers(req,res){
  console.log("hit api");
  db.listUsers(function(err,result){
    if(err){
      res.statusCode = 403;
    }else{
      res.statusCode = 200;
      res.send(result);
    }
  });
}

http.createServer(app).listen(8080, function(){
  console.log('Server connected');
});
db.connectDb();