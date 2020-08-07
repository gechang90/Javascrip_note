function stray(numbers) {
    var cache = {};
    var uniqNum;
    numbers.forEach((num) => {
        if (cache[num] === undefined) {
            cache[num] = true;
        } else {
            cache[num] = false;
        }
    });
    for (const num in cache) {
        const isUniq = cache[num];
        if (isUniq) {
            uniqNum = num;
        }
    }
    return Number(uniqNum);
}


function capitalize(s) {
    const arrs = s.split("");
    const str1 = arrs.map((letter, i) => { if (i % 2 != 0) { return letter.toUpperCase(); } else { return letter; } }).join("");
    const str2 = arrs.map((letter, i) => { if (i % 2 == 0) { return letter.toUpperCase(); } else { return letter; } }).join("");
    return [str1, str2];
};


//upgrade from julia
// function capitalize(s) {
//     const arr = s.split("");
//     let res1 = '';
//     let res2 = '';
//     arr.forEach((letter, i) => {
//         if (i % 2 != 0) {
//             res1 = res1 + letter.toUpperCase();
//         } else {
//             res1 = res1 + letter;
//         }
//         if (i % 2 == 0) {
//             res2 = res2 + letter.toUpperCase();
//         } else {
//             res2 = res2 + letter;
//         }
//     });
//     return [res1, res2];
// };

// console.log(capitalize("abchadjkf"));


function titleCase(title, minorWords) {
    // arr of title
    if (!title) {
        return '';
    }
    let result = title.toLowerCase().split(" ").map(word => minorWords && minorWords.includes(word) ? word : word.replace(word[0], word[0].toUpperCase())).join(" ");
    return result.replace(result[0], result[0].toUpperCase());
}

console.log(titleCase('The Wind in the Willows', 'a an the of'));