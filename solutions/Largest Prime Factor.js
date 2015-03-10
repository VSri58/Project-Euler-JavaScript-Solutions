/** Solution to Project Euler Problem 3 using JavaScript **/
/** https://projecteuler.net/problem=3 **/

var num = 600851475143;
var lgPrimeFact = 0;
var i = 2;

while (i * i <= num){
    if (num % i == 0) {
        num = num / i;
        lgPrimeFact = i;
    } else {
        i++;
    }
}
if (num > largestFact) {
    lgPrimeFact = num;
}
console.log(lgPrimeFact);