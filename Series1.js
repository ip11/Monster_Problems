/* a program to produce the sum of series as below
1/2 - 2/3 + 3/4 - 4/5 + 5/6 - ...... n
*/


var num = 5;
var first,digit,sum=0;
for(let i=1; i<=num;i++){
    first=i;
    last=i+1;
    if(i%2!=0){
        sum=sum+first/last;

    }
    else{
        sum=sum-first/last;

    }

}

console.log("THe sum of the series upto "+num+" is : "+ sum);