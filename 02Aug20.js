
// var num = 123456;
// var strnum = num.toString()

// console.log(strnum);

function opposite(number) {
    //your code here
    var opponum = 0 - number;
    return opponum;
};

// // console.log(opposite(15616861));

function countPositivesSumNegatives(input) {
    var countpo = 0;
    var sumneg = 0;
    if (!input) {
        return [];
    }
    input.forEach(element => {
        if (element > 0) { countpo += 1; }
        else if (element < 0) { sumneg += element; }
    });
    if (countpo == 0 && sumneg == 0) {
        return [];
    } else { return [countpo, sumneg]; }
}

//  edcoding dna
function DNAStrand(dna) {
    //your code here
    var dnalib = {
        A: "T",
        T: "A",
        C: "G",
        G: "C"
    };
    var output = "";
    for (i = 0; i < dna.length; i++) {
        output += dnalib[dna[i]];
    };
    return output;
}



// console.log(DNAStrand("ATCG"));


// times multiple times till got 1 digit


function persistence(num) {
    //code me
    function separate(num) {
        var arrnum = num.toString().split("");
        return arrnum.map(strnum => Number(strnum));
    };

    // console.log(separate(10));

    var arrnum = separate(num);

    function multiply(listnum) {
        var result = 1;
        for (i = 0; i < listnum.length; i++) {
            result = listnum[i] * result;
        }
        return result;
    }

//     // console.log(multiply([1,0]))
    var counter = 0;
    while (num >= 10) {
        var arr1 = separate(num);
        num = multiply(arr1);
        counter++;

    }

    return i;

}

// console.log(persistence(999));


//  find if element in a arr
function printerError(s) {
  
//   var arr1 = s.split("");

//   var lenarr1 = arr1.length
//   var badwords = ["n","o","p","q","r","s","t","u","v","w","x","y","z"]
//   var count = 0
//   for (i=0;i<lenarr1;i++){
//     if (badwords.includes(arr1[i])){
//      count++ 
//     }    
//   }
  return (count)+"/"+(lenarr1);

  var res = s.match(/n|o|p|q|r|s|t|u|v|w|x|y|z/gi);
  return `${res.length}/${s.length}`
}

function repeatStr (n, s) {
  return s.repeat(n);
}

// sum of a array

function find_average(array) {
  var sum = array.reduce((a, b) => a + b, 0);
  return sum/array.length;
}

