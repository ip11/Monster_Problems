var arr ;

var sum=(arr)=>{
    let large=0;
    for(let i =0;i< arr.length;i++){
            if(large<arr[i]){
                large=arr[i];
            }
    }
    console.log("The Largest element in Array is : " + large);
}
(()=>{console.log("hello")()})