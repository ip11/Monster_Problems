/*

a program to produce the sum of series as below
[(1^1)/1] + [(2^2)/2] + [(3^3)/3] + [(4^4)/4] + [(5^5)/5] + ... + [(n^n)/n]

*/

var num = 5;
var sum=0;

for( let i =1;i<=num;i++){
    sum=sum+((i**i)/i);
}
console.log("The sum of the serie upto "+num +" is : "+sum);