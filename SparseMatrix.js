var matrix1=[[[1,0,0],[0,7,0],[0,1,3]]];
var nonzero=0;
var zero=0;

for(let i=0;i<1;i++){
    for(let j=0;j<3;j++){
        for(let k=0;k<3;k++){
            if(matrix1[i][j][k]!=0){
                nonzero++;
            }
            else{
                zero++;
            }
        }
    }
}
if(nonzero>zero){
    console.log("The given matrix is a non sparse matrix");
}
else{
    console.log("The given matrix is a sparse matrix");
}