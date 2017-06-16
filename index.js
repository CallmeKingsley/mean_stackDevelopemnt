var express = require('express');
var app = express();
var mongoose = require('mongoose');
const config = require('./config/database');


mongoose.promise = global.promise;
mongoose.connect(config.uri,(err) =>{
   if(err){
     console.log('couldnt connect to db', err)
   }else{

      console.log('connecting to db ' + config.db);
    
   }

});
// respond with "hello world" when a GET request is made to the homepage
app.get('*',(req, res) {
  res.send('<h1>kingsley Eris Banner Akpan</h1>');
});

app.listen(8080,() =>{

  console.log('Listening on port 8080');
});
