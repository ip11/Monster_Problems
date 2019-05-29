/*
 a Program to check the frequency(count) of odd numbers and even numbers in matrix

 */

 var matrix = [[[1,2,3],[4,5,6],[7,8,9]]];
var even = 0 , odd = 0;

for(let i =0;i<1;i++){
    for(let j=0;j<=2;j++){
        for(let k=0;k<=2;k++){
            if(matrix[i][j][k]%2==0){
                even++;
            }
            else{
                odd++;
            }
        }
    }
}
console.log("The number of even numbers present in the Matrix : "+ even);
console.log("The number of odd numbers present in the Matrix : "+ odd);
