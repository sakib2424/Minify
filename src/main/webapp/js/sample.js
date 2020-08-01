//var x = require("google-closure-library");

function log_function() {
	//	 When this function is optomized it actually completely removes
	//	 the two variables on the following lines and changes the log function
	//	 to always print 30, so the optomizations seem to get rid of inefficient
	//	 code as well
	var thisIsAveryLongVaroableName = 10;
	var anotherVeryLongFunctionName = 20;
	var output = thisIsAveryLongVaroableName + anotherVeryLongFunctionName;
	consoleLog("thisIsAveryLongVaroableName + anotherVeryLongFunctionName = "
			+ output);
}


function log_function2() {
	log_function();
	consoleLog("This button calls log_function() and then prints this to console");
}

function addTwoNumbers() {
	var firstNumber = parseInt(document.getElementById("firstNumber").value);
	var secondNumber = parseInt(document.getElementById("secondNumber").value);
	var output = firstNumber + secondNumber;
//	randomImport(); 
	console.log(output);
}


function outsideLibraryCall() {
	console.log("Absolute value of -10 is " + Math.abs(-10));
}

window['log_function'] = log_function;
window['log_function2'] = log_function2;
window['addTwoNumbers'] = addTwoNumbers;
//window['outsideLibraryCall'] = outsideLibraryCall; 
//goog.exportSymbol("outsideLibraryCall");
