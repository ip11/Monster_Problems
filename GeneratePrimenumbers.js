var num = 100;
var i ,j ,isprime=1;

for( i=2;i<=num;i++){
    isprime=1; //lets assume current number is prime;

    for(j=2;j<=i/2;j++){
        if(i%j ==0){   //check whether number is prime or not 
            isprime=0;  // number willonly be prime if its modeulus is zero
            break;          // here we go out of the loop so that we can get the value of i
        }

    }
    if(isprime==1){
    console.log("Number of prime elements are :" +i);
    }
}