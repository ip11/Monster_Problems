var arr = [10,2,52,53,53,24,32,54,22,25,23,5,4,82,5,23,54,63,12,15,66,33,22,74,85,96,63,52,41,5];
var highest=arr[0] , lowest =arr[0] ;
for( let i = 0; i<arr.length;i++){
 if(highest<arr[i]){
     highest=arr[i];
 }
 else if(lowest>arr[i]){
     lowest=arr[i];
 }
}

console.log("Highest Number is: " + highest);
console.log("lowest Number is : "+ lowest);