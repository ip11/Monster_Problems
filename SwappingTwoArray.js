/*

A program to swap two array elements
*/

var arr1 = [4,5,6,8];
var arr2 = [3,6,9,1];
var flag=1;
if(arr1.length!=arr2.length){ //to check whether both array of same dimensional
var flag=0 , i;
}
else{
    for(  i = 0;i<arr1.length;i++){
        arr1[i]=arr1[i]^arr2[i];         //swapping
        arr2[i]=arr1[i]^arr2[i];
        arr1[i]=arr1[i]^arr2[i];
    }
}

if(flag==0){
    console.log("Cannot Swap the two Array Elements");
}
else{
    console.log("after swapping arrays are :" +arr1 + " second array "+arr2);
       
}