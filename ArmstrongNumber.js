var num =407;
var num1=num;
var originalnum=num;

var sum =0,lastdigit,digits=0;

while(num1>0){   //to calculate total number of digits
    num1=num1/10;
    num1=Math.floor(num1);
    digits++;
}
while(num>0){
    lastdigit=num%10;
    sum=sum+Math.pow(lastdigit,digits);
    num /= 10;
    num=Math.floor(num);


}
if(originalnum==sum){
console.log("The Number is Armstrong number");
}
else{
    console.log("The number is not a Armstrong number ")
}