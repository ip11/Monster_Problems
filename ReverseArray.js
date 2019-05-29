/*
An Algorithm using Javascript to Reverse Array Elements without using Built in Function, ​ with
using temp array
*/

var arr= [1,7,4,8,5,2,9,6,3];
var temp ;
let a=arr.length-1;
console.log("Before reversing array is : "+ arr);

for(let i=0;i<a;i++){
    temp=arr[i];
    arr[i]=arr[a];
    arr[a]=temp;
    a--;
    
}
console.log("The Reverse of array is : "+ arr);