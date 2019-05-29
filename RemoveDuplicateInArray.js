//A program to remove duplicate element in an array

var arr = [ 1,2,3,4,5,6,7,3,1,5,8,9,5];

for(let i =0 ; i<arr.length;i++){
    for(let j=arr.length - 1;j>i;j--){
        if(arr[j]==arr[i]){
            arr.splice(j,1);
        }
    }
}
console.log("The new Array is :" + arr);