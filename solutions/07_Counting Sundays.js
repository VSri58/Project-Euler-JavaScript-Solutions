/** Solution to Project Euler Problem 19 using JavaScript **/
/** https://projecteuler.net/problem=19 **/

var sundayCount = 0;
 
for (var year = 1901; year <= 2000; year++) {
    for (var month = 1; month <= 12; month++) {
        if ((new Date(year, month)).getDay() == 0) {
            sundayCount++;
        }
    }
}
console.log(sundayCount);