/** Solution to Project Euler Problem 2 using JavaScript **/
/** https://projecteuler.net/problem=2 **/

var f1 = 0;
var f2 = 1;
var f3;
var sum = 0;

do {
    f3 = f1 + f2;
    f1 = f2;
    f2 = f3;
    if (f2 % 2 == 0) 
    {
        sum += f2;
    }
} while (f2 < 4000000);

console.log(sum);