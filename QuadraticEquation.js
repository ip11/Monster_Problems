/* quadratic equation is of the form

  ax**2 + bx + c = 0

  */

  var a = 2 , b= -11 , c=5;
  var discriminant;
  var discriminantsqrt;
  var root1,root2;
   discriminant = b*b - 4*a*c;
   discriminantsqrt = discriminant**0.5;

   if( discriminant<0){
       console.log("There are no Real Roots of the Equation");
   }
   else{
       root1=(-b+discriminantsqrt)/(2*a);
       root2=(-b-discriminantsqrt)/(2*a);

       if(discriminant==0){
           console.log("The Root of the equation is : " + root1);
       }
       else{
           console.log(" The first root of the equation is : " + root1);
           console.log("The second root of the equation is : "+ root2)
       }
       
   }
