/*

An Algorithm using Javascript to check if a given number is in the following series:
4,16,64,256,1024,4096,16384.,......., 4^N

*/

var num=8;
var series=[];
var flag=1;

for(let i=1;i<=num;i++){
    series[i-1]=4**i;
}
var search=16384;
for(let j=0;j<num;j++){
    if(search==series[j]){
        flag=0;
        break;
    }
    else{
        flag=1;

    }
}
if(flag==0){
    console.log("The number is present in series");

}
else{
    console.log("The number is not present in the series");
}
