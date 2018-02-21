// CRUD Application
//-----------------
var app = require('express')(),
mongoose = require('mongoose'),
bodyParser = require('body-parser'),
port = 3001,
User = require('./model');

var db = 'mongodb://127.0.0.1/projectShopping';
mongoose.connect(db, { useMongoClient: true });
var con = mongoose.connection;

con.on('error', console.error.bind(console, 'connection error:'));

con.once('open', function () {
console.log("connection created");
});


app.use(bodyParser.json());       
app.use(bodyParser.urlencoded({extended:false})); 
app.use('/node_modules', express.static(path.join(__dirname.replace('server', ''), 'node_modules')))
app.use('/client', express.static(path.join(__dirname.replace('server', ''), 'client')))




app.listen(port, function () {
console.log(`App listening on port ${port}`);
})