var num = 496;
var sum = 0;

for( let i =1;i<num;i++){
    if(num%i==0){
        sum +=i;
    }
}

if(num==sum){
console.log("Number is a Perfect Number");
}
else {
    console.log("Number is not a perfect Number");
}