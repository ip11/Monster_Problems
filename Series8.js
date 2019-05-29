/*

a program to produce the sum of series as below
[(1^1)/1!] + [(2^2)/2!] + [(3^3)/3!] + [(4^4)/4!] + [(5^5)/5!] + ... + [(n^n)/n!]

*/

var num = 5;
var sum=0;
var fact=1;

for( let i=1;i<=num;i++){
    fact=1;
    for(let j =1;j<=i;j++){
        fact=fact*j;
        if(i==j){
            sum=sum+((i**i)/fact);
        }
    }
}

console.log("The sum of the serie upto "+num +" is : "+sum);

