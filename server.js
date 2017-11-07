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

app.post('/cargo-validator', function(request, response) {
	 console.log(request.body);
	if (request.body.cost > 200 && request.body.cost > 200) {
		response.send(`You've spent too much money and your cargo is too heavy`)
	}
	else if (request.body.weight > 200) {
		response.send(`You're cargo weighs too much`)
	}
	else if(request.body.cost > 200) {
		response.send(`You're cargo is too expensive`)
	}
	else{
		response.send(`Good to go!`)
	}

})
app.listen(8090, function(){
})
