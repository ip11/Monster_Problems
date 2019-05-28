var matrix = [[[1,2,3],[4,5,6],[7,8,9]]];
var temp =[[[],[],[]]];

for(let i =0;i<1;i++){
    for(let j=0;j<=2;j++){
        for(let k=0;k<=2;k++){
            temp[i][j][k] =matrix[i][j][k];
            matrix[i][j][k]=matrix[i][k][j];
            matrix[i][k][j]=temp[i][j][k];
        }
    }
}
console.log(matrix)