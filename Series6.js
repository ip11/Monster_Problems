/*


a program to produce the sum of series as below
(1!/1) + (2!/2) + (3!/3) + (4!/4) + (5!/5) + ... + (n!/n)

*/

var num = 5 ;
var sum = 0;
var fact;
for( let i =1;i<=num;i++){
    fact=1;
    for(let j=1;j<=i;j++){
        fact=fact*j;
        if(i==j){
            sum=sum+fact/i;
        }
    }
}

console.log("The sum of the series upto "+num+" is : "+sum);