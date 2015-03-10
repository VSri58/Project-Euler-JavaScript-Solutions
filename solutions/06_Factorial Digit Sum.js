/** Solution to Project Euler Problem 20 using JavaScript **/
/** https://projecteuler.net/problem=20 **/

//Global declarations
var fact = 1;
var finalFactSum=0;

// Function to find factorial
function factorial(n){
    for(i=n;i>0;i--){
        fact *=i;
    }
    return fact;
}

//Function to find the sum of the digits of a number
function sumOfDigits(d)
{
    var str = d.toString();
    var tempSum = 0;
     for (var i = 0; i < str.length; i++){
    tempSum += parseInt(str.charAt(i), 10);
  }
    return tempSum;
}

// Function to get the sum of the digits of a factorial of a number
function getFactSum(n)
{
    var factNum = factorial(n);
    finalFactSum = sumOfDigits(factNum);
    
    console.log(factNum);
    console.log(finalFactSum);
}
getFactSum(10);