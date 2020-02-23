const express = require('express');
const app = express();

app.listen(3000, function(){
  console.log("node server listening on port 3000...");
});

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('App');
})

app.use(express.static('public'));
