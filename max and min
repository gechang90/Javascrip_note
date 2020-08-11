function mxdiflg(a1, a2) {
    // your code

    if (a1.length == 0 || a2.length == 0) {
        return -1;
    }
    else {
        const arr1 = a1.map(str => str.length);
        const arr2 = a2.map(str => str.length);
        const max1 = Math.max(...arr1);
        const min1 = Math.min(...arr1);
        const max2 = Math.max(...arr2);
        const min2 = Math.min(...arr2);
        function difference(a, b) {
            return Math.abs(a - b);
        }

        return Math.max(difference(max1, min2), difference(max2, min1));

    }

}
// var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
// var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
// console.log(mxdiflg(s1, s2));


// building towers

function towerBuilder(n) {
    // build here
    const len = 2*n-1
    let output = []
    for(i=1;i<n+1;i++){
     let stri = " ".repeat(n-i) + "*".repeat(2*i-1) + " ".repeat(n-i)
     output.push(stri)
    }
    return output
  }


//   console.log(towerBuilder(11))


// for in loop find the duplicate elements
function duplicateCount(text){
    //...
    const arrUpperTest = text.toUpperCase().split("");
    let counter = {};
    
    arrUpperTest.forEach(el=> counter[el]=1+(counter[el]||0))
    
    let output = 0
    for(const key in counter ){
      if (counter[key]>1){output++}
    }
    return output                     
      
  }
