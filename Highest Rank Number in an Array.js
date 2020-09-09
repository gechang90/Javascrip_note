function highestRank(arr) {
    //Your Code logic should written here
    let counter = {};
    arr.forEach((num) => {
        counter[num] = counter[num] + 1 || 1;
    });
    candidate = []
    for (const key in counter) {
        if (counter[key] === Math.max(...Object.values(counter))) {
            candidate.push(Number(key))
        }
    }
    return Math.max(...candidate)
}


console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]));