// #1 create a variable called 'myName' and assign it to your name as a string

// CODE HERE
var myName = "Karli Stevens";

// #2 create a variable called 'faveNum' and assign it to your favorite number

// CODE HERE
var faveNum = 32;

// #3 create a variable called 'lovesCode' and set it to true

// CODE HERE
var lovesCode = true;

// #4 Using the previously created variables, create a new variable called 'me' that combines the myName and faveNum varible to create a sentence like this 'My name is Bryan and my favorite number is 3'

// CODE HERE
var me = "My name is " + myName + " and my favorite number is " + faveNum;

// #5 Using the previously created faveNum variable, create a new variable called 'trueFaveNum' that outputs true when comparing to a number.

// CODE HERE
var trueFaveNum = faveNum;
function compare(trueFaveNum, faveNum) {
  if (trueFaveNum === 32) {
    return true;
  } else {
    return false;
  };
}
console.log(compare(trueFaveNum));

// #6 Create a new variable called notHakeem using the previously created myName variable, test that your name DOES NOT equal 'Hakeem Olajuwon'. If your name does happen to be Hakeem Olajuwon, test against 'Karl Malone'

// CODE HERE
var notHakeem = function(myName) {
	if (myName !== 'Hakeem Olajuwon') {
		return notHakeem;
  } else if (myName == 'Hakeem Olajuwon')	{
    if ('Hakeem Olajuwon' == 'Karl Malone') {
    	return;
    }
  }
};
   console.log(myName);


// #7 Create an if statement that checks the age variable below. If age is greater than 16, then set canDrive to true otherwise set canDrive to false. The canDrive variable will be set by the unit test so do not adjust it.
var age = 18;
var canDrive;


// CODE HERE
if (age > 16) {
  canDrive = true;
} else {
  canDrive = false;
} 

console.log(age);

// #8 Create an if statement inside of the responseCreator function that sets the colorResponse variable value based off of a passed in value. The param value passed in will be added in the unit test. If the param value is 'green' set colorResponse variable to 'Green is okay'. If the param value is 'red' set reponse variable to 'I heart red'. Otherwise set the colorResponse variable to 'What is your favorite color?'. Make sure to return the colorResponse variable at the end once it has been properly set.

var colorResponse;

var responseCreator = function(param){
  // CODE HERE
  var responseCreator = function(param){
    // CODE HERE
   var param = {
     val1: green,
     val2: red
   }
  
    if (param[val1]) {
      return (colorResponse = "Green is okay");
        } 
    if (param[val2]) {
      return (colorResponse = "I heart red");
      } else {
    return (colorResponse = "What is your favorite color?");
    }
    return responseCreator;
  }
  
  console.log(responseCreator.param[val1]);
}

// #9 Create a function called 'sum' that takes in a parameter and returns the sum of that parameter.

// CODE HERE
var nums = [1,2,3];

function sum (nums) {
  var sum = 0;
  for (var i=0; i < arr.length; i++) {
    sum += nums[i]
  };
}
console.log(sum);

// #10 Create a function called greeter that takes in two parameters, name(a string) and number(a number). Have greeter return a string that says something like this 'Hi! I am Bryan and I am 28 years old" but with the appropriate values.

// CODE HERE
var info = {
  name: 'Karli',
  number: 29
  };

function greeter(name,number) {
	return "Hi! I am" + info.name + " and I am" + info.number + " years old";
}

console.log(greeter);
