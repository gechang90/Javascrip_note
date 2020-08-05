// function getDivisorsCnt(n){
//     // todo
//   var divisors = []
//   for(i=1;i<=n;i++){
//     if(n%i==0){
//       divisors.push(i)
//     }
//   }
//   return divisors.length  
// }



function getDivisorsCnt(n){
    // todo
  var divisors = {}
  if (n==1){return 1}
  for(i=1;i<=n/2;i++){
    if(n%i==0){
      divisors[i] = true;
      divisors[n/i] = true;
    }
  }
  return Object.keys(divisors).length;
}