var matrix = [[[1,4,0],[0,5,0],[0,2,6]]];
var trace=0;

for(let i =0;i<1;i++){
    for(let j=0;j<=2;j++){
        for(let k=0;k<=2;k++){
            if(j==k){
                trace+=matrix[i][j][k];
            }
        }
    }
}

console.log("The trace of the given matrix is : "+trace);