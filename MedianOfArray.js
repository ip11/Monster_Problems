var arr = [4,8,2,3,5,5,2,6,7,14,25,3,6,18,25,32,12,4,36,25,39,28,17,1,4];
var median;
var length = arr.length;
if( length %2 != 0){
    median=((length +1)/2); // if dimension of the array element is odd
    console.log("Median of the Array is: "+ arr[median-1]);
    
}
else{
    median=((length/2) +(length +1)/2);
    median /= 2;
    console.log("Median of the Array is : "+ arr[median -1]);
}