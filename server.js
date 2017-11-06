const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(express.static('./public'))
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.get('/', function(request, response){
	response.sendFile('./public/html/index.html', {root: './'})
})
app.get('/cargo-validator', function(request, response){
  response.sendFile('./public/html/cargo-validator.html', {root: './'})
})
app.get('/vancouver', function(request, response){
	response.sendFile('./public/html/vancouver.html', {root: './'})
	console.log('went to vancouver')
})
app.get('/portland', function(request, response){
	response.sendFile('./public/html/portland.html', {root: './'})
	console.log('went to portland')
})
app.get('/sanfran', function(request, response){
	response.sendFile('./public/html/sanfran.html', {root: './'})
	console.log('went to San Francisco')
})
app.get('/aspen', function(request, response){
	response.sendFile('./public/html/aspen.html', {root: './'})
	console.log('went to Aspen')
})
app.get('/boulder', function(request, response){
	response.sendFile('./public/html/boulder.html', {root: './'})
	console.log('went to Boulder')
})

app.post('/cargo-validator', function (req, res) {
	var totals = req.body;
	res.send('working')
})

app.listen(8090, function(){
})
