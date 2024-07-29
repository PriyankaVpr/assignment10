
//1) JAVASCRIPT

//     : most popular programming language
//ROLE : to create interactive and dynamic web pages

// 2) Variables and Types

let userAge = 19
let userName ="pri"
console.log(userAge,userName)

// 3) Comments in Javascript

let myNumbers = [1, 2, 3, 4, 5];
let sum = calculateSum(myNumbers);
console.log("The sum of the array is:", sum);

//(purpose of function - This function calculates the sum of all numbers in an array.
// It takes an array of numbers as input and returns the total sum.
//The function uses a for loop to iterate over the array and accumulate the sum.)

// 4) Operations

let num1 = 5
let num2 = 5
 console.log(x+y)
 console.log(x-y)
 console.log(x*y)
 console.log(x/y)

 // 5) Data types

 var a = "pri"
 var b = 19
 var c = true
 var d = [1,2,3]

 console.log(typeof(a))
 console.log(typeof(b))
 console.log(typeof(c))
 console.log(typeof(d))

 // 6) Functions in Javascript

 function greetUser(name) {
    return "Hello, " + name + "! Welcome to our website.";
}
export let greetingMessage = greetUser("priyanka");
console.log(greetingMessage);

// 7) If else

var temperature = 10
if(temperatue > 30)
    console.log("good weather")
else{
    console.log("bad weather")
}

// 8) For loop

for(let i=1; i<6; i=i+1){
    console.log(i)
}

// 9 ) Loose vs Strict Equality

//Loose Equality (==)
//Loose equality (==) checks for equality after performing type conversion
console.log(5 == '5'); 

//Strict Equality (===)
//Strict equality (===) checks for equality without performing type conversion.
console.log(5 === '5');