/* 
a program to Generate Even and Odd Number less than N and Generate ‘N’ Even and Odd
Numbers.

*/

var num = 25;
var odd=0;
var even=0;

for( let i= 1; i<=num ; i++){
    if(i%2!==0){
        console.log(i +" Number is odd ");
        odd++;
    }
    else{
        console.log(i + " Number is even  ");
        even++;
    }
}
console.log("Total Number of odd Number are : " + odd);
console.log("total Number of even numbers are: "+ even);