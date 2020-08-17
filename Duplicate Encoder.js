function duplicateEncode(word) {
    // ...

    const counter = {};
    word.toLowerCase().split("").forEach(el => { counter[el] = 1 + (counter[el] || 0); }
    );
    return word.split("").map(el => {
        if (counter[el.toLowerCase()] > 1) { return ")"; }
        else { return "("; }
    }).join("");
}


// function comp(array1, array2) {
//     //your code here
//     let operator = true;
//     array1.forEach(num => {
//         operator = (operator && array2.includes(num ** 2));
//     });
//     return operator;

// }