var num ,  divisor, quoteint,rem;
num = 20;
divisor=3;
quoteint=num/divisor;
quoteint=Math.floor( quoteint);
rem=num-(quoteint*divisor);
console.log("remainder of " + num + " and " + divisor +" is: " + rem)