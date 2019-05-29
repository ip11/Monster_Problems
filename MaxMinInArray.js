/*

a program to find the minimum and maximum values that can be calculated by summing exactly
four of the five integers. Then print the respective minimum and maximum values as a single line of
two space-separated long integers.
Example, Input: [1, 2, 3, 4, 5]
Output; [10, 14]

*/

var arr=[1,2,3,4,5];
var max,min;
var sum=0;

for(let i=0;i<arr.length;i++){
    sum=sum+arr[i];
}
var temp=[];

for(let i=0;i<arr.length;i++){
    temp[i]=sum-arr[i];
}
max=temp[0];
for(let i=0;i<temp.length;i++){
    if(max<=temp[i]){
        max=temp[i];
    }
    else{
        min=temp[i];
    }
}
console.log(min+" "+max);