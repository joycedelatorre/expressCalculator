//Dependencies

var express = require("express");
//create express app instance 
var app = express();
//Routes
app.get("/:operation/:firstNum/:secondNum", function(req, res){
	//Parameters are received from the URL
	var operation = req.params.operation;
	//Parameters are converted to integers
	var firstNum = parseInt(req.params.firstNum);
	var secondNum = parseInt(req.params.secondNum);

//switch statement chooses operation based on the operation parameter
	switch(operation){
		case "add":
		result = firstNum + secondNum;
		break;

		case "subtract":
		result = firstNum - secondNum;
		break;

		case "multiply":
		result = firstNum * secondNum;
		break;

		case "divide":
		result = firstNum / secondNum;
		break;

		default: 
		result ="sorry the only valid opeartions are add multiply subtract and divide"
	}
//we return the result back to the user in the form of a string 
	 res.send(result.toString());

});

//initiate the listener

app.listen (3002);