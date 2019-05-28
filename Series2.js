var num=7;
var n=1;
console.log(n);

for( let i=1;i<=num;i++){
    
    if(i%2!=0){
        n=n*2;
    }
    else{
        n=n*1.5;
    }
    console.log(n);
}