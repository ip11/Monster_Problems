var n=5,r=2;

var ncr = factorial(n)/(factorial(r)*factorial(n-r));

var npr = factorial(n)/factorial(r);

console.log("The combination is : " + ncr);
console.log("The permutaion is :  "+ npr);

function factorial(x){
    var fact=1;
    for(let i=1; i<=x;i++){
        fact=fact*i;
    }
    return fact;
}