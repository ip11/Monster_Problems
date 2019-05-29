var yr = [1987, 2000 ,1998 , 2020 , 1888 , 1970,1000];
console.log(yr)
for ( var i = 0 ; i < yr.length ; i++){

    if(yr[i]%4 == 0)
    {
        if( yr[i]%100 == 0)
        {
            // year is divisible by 400, hence the year is a leap year
            if ( yr[i]%400 == 0){
                console.log(yr[i]+ " is a leap year.");
            }
            else{
                console.log(yr[i] + " is not a leap year.");
            }
        }
        else{
          console.log(yr[i]+ " is a leap year.");

        }
    }
    else{
        console.log(yr[i] + " is not a leap year.");
}
}