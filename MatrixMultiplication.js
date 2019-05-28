var matrix1=[[[1,1,1],[2,2,2],[3,3,3]]];
var matrix2= [[[1,1,1],[1,1,1],[1,1,1]]];
var sum = [[[],[],[]]];
var mult = [[[],[],[]]];
mult[0][0][0]=0;
mult[0][1][0]=0;
mult[0][2][0]=0;


for(let i =0;i<1;i++){
    for(let j=0;j<=2;j++){
       // mult[i][j]=0;
        for(let k = 0; k<=2; k++){
            

        sum[i][j][k]= matrix1[i][j][k]*matrix2[i][k][j] ;
         mult[i][j][k]+=sum[i][j][k];
         console.log(sum)
    }

}
}

console.log(mult);