function facorial(n){
  let result=1;
  for(let i=2;i<=n;i++){
    result= result*i;
  }
  return result;
}


console.log(facorial(2))
console.log(facorial(4))
console.log(facorial(5))
console.log(facorial(6))

// Big O --> O(n)-Linear