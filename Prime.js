/*

a program to decide given N is Prime or not.

*/

var i,a=0,number=1303; // 'a' is just a variable to check whether number is prime or not.

for(i=2; i <= number/2; i++)
{
    if(number%i == 0)
    {
        a = 1;
        break;
    }
}
if(a == 0)
{
    console.log(number+"-The inputed number is Prime")
}
else
{
    console.log(number+"-The inputted number is not Prime")
}
