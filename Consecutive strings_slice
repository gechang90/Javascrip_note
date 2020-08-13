// function longestConsec(strarr, k) {
//     // your code
//     const n = strarr.length;
//     if (n === 0 || k > n || k <= 0) { return ""; }
//     else {
//         let strSumPool = [];
//         function add(currentIndex) {
//             let strsum = "";
//             for (i = 0; i < k; i++)
//                 strsum = strsum + strarr[currentIndex + i];
//             return strsum;
//         }
//         for (j = 0; j < n - k + 1; j++) {
//             strSumPool.push(add(j));
//         }

//         let output = "";
//         for (p = 0; p < strSumPool.length; p++) {
//             if (output.length < strSumPool[p].length) { output = strSumPool[p]; }
//         }
//         return output;

//     }

// }

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2));


function longestConsec(strarr, k) {
    var longest = "";
    for(var i=0;k>0 && i<=strarr.length-k;i++){
      var tempArray = strarr.slice(i,i+k);
      var tempStr = tempArray.join("");
      if(tempStr.length > longest.length){
        longest = tempStr;
      }
    }
    return longest;
}

