var matrix = [[[1,0,0],[0,1,0],[0,0,1]]];
var flag=1;

for(let i =0;i<1;i++){
    for(let j=0;j<=2;j++){
        for(let k=0;k<=2;k++){
            if(j==k){
                if(matrix[i][j][k]==1){ //to check same dimension number holds the value of 1 as of identity matrix
                    flag=1;
                }
                else{
                    flag=0;
                    break;
                }
            }
            else{
                if(matrix[i][j][k]==0){  //to check others value are zero
                    flag=1;
                }
                else{
                    flag=0;
                    break;
                }
            }

        }
    }
}
if(flag==1){
    console.log("Given Matrix is Identity matrix");
}
else{
    console.log("Given matrix is Not a Identity Matrix");
}