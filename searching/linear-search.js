let arr=[1,2,3,4,5,0];
let target=0;
 function linearSearch(arr,target)
 {
     for(let i=0;i<arr.length;i++)
     {
         if(arr[i]===target)
         return i;
     }
     return -1;
 }
 
 console.log(linearSearch(arr,target));