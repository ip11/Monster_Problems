var matrix1=[[[1,2,3],[4,5,6],[7,8,9]]];
var matrix2 = [[[9,6,3],[8,5,2],[7,4,1]]];

var sum = [[[],[],[]]];
// matrix addidion
for(let i=0;i<1;i++){
    for( let j=0;j<=2;j++){
        for(let k=0;k<=2;k++){
        sum[i][j][k] = matrix1[i][j][k] + matrix2[i][j][k];
    }
}
}
console.log("The sum of the matrix is : " );
console.log(sum);

//matrix subtraction

var subtract = [[[],[],[]]];

for(let i=0;i<1;i++){
    for( let j=0;j<=2;j++){
        for(let k=0;k<=2;k++){
        subtract[i][j][k] = matrix1[i][j][k] + matrix2[i][j][k];
    }
}
}
console.log("The subtraction of the matrix is : ");
console.log(subtract);