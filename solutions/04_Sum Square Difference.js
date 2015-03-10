/** Solution to Project Euler Problem 6 using JavaScript **/
/** https://projecteuler.net/problem=6 **/

var sum, sqOfSum, sumOfSq, diff = 0; 
var n = 100;
 
sum = n * (n+1)/ 2;
sqOfSum = sum * sum;
sumOfSq = (n * (n + 1) * (2 * n + 1)) / 6;
diff = sqOfSum - sumOfSq;

console.log(diff);