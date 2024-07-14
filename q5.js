function duplicates(arr){
   return[...new Set(arr)]
}

arr= [1,1,1,3,4,5,5]
console.log(duplicates(arr))